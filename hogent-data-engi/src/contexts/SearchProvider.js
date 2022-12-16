import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "./AuthProvider";

import * as api from "../api/search";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { ready } = useContext(AuthContext);

  const [searchresult, setSearchresult] = useState({});
  const [arrResults, setArrResults] = useState([]);
  const [sectorData, setSectorData] = useState();
  const [bestKmosSector, setBestKmosSector] = useState(null);
  const [bestSectors, setBestSectors] = useState();
  const [bestSectorsHS, setBestSectorsHS] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const searchKMO = useCallback(async (query) => {
    try {
      setLoading(true);
      setError();

      const data = await api.searchKmo(query);
      setGraphData(null);
      setArrResults([]);

      if (data.kmo.length === 1) setSearchresult(data.kmo[0]);
      else if (data.kmo.length === 0) {
        setSearchresult({});
        setError(`"${query}" leverde geen resultaten op.`);
      } else setArrResults(data.kmo);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getKmoByOndernemingsnummer = useCallback(async (query) => {
    try {
      setLoading(true);
      setError();
      setSearchresult(null);

      const data = await api.getKmoByOndernemingsnummer(query);
      setSearchresult(data.kmo);
      
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getSectorInfo = useCallback(
    async (id) => {
      if (ready) {
        try {
          setLoading(true);
          setError();

          const data = await api.getSector(id);

          if (data.sector === null)
            setSectorData({
              id: parseInt(id),
              naam: "Sector niet gevonden",
              notFound: true,
            });
          else setSectorData(data.sector);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    },
    [ready]
  );

  const getHoofdSectorInfo = useCallback(
    async (id) => {
      if (ready) {
        try {
          setLoading(true);
          setError();

          const data = await api.getHoofdSector(id);
          if (data.hoofdsector === null)
            setSectorData({
              id: id,
              naam: "Sector niet gevonden",
              notFound: true,
            });
          else
            setSectorData(data.hoofdsector);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    },
    [ready]
  );

  const setSingleKmo = useCallback((kmo) => {
    setSearchresult(kmo);
    setArrResults([kmo]);
  }, []);

  const getBestKmosSector = useCallback(
    async (sectorid) => {
      if (ready) {
        try {
          setLoading(true);
          setError();
          setBestKmosSector(null)

          const data = await api.getBestKmosSector(sectorid);
          setBestKmosSector(data.kmos);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    },
    [ready]
  );

  const getBestKmosHoofdSector = useCallback(
    async (sectorid) => {
      if (ready) {
        try {
          setLoading(true);
          setError();
          setBestKmosSector(null)

          const data = await api.getBestKmosHoofdSector(sectorid);
          setBestKmosSector(data.kmos);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    },
    [ready]
  );

  const getBestSectors = useCallback(async () => {
    if (ready) {
      try {
        setLoading(true);
        setError();

        const data = await api.getBestSectors();
        setBestSectors(data.sector.map((v, i) => {v['place'] = i + 1; return v}));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, [ready]);

  const getBestHoofdSectors = useCallback(async () => {
    if (ready) {
      try {
        setLoading(true);
        setError();

        const data = await api.getBestHoofdSectors();
        setBestSectorsHS(data.hoofdsector);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, [ready]);

  const [graphData, setGraphData] = useState(null);

  const getGraphData = useCallback(async (ondernemingsnummer) => {
    try{
      setLoading(true);
      setError();
      setGraphData(null)

      const data = await api.getGraphData(ondernemingsnummer);

      setGraphData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      searchKMO,
      setSingleKmo,
      getSectorInfo,
      getHoofdSectorInfo,
      getBestKmosSector,
      getBestSectors,
      getBestHoofdSectors,
      getBestKmosHoofdSector,
      getKmoByOndernemingsnummer,
      getGraphData,
      bestSectorsHS,
      searchresult,
      arrResults,
      error,
      loading,
      sectorData,
      bestKmosSector,
      bestSectors,
      graphData, setGraphData
    }),
    [
      searchKMO,
      setSingleKmo,
      getSectorInfo,
      getHoofdSectorInfo,
      getBestKmosSector,
      getBestSectors,
      getBestHoofdSectors,
      getBestKmosHoofdSector,
      getKmoByOndernemingsnummer,
      getGraphData,
      bestSectorsHS,
      searchresult,
      arrResults,
      error,
      loading,
      sectorData,
      bestKmosSector,
      bestSectors,
      graphData, setGraphData
    ]
  );

  return (
    <SearchContext.Provider value={value}> {children} </SearchContext.Provider>
  );
};
