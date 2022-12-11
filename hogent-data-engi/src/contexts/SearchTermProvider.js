import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
  } from "react";
  import { AuthContext } from "./AuthProvider";
  
  import * as api from "../api/searchterms";
  
  export const SearchTermContext = createContext();
  
  export const SearchTermProvider = ({ children }) => {
    const { ready } = useContext(AuthContext);
  
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [searchTerms, setSearchTerms] = useState();
    const [words,setWords] = useState()
    const [term,setTerm] = useState()
  
    const getSearchTerms = useCallback(
      async () => {
        if (ready) {
          try {
            setLoading(true);
            setError();
  
            const data = await api.getSearchTerms();
  
            if (!data || data?.length === 0) setError("Geen zoektermen gevonden");
            else setSearchTerms(data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        }
      },
      [ready]
    );

    const setWoorden = useCallback(async (id,isReset)=>{
      if (isReset) setWords(undefined)
      if (ready) {
        try {
          setLoading(true)
          setError()

          const data = await api.getWoorden(id)
          if (!data || data?.length === 0) setError("Geen woorden gevonden")
          else setWords(data)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    },[ready])

    const settTerm = useCallback(async (term)=>{
      setTerm(term)
    },[])
  
   
  
    const value = useMemo(
      () => ({
        getSearchTerms,
        error,
        loading,
        searchTerms
        ,setWoorden,
        words,
        term,settTerm
      }),
      [
        getSearchTerms,
        error,
        loading,
        searchTerms,
        words,
        setWoorden,term,settTerm
      ]
    );
  
    return (
      <SearchTermContext.Provider value={value}> {children} </SearchTermContext.Provider>
    );
  };
  