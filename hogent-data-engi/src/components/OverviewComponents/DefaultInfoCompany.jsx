import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchProvider";
import ReactTooltip from 'react-tooltip';


export default function DefaultInfoCompany(){
    const { searchresult: sr } = useContext(SearchContext)
    console.log(sr)

    return <div className="default-info-container">
        <h3>{sr?.naam ? sr.naam : 'Geen bedrijf gevonden'}</h3>
        <hr/>
        <div className="table-container">
        <table className="table-default-info">
            <tbody>
                <tr>
                    <th>Venootschapsnaam</th>
                    <td>{sr?.Kmo?.naam ? sr.Kmo.naam : '/'}</td>
                </tr>
                <tr>
                    <th>Ondernemingsnummer</th>
                    <td>{sr?.Kmo?.ondernemingsnummer ? sr.Kmo.ondernemingsnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Telefoonnummer</th>
                    <td>{sr?.Kmo?.telefoonnummer ? sr.Kmo.telefoonnummer : '/'}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{sr?.Kmo?.email && sr?.Kmo.email !== 'NaN' ? <a href={`mailto:${sr.Kmo.email}`}>{sr.Kmo.email}</a> : '/'}</td>
                </tr>
                <tr>
                    <th>Adres</th>
                    <td>{sr?.Kmo?.adres ? sr.Kmo.adres : '/'}</td>
                </tr>
                <tr className="multirow">
                    <th></th>
                    <td>{sr?.Gemeente?.postcode ? sr?.Gemeente.postcode + ', ' : ''}{sr?.Gemeente?.naam ? sr?.Gemeente?.naam : ''}</td>
                </tr>
                
                <tr>
                    <th>Website</th>
                    <td>
                        {
                            sr?.verslagen?.length > 0 && sr?.verslagen[0]?.website_url ?
                            <a href={sr?.verslagen[0]?.website_url}>{sr?.verslagen[0]?.website_url}</a>
                            : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>Jaarverslag</th>
                    <td>
                        {
                            sr?.verslagen?.length > 0 && sr?.verslagen[0]?.jaarverslag_url ?
                            <a href={sr?.verslagen[0]?.jaarverslag_url}>Download Jaarverslag</a>
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
                            sr?.verslagen?.length > 0 && sr?.verslagen[0]?.Verslag?.omzet ?
                            "€ " + sr?.verslagen[0]?.Verslag?.omzet
                            : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>Balanstotaal</th>
                    <td>
                    {
                            sr?.verslagen?.length > 0 && sr?.verslagen[0]?.Verslag?.balanstotaal ?
                            "€ " + sr?.verslagen[0]?.Verslag?.balanstotaal
                            : '/'
                        }
                    </td>
                </tr>
                <tr>
                    <th>beursgenoteerd</th>
                    <td>
                        {
                            (sr?.Kmo?.beursgenoteerd === undefined) ? "/" : (Boolean(sr.Kmo.beursgenoteerd) ? "Beursgenoteerd" : "Niet Beursgenoteerd")
                        }
                    </td>
                </tr>
                <tr>
                    <th>Aantal werknemers</th>
                    <td>
                    {
                            sr?.verslagen?.length > 0 && sr?.verslagen[0]?.Verslag?.aantalwerknemers ?
                            sr?.verslagen[0]?.Verslag?.aantalwerknemers
                            : '/'
                        }
                    </td>
                </tr>
                {/* <tr>
                    <th>B2B of B2C</th>
                    <td>{(sr?.isB2B === undefined || sr?.isB2B === null ? '/' : (Boolean(sr?.isB2B) ? 'B2B' : 'B2C'))}</td>
                </tr> */}
                {/* <tr>
                    <th>Hoofdsector</th>
                    <td>{sr?.hoofdsector ? <Link to={`/hoofdsectoren/${sr.parent}`}>{sr.hoofdsector}</Link> : '/'}</td>
                </tr> */}
                <tr>
                    <th>Subsector</th>
                    <td>
                        {
                            sr?.Sector?.naam ? <Link to={`/sectoren/${sr.Sector.code}`}>{sr.Sector.naam}</Link> : '/'
                        }
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
}