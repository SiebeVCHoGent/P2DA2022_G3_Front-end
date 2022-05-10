import { useContext, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchProvider"
import Title from "../Title"

export default function CodingTreeItemOverview() {
    const { item: itemP } = useParams()
    const { searchresult: sr } = useContext(SearchContext)

    const [zoektermen, setZoektermen] = useState({})
    const [zoektermenPdf, setZoektermenPdf] = useState({})
    const [zoektermenWebsite, setZoektermenWebsite] = useState({})


    useMemo(() => {
        let zoektermenT = {}
        let zoektermenPdfT = {}
        let zoektermenWebsiteT = {}
        for (const location in sr.Tree) {
            for (const subtree in sr.Tree[location]) {
                for (const item in sr.Tree[location][subtree]) {
                    if (item === itemP)
                        for (const zoekterm in sr.Tree[location][subtree][item]) {
                            if (zoekterm in zoektermenT)
                                zoektermenT[zoekterm] += sr.Tree[location][subtree][item][zoekterm]
                            else
                                zoektermenT[zoekterm] = sr.Tree[location][subtree][item][zoekterm]

                            if (location === 'pdf')
                                zoektermenPdfT[zoekterm] = sr.Tree[location][subtree][item][zoekterm]
                            else
                                zoektermenWebsiteT[zoekterm] = sr.Tree[location][subtree][item][zoekterm]
                        }
                }
            }
        }

        const sort = (obj) => Object.entries(obj).sort(([, a], [, b]) => b - a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

        setZoektermen(sort(zoektermenT))
        setZoektermenPdf(sort(zoektermenPdfT))
        setZoektermenWebsite(sort(zoektermenWebsiteT))
    }, [sr, itemP])


    return <div className="inside-main">
        <Title><span className='capitalize'>Overzicht Zoektermen van {itemP.replace('_', ' ')}</span></Title>
        <div>
            <h3>Meest voorkomende zoektermen</h3>
            <hr />
            <div className="zoektermen-container">
                <div className="zoektermen-subcontainer">
                    <h4>Totaal</h4>
                    <ul>
                        {
                            Object.keys(zoektermen).length > 0 ?
                            Object.keys(zoektermen).map(key => {
                                return <li key={key}>{zoektermen[key] + ' - ' + key}</li>
                            })
                            : 'Geen zoektermen gevonden'
                        }
                    </ul>
                </div>
                <div className="zoektermen-subcontainer">
                    <h4>Jaarverslag</h4>
                    <ul>
                        {
                            Object.keys(zoektermenPdf).length > 0 ?
                            Object.keys(zoektermenPdf).map(key => {
                                return <li key={key}>{zoektermenPdf[key] + ' - ' + key}</li>
                            })
                            : 'Geen jaarverslag gevonden'
                        }
                    </ul>
                </div>
                <div className="zoektermen-subcontainer">
                    <h4>Website</h4>
                    <ul>
                        {
                            Object.keys(zoektermenWebsite).length > 0 ?
                            Object.keys(zoektermenWebsite).map(key => {
                                return <li key={key}>{zoektermenWebsite[key] + ' - ' + key}</li>
                            })
                            : 'Geen website gevonden'
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
}