import DefaultInfoCompany from "./DefaultInfoCompany";
import SearchBar from "./SearchBar";
import ZoektermScore from "./ZoektermScore";

export default function Overview()
{
    return <main>
        <div className="inside-main">
            <h1>Dashboard</h1>
            <SearchBar/>
            <DefaultInfoCompany/>
            <ZoektermScore/>
        </div>
    </main>
}