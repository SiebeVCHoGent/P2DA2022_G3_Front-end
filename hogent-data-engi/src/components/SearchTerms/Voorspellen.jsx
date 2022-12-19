import { useContext, useState } from "react";
import Title from "../Title";
import { useForm } from "react-hook-form";
import { SearchContext } from "../../contexts/SearchProvider";

export default function Voorspellen() {
    const [voorspelling, setVoorspelling] = useState(null);
    const { voorspel, loading } = useContext(SearchContext);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submit = async (data) => {
        setVoorspelling(await voorspel(data))
    }

    return <div className="inside-main">
        <Title>Voorspellen</Title>
        <h2>Voorspel de scores van een onbestaand bedrijf.</h2>
        <p>
            Vul de gegevens van een bedrijf in en voorspel de score van het bedrijf. Dit bedrijf hoeft niet te bestaan.
        </p>
        <div>
            <h3>Voorspelling</h3>
            <span className="big-letter">{loading ? "Loading..." : voorspelling ? Math.round(voorspelling*10)/10 + " punten" : "/"}</span>
            <br />
            <br />
            <form onSubmit={handleSubmit(submit)} className="form-login">
                <div className="input-item">
                    <label htmlFor="aantalwerknemers">Aantal Werknemers*</label>
                    <span className="form-error">
                        {
                            errors?.aantalwerknemers?.type === "required" ?
                                "Dit veld is verplicht" :
                                errors?.aantalwerknemers?.type === "min" ?
                                    "Dit veld moet minstens 1 zijn" :
                                    ""
                        }</span>
                    <input type="number" id="aantalwerknemers" {...register("aantalwerknemers", { required: true, min: 1 })} />
                </div>
                <div className="input-item">
                    <label className="omzet">Omzet*</label>
                    <span className="form-error">
                        {
                            errors?.omzet?.type === "required" ?
                                "Dit veld is verplicht" :
                                errors?.omzet?.type === "min" ?
                                    "Dit veld moet minstens 1 zijn" :
                                    ""
                        }
                    </span>
                    <input type="number" id="omzet" {...register("omzet", { required: true, min: 1 })} />
                </div>
                <div className="input-item">
                    <label htmlFor="balanstotaal">Balanstotaal*</label>
                    <span className="form-error">
                        {
                            errors?.balanstotaal?.type === "required" ?
                                "Dit veld is verplicht" :
                                errors?.balanstotaal?.type === "min" ?
                                    "Dit veld moet minstens 1 zijn" :
                                    ""
                        }
                    </span>
                    <input type="number" id="balanstotaal" {...register("balanstotaal", { required: true, min: 1 })} />
                </div>
                {/* <div className="input-item">
                    <label htmlFor="beursgenoteerd">Beursgenoteerd?*</label>
                    {
                        errors?.beursgenoteerd?.type === "required" ?
                            "Dit veld is verplicht" :
                            ""
                    }
                    <select {...register("beursgenoteerd", { required: true })} defaultValue="0" id="beursgenoteerd">
                        <option value={false}>Nee</option>
                        <option value={true}>Ja</option>
                    </select>s
                </div> */}
                <div className="input-item">
                    <label htmlFor="verstedelijkingsgraad">Verstedelijkingsgraad*</label>
                    {
                        errors?.verstedelijkingsgraad?.type === "required" ?
                            "Dit veld is verplicht" :
                            errors?.verstedelijkingsgraad?.type === "min" ?
                                "Dit veld moet minstens 0 zijn" :
                                errors?.verstedelijkingsgraad?.type === "max" ?
                                    "Dit veld moet maximaal 2 zijn" :
                                    ""
                    }
                    <select {...register("verstedelijkingsgraad", { required: true, min: 0, max: 2 })} defaultValue="0" id="verstedelijkingsgraad">
                        <option value="0">Landelijk</option>
                        <option value="2">Randstedelijk</option>
                        <option value="1">Verstedelijkt</option>
                    </select>
                </div>
                <div className="input-item">
                    <label htmlFor="hoofdsector">Hoofdsector*</label>
                    <span className="form-error">
                        {
                            errors?.hoofdsector?.type === "required" ?
                                "Dit veld is verplicht" :
                                ""
                        }
                    </span>
                    <select {...register("hoofdsector", {required: true})} id="hoofdsector">
                        <option value="">-- Selecteer --</option>
                        <option value="A">Landbouw, bosbouw en visserij </option>
                        <option value="B">Winning van delfstoffen </option>
                        <option value="C">Industrie</option>
                        <option value="D">Productie en distributie van elektriciteit, gas, stoom en gekoelde lucht</option>
                        <option value="E">Distributie van water; afval- en afvalwaterbeheer en sanering</option>
                        <option value="F">Bouwnijverheid</option>
                        <option value="G">Groot- en detailhandel; reparatie van auto's en motorfietsen</option>
                        <option value="H">Vervoer en opslag</option>
                        <option value="I">Verschaffen van accommodatie en maaltijden</option>
                        <option value="J">Informatie en communicatie</option>
                        <option value="K">Financiële activiteiten en verzekeringen</option>
                        <option value="L">Exploitatie van en handel in onroerend goed</option>
                        <option value="M">Vrije beroepen en wetenschappelijke en technische activiteiten</option>
                        <option value="N">Administratieve en ondersteunende diensten</option>
                        <option value="O">Openbaar bestuur en defensie; verplichte sociale verzekeringen</option>
                        <option value="P">Onderwijs</option>
                        <option value="Q">Menselijke gezondheidszorg en maatschappelijke dienstverlening</option>
                        <option value="R">Kunst, amusement en recreatie</option>
                        <option value="S">Overige diensten</option>
                        <option value="T">Huishoudens als werkgever; niet-gedifferentieerde productie van goederen en diensten door huishoudens voor eigen gebruik</option>
                        <option value="U">Extraterritoriale organisaties en lichamen</option>
                    </select>
                </div>
                <div className="input-item">
                    <span className="form-error"></span>
                    <button className="submit">Voorspel</button>
                </div>
            </form>
        </div>
    </div>
}