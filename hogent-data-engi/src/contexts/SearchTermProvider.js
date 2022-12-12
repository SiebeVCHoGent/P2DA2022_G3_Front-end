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

    const addWord = useCallback(async (word) => {
      try {
        setLoading(true);
        setError();
  
        const data = await api.addWord(term?.id,word);
        if (!data) setError("Woord toevoegen mislukt");
        else setWords(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },[term?.id])
  
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

    const setTheTerm = useCallback(async (term)=>{
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
        term,setTheTerm,addWord
      }),
      [
        getSearchTerms,
        error,
        loading,
        searchTerms,
        words,
        setWoorden,term,setTheTerm,addWord
      ]
    );
  
    return (
      <SearchTermContext.Provider value={value}> {children} </SearchTermContext.Provider>
    );
  };
  