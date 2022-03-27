import CodingTree from "./CodingTree";
import DefaultInfoCompany from "./DefaultInfoCompany";
import Duurzaamheidsscore from "./Duurzaamheidsscore";
import SearchBar from "./SearchBar";

export default function Overview() {
    return <main>
        <div className="inside-main">
            <h1>Dashboard</h1>
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