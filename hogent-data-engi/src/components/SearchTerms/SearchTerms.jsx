import React, { useContext, useEffect, memo } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import ReactLoading from 'react-loading'
import Title from "../Title";
import Words from './Words'
import { BsFillInfoCircleFill } from "react-icons/bs";


export default function SearchTerms() {
    const { getSearchTerms, searchTerms, loading, setTheTerm, term } = useContext(SearchTermContext)

    useEffect(() => {
        if (!searchTerms) {
            getSearchTerms()
        }
    }, [searchTerms, getSearchTerms])

    const Actions = memo((props)=>{
        return <>
           <BsFillInfoCircleFill className="icon"/>
        </>
    })

    function printAllChildren (children) {
        return children.map((c,i)=>{
            return <React.Fragment key={i}>
                <tr key={c.id} onClick={() => setTheTerm(c)}>
                    <td></td>
                    <td>{c.term}</td>
                    <td><Actions/></td>
                </tr>
                {c?.children ? printAllChildren(c.children) : <></>}
            </React.Fragment>
        })
    }

    if (term) return <Words/>
    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>Overzicht van alle zoektermen.</h3>
        <hr></hr>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}
        <table className="table-top w-100 a">
            <thead>
                <tr>
                    <td>Hoofdtitel</td>
                    <td>Subtitel</td>
                    <td>Acties</td>
                </tr>
            </thead>
            <tbody>
                {
                    searchTerms ? searchTerms.map((s, i) => {
                        return <React.Fragment key={i}><tr key={s.id} onClick={() => setTheTerm(s)}>
                            <td>{s.term}</td>
                            <td></td>
                            <td><Actions /></td>
                        </tr>
                            {s.children ? printAllChildren(s.children) : <></>}
                        </ React.Fragment>
                    }) : <tr><td colSpan={3}>Geen Zoektermen Gevonden</td></tr>
                }
            </tbody>
        </table>
    </div>
}