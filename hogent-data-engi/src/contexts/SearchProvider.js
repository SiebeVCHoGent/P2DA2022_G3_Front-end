import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AuthContext } from "./AuthProvider";

import * as api from '../api/search';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const { ready } = useContext(AuthContext)

    const [searchresult, setSearchresult] = useState({})
    const [arrResults, setArrResults] = useState([]) 
    const [sectorData, setSectorData] = useState()
    const [bestKmosSector, setBestKmosSector] = useState([])
    const [bestSectors, setBestSectors] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const searchKMO = useCallback(async (query) => {
        try{
            setLoading(true)
            setError()
            
            const data = await api.searchKmo(query)
            
            setArrResults([])

            if (data.kmo.length === 1)
                setSearchresult(data.kmo[0])
            else if(data.kmo.length === 0)
            {
                setSearchresult({})
                setError(`"${query}" leverde geen resultaten op.`)
            }
            else
                setArrResults(data.kmo)
            console.log(data.kmo)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    const getSectorInfo = useCallback(async (id) => {
        try{
            setLoading(true)
            setError()
            
            const data = await api.getSector(id)

            if (data.sector === null)
                setSectorData({id: parseInt(id), naam: 'Sector niet gevonden', notFound: true})
            else
                setSectorData(data.sector)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    const setSingleKmo = useCallback((kmo) => {
        setSearchresult(kmo)
        setArrResults([kmo])
    }, [])


    const getBestKmosSector = useCallback(async (sectorid) => {
        try{
            setLoading(true)
            setError()
            
            const data = await api.getBestKmosSector(sectorid)
            console.log(data)
            setBestKmosSector(data.kmos)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])

    const getBestSectors = useCallback(async () => {
        if (ready)
        {
            try{
                setLoading(true)
                setError()
                
                const data = await api.getBestSectors()
                console.log(data)
                setBestSectors(data.sector)
            }
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
    }, [ready])

    const value =  useMemo(() => ({
        searchKMO, setSingleKmo, getSectorInfo, getBestKmosSector, getBestSectors, searchresult, arrResults, error, loading, sectorData, bestKmosSector, bestSectors
    }), [searchKMO, setSingleKmo, getSectorInfo, getBestKmosSector, getBestSectors, searchresult, arrResults, error, loading, sectorData, bestKmosSector, bestSectors])


    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}