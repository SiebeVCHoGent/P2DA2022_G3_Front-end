import DefaultInfoCompany from "./DefaultInfoCompany";
import SearchBar from "./SearchBar";

export default function Overview()
{
    return <main>
        <div className="inside-main">
            <h1>Dashboard</h1>
            <SearchBar></SearchBar>
            <DefaultInfoCompany></DefaultInfoCompany>
        </div>
    </main>
}