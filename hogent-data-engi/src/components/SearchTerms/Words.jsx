import { useContext,useEffect, } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import Title from "../Title";
import ReactLoading from 'react-loading'
import {useForm} from 'react-hook-form'
import { GrFormAdd } from 'react-icons/gr'



export default function Words() {
    const { setWoorden, words, loading,term,setTheTerm,addWord } = useContext(SearchTermContext)
    const { register, handleSubmit} = useForm();


    useEffect(() => {
        if (!words) {
            setWoorden(term?.id)
        }
    }, [words, setWoorden,term?.id])

    const onSubmit = async (data) => {
        await addWord(data.woord)
    }

    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>Het overzicht van alle woorden uit de zoekterm {term.term}</h3>
        <hr/>
       
        <p onClick={()=>{setTheTerm(undefined); setWoorden(0,true)}} className='pointer'>{'<- Terug'}</p>
        <div className="default-info-container table-container"><hr/>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Voeg woord toe" {...register('woord',{required:true})} />
        <span className="pointer add" onClick={handleSubmit(onSubmit)}><GrFormAdd/></span>
        </form>
        {Array.isArray(words) ? words.map((s) => {
            return <div key={s.id}>{s.woord}</div>
        }) : null}
        </div>
    </div>
}