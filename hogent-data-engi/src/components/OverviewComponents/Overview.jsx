import CodingTree from "./CodingTree";
import DefaultInfoCompany from "./DefaultInfoCompany";
import Duurzaamheidsscore from "./Duurzaamheidsscore";
import SearchBar from "./SearchBar";
import ZoektermScore from "./ZoektermScore";

export default function Overview()
{
    return <main>
        <div className="inside-main">
            <h1>Dashboard</h1>
            <div className="main-container">
                <div className="dashboard-info-container">
                    <SearchBar/>
                    <DefaultInfoCompany/>
                    <Duurzaamheidsscore/>
                </div>
                <div>
                    <CodingTree/>
                </div>
            </div>
        </div>
    </main>
}