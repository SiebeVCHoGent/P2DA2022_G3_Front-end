import { useCallback, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"


export default function SectorenDetails(){
    const {sectorid} = useParams()
    const { sectorData, getSectorInfo } = useContext(SearchContext)
    
    const refresh = useCallback(async () => {
        await getSectorInfo(sectorid)
    }, [getSectorInfo, sectorid])


    useEffect(() => {
        if (!sectorData)
        {
            refresh()
        }
    }, [refresh, sectorData])

    if (sectorData)
        return <main>
            <div className="inside-main">
                <h1>{sectorData.naam}</h1>
                {console.log(sectorData)}
            </div>
        </main>
    else
        return <></>
}