import { useContext,useEffect, } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import Title from "../Title";
import ReactLoading from 'react-loading'


export default function Words() {
    const { setWoorden, words, loading,term,settTerm } = useContext(SearchTermContext)

    useEffect(() => {
        if (!words) {
            setWoorden(term?.id)
        }
    }, [words, setWoorden,term?.id])

    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>Het overzicht van alle woorden uit de zoekterm {term.term}</h3>
        <hr/>
       
        <p onClick={()=>{settTerm(undefined); setWoorden(0,true)}} className='pointer'>{'<- Terug'}</p>
        <div className="default-info-container table-container"><hr/>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}
        {words ? words.map((s) => {
            return <div key={s.id}>{s.woord}</div>
        }) : null}
        </div>
    </div>
}