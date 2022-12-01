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
  const [bestKmosSector, setBestKmosSector] = useState([]);
  const [bestSectors, setBestSectors] = useState();
  const [bestSectorsHS, setBestSectorsHS] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const searchKMO = useCallback(async (query) => {
    try {
      setLoading(true);
      setError();

      const data = await api.searchKmo(query);

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
        setBestSectors(data.sector);
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
      bestSectorsHS,
      searchresult,
      arrResults,
      error,
      loading,
      sectorData,
      bestKmosSector,
      bestSectors,
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
      bestSectorsHS,
      searchresult,
      arrResults,
      error,
      loading,
      sectorData,
      bestKmosSector,
      bestSectors,
    ]
  );

  return (
    <SearchContext.Provider value={value}> {children} </SearchContext.Provider>
  );
};
