import React from 'react';
import { useContext, useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";
import Title from "../Title";
import ReactLoading from 'react-loading'
import { useReducer } from 'react';

function reducer(state, field) {
    if (state.startsWith(field)) {
        if (state.endsWith('asc')) {
            return field + '-desc'
        }else {
            return "place-asc"
        }
    }
    else {
        return field + '-asc'
    }
}

export default function Sectoren() {
    const { getBestSectors, bestSectors, bestSectorsHS, getBestHoofdSectors,  loading } = useContext(SearchContext)
    const navigate = useNavigate()
    const [filtered, setFiltered] = useState()
    const [sort, dispatch] = useReducer(reducer, "place-asc")  


    useEffect(() => {
        if (!bestSectors) {
            getBestSectors()
        }
        
        if (!bestSectorsHS) {
            getBestHoofdSectors()
        }

    }, [bestSectors, getBestSectors, bestSectorsHS, getBestHoofdSectors, sort])

    useEffect(() => {
        setFiltered(bestSectors?.sort(
            (a, b) => {
                const spl = sort.split('-')
                if (spl[1] === 'asc') {
                    if (spl[0] === 'naam')
                        return a[spl[0]].localeCompare(b[spl[0]])
                    else
                        return a[spl[0]] - b[spl[0]]
                }
                else {
                    if (spl[0] === 'naam')
                        return b[spl[0]].localeCompare(a[spl[0]])
                    else
                        return b[spl[0]] - a[spl[0]]
                }
            }
        ))
    }, [bestSectors, sort])


    const filter = (event) => {
        if (bestSectors)
        {
            const f = event?.target?.value
            setFiltered(bestSectors.filter((v) => {return v.naam.includes(f) || (v.sectorId+'').includes(f) || v.hoofdsectornaam === f}))
        }
    }

    return <div className="inside-main">
        <Title>Sectoren</Title>
        <h3>Welke hoofdsectoren presteren het best?</h3>
        <hr></hr>
        <div className="center-table">
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
                        bestSectorsHS ?
                        bestSectorsHS.map((s, i) => {
                                return <tr key={i} onClick={() => {navigate(`/hoofdsectoren/${s.naam}/${s.code}`) }}>
                                    <td>{i+1}</td>
                                    <td>{s.naam}</td>
                                    <td>{Math.round((s.total_score) * 1000) / 10}</td>
                                </tr>
                            })
                            : <></>
                    }
                </tbody>
            </table>
            {
                loading ? <ReactLoading type="bars" color="#000"/> : <></>
            }
        </div>
        <br/>
        <h3>Welke sectoren presteren het beste?</h3>
        <hr />

        <div className="center-table">
        <div className="search-container-sector">
                <span className="search-container">
                    <input
                        className="search-in"
                        placeholder="Zoek op nummer, sectornaam of hoofdsecctornaam..."
                        onChange={filter}
                    ></input>
                    <span className="search-glass" ><ImSearch /></span>
                </span>
            </div>
            <table className="table-top" border='1'>
                <thead>
                    <tr>
                        <th onClick={() => dispatch('place')}>N°</th>
                        <th onClick={() => dispatch('naam')}>Sector</th>
                        <th onClick={() => dispatch('total_score')}>Gemiddelde Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered ?
                            filtered.map((s, i) => {
                                return <tr key={s.code} onClick={() => {navigate(`/sectoren/${s.naam}/${s.code}`) }}>
                                    <td>{s.place}</td>
                                    <td>{s.naam}</td>
                                    <td>{Math.round((s.total_score) * 1000) / 10}</td>
                                </tr>
                            })
                            : <></>
                    }
                </tbody>
            </table>
            {
                loading ? <ReactLoading type="bars" color="#000"/> : <></>
            }
        </div>
    </div>
}