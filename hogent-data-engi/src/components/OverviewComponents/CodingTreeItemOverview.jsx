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
        <Title className='capitalize'>Overzicht Zoektermen van {itemP.replace('_', ' ')}</Title>
        <div cl>
            <h3>Meest voorkomende zoektermen</h3>
            <hr />
            <div className="zoektermen-container">
                <div className="zoektermen-subcontainer">
                    <h4>Totaal</h4>
                    <ul>
                        {
                            Object.keys(zoektermen).map(key => {
                                return <li>{zoektermen[key] + ' - ' + key}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="zoektermen-subcontainer">
                    <h4>Jaarverslag</h4>
                    <ul>
                        {
                            Object.keys(zoektermenPdf).map(key => {
                                return <li>{zoektermenPdf[key] + ' - ' + key}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="zoektermen-subcontainer">
                    <h4>Website</h4>
                    <ul>
                        {
                            Object.keys(zoektermenWebsite).map(key => {
                                return <li>{zoektermenWebsite[key] + ' - ' + key}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
}