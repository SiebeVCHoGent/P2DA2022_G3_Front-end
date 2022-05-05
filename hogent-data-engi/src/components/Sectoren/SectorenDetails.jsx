import { useContext, useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"

export default function SectorenDetails(){
    const {sectorid} = useParams()
    const { sectorData, getSectorInfo } = useContext(SearchContext)

    useEffect(() => {
        if (!sectorData || parseInt(sectorid) !== sectorData.id)
        {
            getSectorInfo(sectorid)
        }
    }, [sectorData, getSectorInfo, sectorid])


    if (sectorData && parseInt(sectorid) === sectorData.id)
        return <main>
            <div className="inside-main">
                <h1>{sectorData.naam}</h1>
            </div>
        </main>
    else if(sectorData === null)
        return <Navigate to="/" replace />
    else
        return <main></main>
}