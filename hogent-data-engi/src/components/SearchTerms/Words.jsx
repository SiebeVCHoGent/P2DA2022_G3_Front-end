import { useContext,useEffect, } from "react";
import { SearchTermContext } from "../../contexts/SearchTermProvider";
import Title from "../Title";
import ReactLoading from 'react-loading'
import {useForm} from 'react-hook-form'
import { GrFormAdd } from 'react-icons/gr'
import { BsTrashFill } from 'react-icons/bs'


export default function Words() {
    const { setWoorden, words, loading,term,setTheTerm, addWord, deleteWord } = useContext(SearchTermContext)
    const { register, handleSubmit, reset} = useForm();


    useEffect(() => {
        if (!words) {
            setWoorden(term?.id)
        }
    }, [words, setWoorden,term?.id])

    const onSubmit = async (data) => {
        reset()
        await addWord(data.woord)
    }

    return <div className="inside-main">
        <Title>Zoektermen</Title>
        <h3>De zoekwoorden van "{term.term}"</h3>
        <hr/>

        <p onClick={()=>{setTheTerm(undefined); setWoorden(0,true)}} className='pointer'><a className="link">Ga Terug</a></p>
        {loading ? <ReactLoading type="bars" color="#000"/> : <></>}

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-2">
                <input className="input-field w-50" required placeholder="Nieuw woord..." {...register("woord", {required:true})}/><span className="icon" onClick={handleSubmit(onSubmit)}><GrFormAdd/></span>
            </div>
        </form>
        <br />
        <table className="table-top a w-100">
            <thead>
                <tr>
                    <td>Woord</td>
                    <td>Acties</td>
                </tr>
            </thead>
            <tbody>
                {
                    words ? words.map((s) => {
                        return <tr key={s.id}>
                            <td>{s.woord}</td>
                            <td><BsTrashFill className="icon" onClick={() => deleteWord(s.id)}/></td>
                        </tr>
                    }) : <tr colspan="3">Geen Woorden Gevonden</tr>
                }
            </tbody>
        </table>
    </div>
}