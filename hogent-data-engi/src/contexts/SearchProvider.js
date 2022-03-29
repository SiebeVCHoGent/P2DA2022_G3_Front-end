import { createContext, useCallback, useState } from "react";

import mock_data from '../data/mock_data.json'

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [searchresult, setSearchresult] = useState({})
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const searchKMO = useCallback(async (query) => {
        try{
            setLoading(true)
            setError()
            //const {data} = await axios.get('.....')
            //TODO: Create request
            const data = mock_data[0]

            setSearchresult(data)
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