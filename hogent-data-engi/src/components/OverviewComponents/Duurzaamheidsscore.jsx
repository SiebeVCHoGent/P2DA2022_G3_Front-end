import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"

export default function Duurzaamheidsscore()
{
    const {searchresult: sr} = useContext(SearchContext)

    return <div>
        <h2>Websitescore{sr?.website_score ? ': ' + sr.website_score + ' punten' : ''}<br/><br/>Jaarverslagscore{sr?.jaarverslag_score ? ': ' + sr.jaarverslag_score + ' punten' : ''}</h2>
        
       {/* <div className="duurzaam-container">
            <div className="big-letters">
                <p className="big-letter duurzaam-letter">{sr?.duurzaamheidsscore ? sr.duurzaamheidsscore : '-'}</p>
                <p className={`big-letter ${sr?.Percentiel ? 'smaller' : ''} duurzaam-letter`}>{sr?.Percentiel ? 'beste ' + Math.ceil(sr.Percentiel) + ' %' : '-'}</p>
            </div>
            <p className="duurzaam-text">Op basis van het totaal aantal opzoektermen van de coding tree bepalen we de maximale totaalscore die een kmo kan krijgen indien deze over 
                elke opzoekterm rapporteert. Iedere opzoekterm krijgt 1 punt.
            </p>
        </div>*/}
    </div>
}