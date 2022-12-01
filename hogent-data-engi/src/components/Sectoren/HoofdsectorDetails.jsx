import { useContext, useEffect } from "react"
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"
import Title from "../Title"
import ReactLoading from 'react-loading'

export default function HoofdsectorDetails() {
    const { sectorid } = useParams()
    const navigate = useNavigate()
    const { loading, sectorData, getHoofdSectorInfo, getBestKmosHoofdSector, bestKmosSector, setSingleKmo } = useContext(SearchContext)


    useEffect(() => {
        if (!sectorData || sectorid !== sectorData?.code) {
            getHoofdSectorInfo(sectorid)
            getBestKmosHoofdSector(sectorid)
        }
    }, [getHoofdSectorInfo, sectorid, sectorData, getBestKmosHoofdSector])

    const kmoDetails = (data) => {
        setSingleKmo(data)
        navigate('/dashboard')
    }

    if (sectorData?.notFound)
        return <Navigate to={'/404'} replace />
    if (sectorData && sectorid === sectorData.code)
        return <div className="inside-main">
            <Title><span className="capitalize">{sectorData.naam}</span></Title>
            {
                
                bestKmosSector.length > 0 ? <>
                    <h3>Beste kmo's in '{sectorData.naam}'</h3>
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
                                        return <tr onClick={() => { kmoDetails(o) }} key={o.ondernemingsnummer}>
                                            <td>{i + 1}</td>
                                            <td>{o.ondernemingsnummer} - {o.naam} - {o.gemeente}</td>
                                            <td>{o.Score ? o.Score : "/"}</td>
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