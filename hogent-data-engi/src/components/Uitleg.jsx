import { Link } from "react-router-dom";
import Title from "./Title";

export default function Uitleg() {
    return <main>
        <div className="inside-main">
            <Title>Duurzaamheid bij kmo's</Title>
            <div className="pure-text">
                <p>
                    Op 21 april 2021 werd de nieuwe EU-richtlijn voor duurzaamheidsrapportering voorgesteld. Het doel is dat bedrijven meer gerichte, betrouwbare en gemakkelijk
                    toegankelijke informatie delen als basis voor duurzame besluitvorming. Voor kleine en middelgrote ondernemingen (kmo's)
                    zullen er in de nabije toekomst ook maatregelen getroffen worden.
                </p>
                <p>
                    Daarom gaan wij, onder leiding van <a href="https://www.hogent.be" target={'_blank'} rel="noreferrer">HOGENT</a>, op zoek naar in hoeverre deze kmo's dit
                    al toepassen. We gaan op zoek naar hun jaarverslagen, websites en duurzaamheidsverslagen en houden dit allemaal bij in dit programma.
                </p>
                <p>
                    Ga verder naar het <Link to={'/dashboard'}>dashboard</Link> om deze data te verkennen. Daar kan je zoeken op bedrijf of sector.
                </p>
            </div>
        </div>
    </main>
}