import CodingTree from "./CodingTree";
import DefaultInfoCompany from "./DefaultInfoCompany";
import Duurzaamheidsscore from "./Duurzaamheidsscore";
import SearchBar from "./SearchBar";

import Language from "../../files/images/language.png"
import {AiFillSetting} from 'react-icons/ai'
import Profile from "../../files/images/profile.jpg"
import OpsommingZoeken from "./OpsommingZoeken";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";



export default function Overview() {
    const { arrResults } = useContext(SearchContext)

    return <main>
        <div className="inside-main">
            <header>
                <h1>Dashboard</h1>
                <section className="top-icons">
                    <div className="flag">
                        <a href="#"><img src={Language} alt="settings" /></a>
                    </div>
                    <div className="settings">
                        <a href="#"><AiFillSetting/></a>
                    </div>
                    <div className="cirkel-profile">
                        <img src={Profile} alt="profile" />
                    </div>
                </section>
            </header>
            <div className="main-container">
                <div className="dashboard-info-container elements">
                    <SearchBar />
                    {
                       (arrResults.length > 1 ? <><OpsommingZoeken /></> : (<><DefaultInfoCompany /> <Duurzaamheidsscore className="element element2" /></>))
                    }
                </div>
                {
                    (arrResults.length > 1 ? <></> : <><CodingTree /></>)
                }
            </div>
        </div>
    </main>
}