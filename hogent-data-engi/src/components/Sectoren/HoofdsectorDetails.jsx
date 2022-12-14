import { useContext, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"
import Title from "../Title"
import ReactLoading from 'react-loading'

export default function HoofdsectorDetails() {
    const { sectorid, naam } = useParams()
    const navigate = useNavigate()
    const { loading, getBestKmosHoofdSector, bestKmosSector, getKmoByOndernemingsnummer } = useContext(SearchContext)

    useEffect(() => {
        getBestKmosHoofdSector(sectorid)
    }, [sectorid, getBestKmosHoofdSector])

    const kmoDetails = (data) => {
        getKmoByOndernemingsnummer(data)
        navigate('/dashboard')
    }

    if (bestKmosSector?.length === 0)
        return <Navigate to={'/404'} replace />
    if(naam != null && bestKmosSector?.length !== null )
        return <div className="inside-main">
            <Title><span className="capitalize">{naam}</span></Title>
            {
                bestKmosSector?.length > 0 ? <>
                    <h3>Beste kmo's in '{naam}'</h3>
                    <hr />
                    <div className="center-table">
                        <table border='1' className="table-top">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>KMO</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bestKmosSector.map((o, i) => {
                                        return <tr onClick={() => { kmoDetails(o.ondernemingsnummer) }} key={o.ondernemingsnummer}>
                                            <td>{i + 1}</td>
                                            <td>{o.ondernemingsnummer} - {o.naam} - {o.gemeente}</td>
                                            <td>{o.total_score ? Math.round(o.total_score*1000)/10 : "/"}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div></> : ''
            }
            {
                loading ? <ReactLoading type="bars" color="#000"/> : <></>
            }
    </div>
    else
        return <></>
}