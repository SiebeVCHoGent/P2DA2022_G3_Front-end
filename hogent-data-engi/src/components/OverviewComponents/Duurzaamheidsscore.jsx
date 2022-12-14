import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"

export default function Duurzaamheidsscore()
{
    const {searchresult: sr} = useContext(SearchContext)

    return <div>
        <h2>Scores</h2>
        <p><b>Totale score: </b>{sr?.score?.total_score !== null ? Math.round(sr?.score?.total_score*1000)/10 + " punten": 'Geen score gevonden'}</p>
        <p><b>Websitescore: </b>{sr?.score?.website_score !== null ?  Math.round(sr?.score?.website_score*1000)/10 + ' punten' : ''}</p>
        <p><b>Jaarverslagscore: </b>{sr?.score?.jaarverslag_score !== null ?  Math.round(sr?.score?.jaarverslag_score*1000)/10 + ' punten' : ''}</p>
    </div>
}