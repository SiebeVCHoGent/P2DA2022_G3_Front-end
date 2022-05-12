import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";
import Title from "../Title";

export default function Sectoren() {
    const { getBestSectors, bestSectors } = useContext(SearchContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!bestSectors) {
            getBestSectors()
        }
    }, [bestSectors, getBestSectors])
    return <div className="inside-main">
        <Title>Sectoren</Title>
        <h3>Sector Zoeken</h3>
        <hr/>
        <div>
            INSERT ZOEKEN HIER
        </div>
        <h3>Welke sectoren presteren het beste?</h3>
        <hr />
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
                        bestSectors ?
                            bestSectors.map((s, i) => {
                                return <tr key={s.sectorId} onClick={() => { console.log('heh'); navigate(`/sectoren/${s.sectorId}`) }}>
                                    <td>{i + 1}</td>
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