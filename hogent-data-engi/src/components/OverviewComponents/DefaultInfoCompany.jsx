import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";


export default function DefaultInfoCompany(){
    const { searchresult: sr } = useContext(SearchContext)

    return <div className="default-info-container">
        <h3>{sr?.kmo?.naam ? sr.kmo.naam : 'Geen bedrijf gevonden'}</h3>
        <hr/>
        <div className="table-container">
        <table className="table-default-info">
            <tbody>
                <tr>
                    <th>Venootschapsnaam</th>
                    <td>{sr?.kmo?.naam ? sr.kmo.naam : '/'}</td>
                </tr>
                <tr>
                    <th>Ondernemingsnummer</th>
                    <td>{sr?.kmo?.ondernemingsnummer ? sr.kmo.ondernemingsnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Telefoonnummer</th>
                    <td>{sr?.kmo?.telefoonnummer ? sr.kmo.telefoonnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{sr?.kmo?.email && sr?.kmo.email !== 'NaN' ? <a href={`mailto:${sr.kmo.email}`}>{sr.kmo.email}</a> : '/'}</td>
                </tr>
                <tr>
                    <th>Adres</th>
                    <td>{sr?.kmo?.adres ? sr.kmo.adres : '/'}</td>
                </tr>
                <tr className="multirow">
                    <th></th>
                    <td>{sr?.gemeente?.postcode ? sr?.gemeente.postcode + ', ' : ''}{sr?.gemeente?.naam ? sr?.gemeente?.naam : ''}</td>
                </tr>
                
                <tr>
                    <th>Website</th>
                    <td>
                        {
                            sr?.verslag?.website_url ?
                            <a target="_blank" href={sr?.verslag?.website_url} rel="noreferrer">{sr?.verslag?.website_url}</a>
                            : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>Jaarverslag</th>
                    <td>
                        {
                            sr?.verslag?.jaarverslag_url ?
                            <a href={sr?.verslag?.jaarverslag_url} download={`Jaarverslag ${sr?.kmo?.naam} ${sr?.verslag?.jaar}`}>Download Jaarverslag</a>
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
                    <td>
                        {
                            sr?.verslag?.omzet ? "€ " + sr?.verslag?.omzet : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>Balanstotaal</th>
                    <td>
                    {
                            sr?.verslag?.balanstotaal ? "€ " + sr?.verslag?.balanstotaal : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>beursgenoteerd</th>
                    <td>
                        {
                            (sr?.kmo?.beursgenoteerd === undefined) ? "/" : (Boolean(sr.kmo.beursgenoteerd) ? "Beursgenoteerd" : "Niet Beursgenoteerd")
                        }
                    </td>
                </tr>
                <tr>
                    <th>Aantal werknemers</th>
                    <td>
                    {
                            sr?.verslag?.aantalwerknemers ? sr.verslag.aantalwerknemers : '/'
                        }
                    </td>
                </tr>
                {/* <tr>
                    <th>B2B of B2C</th>
                    <td>{(sr?.isB2B === undefined || sr?.isB2B === null ? '/' : (Boolean(sr?.isB2B) ? 'B2B' : 'B2C'))}</td>
                </tr> */}
                <tr>
                    <th>Hoofdsector</th>
                    <td>
                        {
                            sr?.hoofdsector?.naam ? <Link to={`/hoofdsectoren/${sr.hoofdsector.naam}/${sr.hoofdsector.code}`}>{sr.hoofdsector.naam}</Link> : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>Subsector</th>
                    <td>
                        {
                            sr?.sector?.naam ? <Link to={`/sectoren/${sr.sector.naam}/${sr.sector.code}`}>{sr.sector.naam}</Link> : '/'
                        }
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
}