import { createContext, useCallback, useMemo, useState } from "react";

import mock_data from '../data/mock_data.json'
import axios from 'axios';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [searchresult, setSearchresult] = useState({})
    const [arrResults, setArrResults] = useState([]) 
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const searchKMO = useCallback(async (query) => {
        try{
            const url = 'http://localhost:9000/api/kmo/'
            setLoading(true)
            setError()

            const {data} = await axios.get(url + query)

            if (data.kmo.length === 1)
                setSearchresult(data.kmo[0])
            else if(data.kmo.length === 0)
                setSearchresult({})
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

    const setSingleKmo = useCallback((kmo) => {
        setSearchresult(kmo)
        setArrResults([kmo])
    }, [])

    const value =  useMemo(() => ({
        searchKMO, setSingleKmo, searchresult, arrResults, error, loading
    }), [searchKMO, setSingleKmo, searchresult, arrResults, error, loading])


    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}