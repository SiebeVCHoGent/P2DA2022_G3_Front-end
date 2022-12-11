import { useContext, useEffect, memo } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import ReactLoading from 'react-loading'
import Title from "../Title";
import Words from './Words'

export default function SearchTerms() {
    const { getSearchTerms, searchTerms, loading,settTerm,term } = useContext(SearchTermContext)

    

    useEffect(() => {
        if (!searchTerms) {
            getSearchTerms()
        }
    }, [searchTerms, getSearchTerms])

    const Subterm = memo((props)=>{
        const x = props.x
        return <div className="pointer marginbottom" onClick={()=>settTerm(x)}>{' - '+x.term} {x.children.map(c=>{return <Subterm x={c} key={c.id}/>})}</div>
    })

    const Term = memo((props) => {
        const x = props.x
        return < >
            <div><b className="pointer" onClick={()=>settTerm(x)}>{x.term}</b>{x.children.map(c=>{return <Subterm x={c} key={c.id}/>})}</div>
            <hr/>
        </>
    })

    if (term) return <Words/>
    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>Het overzicht van alle zoektermen.</h3>
        <hr></hr>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}
        <div className="default-info-container table-container"><hr/>
        {searchTerms ? searchTerms.map((s) => {
            return <div><Term x={s} key={s.id}/></div>
        }) : null}
        </div>
        </div>
}