import { useContext, useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"
import Title from "../Title"

export default function SectorenDetails() {
    const { sectorid } = useParams()
    const { sectorData, getSectorInfo } = useContext(SearchContext)

    useEffect(() => {
        if (!sectorData || parseInt(sectorid) !== sectorData.id) {
            getSectorInfo(sectorid)
        }
    }, [sectorData, getSectorInfo, sectorid])


    if (sectorData && parseInt(sectorid) === sectorData.id)
        return <div className="inside-main">
            <Title>{sectorData.naam}</Title>
        </div>
    else if (sectorData === null)
        return <Navigate to="/" replace />
    else
        return <></>
}