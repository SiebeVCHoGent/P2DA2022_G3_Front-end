import CodingTree from "./CodingTree";
import DefaultInfoCompany from "./DefaultInfoCompany";
import Duurzaamheidsscore from "./Duurzaamheidsscore";
import SearchBar from "./SearchBar";

import OpsommingZoeken from "./OpsommingZoeken";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";
import Title from "../Title";
import CompanyGraphs from "./CompanyGraphs";
import ReactLoading from 'react-loading'



export default function Overview() {
    const { arrResults,loading } = useContext(SearchContext)

    return <div className="inside-main">
        <Title>Dashboard</Title>
        <div className="main-container">
            <div className="dashboard-info-container elements">
                <SearchBar />
                {
                loading ? <ReactLoading type="bars" color="#000"/> : <></>
                }
                {
                    (arrResults.length > 1 ? <><OpsommingZoeken /></> : (<>
                    <DefaultInfoCompany />
                    <Duurzaamheidsscore className="element element2" />
                    <CompanyGraphs /></>
                    ))
                }
            </div>
            {
                (arrResults.length > 1 ? <></> : <><CodingTree /></>)
            }
        </div>
    </div>
}