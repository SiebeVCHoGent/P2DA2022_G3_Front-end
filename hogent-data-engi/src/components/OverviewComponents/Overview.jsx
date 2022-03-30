import CodingTree from "./CodingTree";
import DefaultInfoCompany from "./DefaultInfoCompany";
import Duurzaamheidsscore from "./Duurzaamheidsscore";
import SearchBar from "./SearchBar";

import Language from "../../files/images/language.png"
import Settings from "../../files/images/settings.svg"
import Profile from "../../files/images/profile.jpg"



export default function Overview() {
    return <main>
        <div className="inside-main">
            <header>
                <h1>Dashboard</h1>
                <section>
                    <div>
                        <a href="#"><img src={Language} alt="settings" /></a>
                    </div>
                    <div className="settings">
                        <a href="#"><img src={Settings} alt="settings"/></a>
                    </div>
                    <div className="circel-profile">
                        <img src={Profile} alt="profile" />
                    </div>
                </section>
            </header>
            <div className="main-container">
                <div className="dashboard-info-container elements">
                    <SearchBar />
                    <DefaultInfoCompany />
                    <Duurzaamheidsscore className="element element2" />
                </div>
                <CodingTree />
            </div>
        </div>
    </main>
}