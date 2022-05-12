import { useContext, useEffect } from "react"
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"
import Title from "../Title"

export default function SectorenDetails() {
    const { sectorid } = useParams()
    const navigate = useNavigate()
    const { sectorData, getSectorInfo, getBestKmosSector, bestKmosSector, setSingleKmo } = useContext(SearchContext)


    useEffect(() => {
        if (!sectorData || parseInt(sectorid) !== sectorData.id) {
            getSectorInfo(sectorid)
            getBestKmosSector(sectorid)
        }
    }, [getSectorInfo, sectorid, sectorData, getBestKmosSector])

    const kmoDetails = (data) => {
        setSingleKmo(data)
        navigate('/dashboard')
    }


    if (sectorData && parseInt(sectorid) === sectorData.id)
        return <div className="inside-main">
            <Title>{sectorData.naam}</Title>

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
                                    <td>{o.Score}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    else if (sectorData === null)
        return <Navigate to="/404" replace />
    else
        return <></>
}