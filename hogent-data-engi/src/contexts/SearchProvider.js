import { createContext, useCallback, useState } from "react";

import mock_data from '../data/mock_data.json'
import axios from 'axios';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [searchresult, setSearchresult] = useState({})
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const searchKMO = useCallback(async (query) => {
        try{
            const url = 'http://localhost:9000/api/kmo/'
            setLoading(true)
            setError()
            const {data} = await axios.get(url + query)

            if (data.Lenght === 0)
                setSearchresult({empty: true})
            else
                setSearchresult(data.kmo[0])
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }, [])


    return (
        <SearchContext.Provider value={{searchKMO, searchresult, error, loading}}>
            {children}
        </SearchContext.Provider>
    );
}