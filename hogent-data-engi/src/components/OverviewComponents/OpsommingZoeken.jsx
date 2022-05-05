import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";

export default function OpsommingZoeken(){
    const { arrResults: arr, setSingleKmo } = useContext(SearchContext)

    return <div className="default-info-container table-container"> 
        {
            arr.map(o => {
                return <div key={o.ondernemingsnummer} onClick={() => {setSingleKmo(o)}} className='pointer'>
                    <p> <b>{o.ondernemingsnummer}</b> - {o.naam} - {o.gemeente}</p>
                    <hr/>
                </div>
            })
        }
    </div>
}
