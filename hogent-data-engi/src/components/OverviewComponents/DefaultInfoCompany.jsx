import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";

export default function DefaultInfoCompany(){
    const { searchresult: sr } = useContext(SearchContext)

    return <div className="default-info-container">
        <h3>{sr?.naam ? sr.naam : 'Geen bedrijf gevonden'}</h3>
        <hr/>
        <div className="table-container">
        {/* TODO Implement real values */}
        <table className="table-default-info">
            <tbody>
                <tr>
                    <th>Venootschapsnaam</th>
                    <td>{sr?.naam ? sr.naam : '/'}</td>
                </tr>
                <tr>
                    <th>Ondernemingsnummer</th>
                    <td>{sr?.ondernemingsnummer ? sr.ondernemingsnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Telefoonnummer</th>
                    <td>{sr?.telefoonnummer ? sr.telefoonnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{sr?.email ? <a href={`mailto:${sr.email}`}>{sr.email}</a> : '/'}</td>
                </tr>
                <tr>
                    <th>Adres</th>
                    <td>{sr?.adres ? sr.adres : '/'}</td>
                </tr>
                <tr className="multirow">
                    <th></th>
                    <td>{sr?.postcode ? sr.postcode + ', ' : ''}{sr?.gemeente ? sr.gemeente : ''}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        {
                            sr?.website
                            ? <a href={sr?.website ? 'https://' + sr.website : '#'} target='_blank' rel="noreferrer">{sr?.website ? sr.website : '/'}</a>
                            : '/'
                        }
                        
                    </td>
                </tr>
                <tr>
                    <th>Jaarverslag</th>
                    <td>
                        {
                            sr?.jaarverslag?.link 
                            ? <a href={sr.jaarverslag.link} target='_blank' rel="noreferrer">staatsbladmonitor</a>
                            : '/'  
                        }
                    </td>
                    
                    <td></td>
                </tr>
            </tbody>
        </table>
        <table className="table-default-info table-economics">
            <tbody>
                <tr>
                    <th>Omzetcijfer</th>
                    <td>{sr?.jaarverslag?.omzetcijfer ? '€ ' +sr.jaarverslag.omzetcijfer : '/'}</td>
                </tr>
                <tr>
                    <th>Balanstotaal</th>
                    <td>{sr?.jaarverslag?.balanstotaal ? '€ ' +sr.jaarverslag.balanstotaal : '/'}</td>
                </tr>
                <tr>
                    <th>Framework voor duurzaamheidsrapportering</th>
                    <td>{sr?.duurzaamheidsframework === null ? 'Neen' : (sr?.duurzaamheidsframework ? sr.duurzaamheidsframework : '/')}</td>
                </tr>
                <tr>
                    <th>Beursnotatie</th>
                    <td>{(sr?.beursnotatie === undefined || sr?.beursnotatie === null ? '/' : (Boolean(sr?.beursnotatie) ? 'Beursgenoteerd' : 'Niet Beursgenoteerd'))}</td>
                </tr>
                <tr>
                    <th>Aantal werknemers</th>
                    <td>{sr?.aantalWerknemers ? sr.aantalWerknemers : '/'}</td>
                </tr>
                <tr>
                    <th>B2B of B2C</th>
                    <td>{(sr?.isB2B === undefined || sr?.isB2B === null ? '/' : (Boolean(sr?.isB2B) ? 'B2B' : 'B2C'))}</td>
                </tr>
                <tr>
                    <th>Sector</th>
                    <td>{sr?.sector ? <a href={`/sectoren/${sr.sectorid}`}>{sr.sector}</a> : '/'}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
}