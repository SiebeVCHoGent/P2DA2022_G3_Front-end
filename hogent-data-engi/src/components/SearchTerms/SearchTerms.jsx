import React, { useContext, useEffect, memo } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import ReactLoading from 'react-loading'
import Title from "../Title";
import Words from './Words'
import { BsFillDashCircleFill, BsFillInfoCircleFill, BsPlusCircleFill, BsFillTrashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

function makeAbbrivation (term) {
    if (term == null)
    return ""

    let abbr = ""
    let split = term.split(" ")
    split.forEach((s) => {
        abbr += s.charAt(0)
    })
    return abbr + " - "
}

export default function SearchTerms() {
    const { getSearchTerms, searchTerms, loading, setTheTerm, term, herbereken: herberekenenCon, addSearchterm, deleteSearchterm} = useContext(SearchTermContext)


    const { register, handleSubmit, reset } = useForm();
    const [ parent, setParent ] = useState(null)

    const onSubmitNewSearchterm = async (data) => {
        await addSearchterm(data?.searchterm, parent)
        reset()
    }

    const deleteTerm = async (term) => {
        await deleteSearchterm(term.id)
    }

    useEffect(() => {
        if (!searchTerms) {
            getSearchTerms()
        }
    }, [searchTerms, getSearchTerms])

    const herberekenen = async () => {
        await herberekenenCon()
    }


    const Actions = memo(({term})=>{
        return <>
           <BsFillInfoCircleFill className="icon click" onClick={() => setTheTerm(term)}/>
           <BsFillTrashFill className="icon click" onClick={() => deleteTerm(term)}/>
           <BsPlusCircleFill className={`icon click ${parent?.id === term?.id ? "selected" : ""}`} onClick={() => {setParent(term)}} />
        </>
    })

    function printAllChildren (children, parent) {
        return children.map((c,i)=>{
            return <React.Fragment key={i}>
                <tr key={c.id}>
                    <td></td>
                    <td>{makeAbbrivation(parent?.term)}{c.term}</td>
                    <td><Actions term={c}/></td>
                </tr>
                {c?.children ? printAllChildren(c.children, c) : <></>}
            </React.Fragment>
        })
    }

    if (term) return <Words/>
    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>Overzicht van alle zoektermen.</h3>
        <hr></hr>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}
        <form onSubmit={handleSubmit(onSubmitNewSearchterm)}>
            <div className="flex-2">
                <input className="input-field w-50" required placeholder={`Nieuwe zoekterm (${parent ? `met parent ${parent?.term}` : 'zonder parent'})`} {...register("searchterm", {required:true})}/>
                <span><BsFillDashCircleFill className="icon click" onClick={() => {reset(); setParent(null)}}/> <BsPlusCircleFill className="icon click" onClick={handleSubmit(onSubmitNewSearchterm)}/></span>
            </div>
        </form>
        <br />
        <table className="table-top w-100 ">
            <thead>
                <tr>
                    <td>Hoofdtitel</td>
                    <td>Subtitel</td>
                    <td>Acties</td>
                </tr>
            </thead>
            <tbody className="no_hover">
                {
                    searchTerms ? searchTerms.map((s, i) => {
                        return <React.Fragment key={i}><tr key={s.id}>
                            <td>{s.term}</td>
                            <td></td>
                            <td><Actions term={s}/></td>
                        </tr>
                            {s.children ? printAllChildren(s.children) : <></>}
                        </ React.Fragment>
                    }) : <tr><td colSpan={3}>Geen Zoektermen Gevonden</td></tr>
                }
            </tbody>
        </table>
        <h2>Herberkenen van de scores</h2>
        <p>
            Door op de knop hieronder te klikken kan je al de scores herberekenen. Dit kan enkele minuten duren.
            <br />
            De scores zullen enkel veranderen indien er een
            aanpassing is geweest in de woorden. Indien er geen aanpassing is geweest, zullen de scores niet veranderen.
            <br />
            Gebruik deze knop niet te veel want de berekening is vrij intensief.
        </p>
        <button className="btn btn-danger" onClick={() => herberekenen()}>Scores Herberekenen</button>
    </div>
}