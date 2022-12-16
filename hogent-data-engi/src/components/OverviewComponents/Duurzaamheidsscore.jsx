import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"

export default function Duurzaamheidsscore()
{
    const {searchresult: sr} = useContext(SearchContext)

    return <div>
        <h2>Scores</h2>
        <p><b>Totale score: </b>{sr?.total_score && sr.total_score !== null ? Math.round(sr?.total_score*1000)/10 + " punten": 'Geen score gevonden'}</p>
        <p><b>Websitescore: </b>{sr?.website_score && sr?.website_score !== null ?  Math.round(sr?.website_score*1000)/10 + ' punten' : 'Geen score gevonden'}</p>
        <p><b>Jaarverslagscore: </b>{sr?.jaarverslag_score && sr?.jaarverslag_score !== null ?  Math.round(sr?.jaarverslag_score*1000)/10 + ' punten' : 'Geen score gevonden'}</p>
    </div>
}