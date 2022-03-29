import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"

export default function Duurzaamheidsscore()
{
    const {searchresult: sr} = useContext(SearchContext)

    return <div>
        <h2>Duurzaamheidsscore</h2>
        <div className="duurzaam-container">
            <p className="big-letter duurzaam-letter">{sr?.duurzaamheidsscore ? sr.duurzaamheidsscore : '/'}</p>
            <p className="duurzaam-text">Op basis van het totaal aantal opzoektermen van de coding tree bepalen we de maximale totaalscore die een kmo kan krijgen indien deze over 
                elke opzoekterm rapporteert. Iedere opzoekterm krijgt 1 punt.
            </p>
        </div>
    </div>
}