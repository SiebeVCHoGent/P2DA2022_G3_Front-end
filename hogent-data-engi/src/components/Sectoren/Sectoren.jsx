import { useContext, useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";
import Title from "../Title";

export default function Sectoren() {
    const { getBestSectors, bestSectors } = useContext(SearchContext)
    const navigate = useNavigate()
    const [filtered, setFiltered] = useState()

    useEffect(() => {
        if (!bestSectors) {
            getBestSectors()
            
        }
        else
        {
            setFiltered(bestSectors)
        }
    }, [bestSectors, getBestSectors])

    const filter = (event) => {
        if (bestSectors)
        {
            const f = event?.target?.value
            setFiltered(bestSectors.map((v, i) => {v['place'] = i + 1; return v}).filter((v) => {return v.naam.includes(f) || (v.sectorId+'').includes(f)}))
        }
    }

    return <div className="inside-main">
        <Title>Sectoren</Title>
        <h3>Welke sectoren presteren het beste?</h3>
        <hr />

        <div className="center-table">
            <div className="search-container-sector">
                <span className="search-container">
                    <input
                        className="search-in"
                        placeholder="Zoek op sector..."
                        onChange={filter}
                    ></input>
                    <span className="search-glass" ><ImSearch /></span>
                </span>
            </div>
            <table className="table-top" border='1'>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Sector</th>
                        <th>Gemiddelde Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered ?
                            filtered.map((s, i) => {
                                return <tr key={s.sectorId} onClick={() => {navigate(`/sectoren/${s.sectorId}`) }}>
                                    <td>{s.place}</td>
                                    <td>{s.naam}</td>
                                    <td>{Math.round((s.average) * 100) / 100}</td>
                                </tr>
                            })
                            : <></>
                    }
                </tbody>
            </table>
        </div>
    </div>
}