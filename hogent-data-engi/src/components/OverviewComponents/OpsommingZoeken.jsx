import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";

export default function OpsommingZoeken(){
    const { arrResults: arr, setSingleKmo } = useContext(SearchContext)

    return <div className="default-info-container table-container"> 
        <h3>Zoekresultaten:</h3>
        <hr/>
        {
            arr.map((o,i) => {
                return <div key={i} onClick={() => {setSingleKmo(o)}} className='pointer'>
                    <p> <b>{o.ondernemingsnummer}</b> - {o.naam} - {o.gemeente}</p>
                    <hr/>
                </div>
            })
        }
    </div>
}
