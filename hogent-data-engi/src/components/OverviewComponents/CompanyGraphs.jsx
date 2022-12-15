import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useEffect } from "react"

export default function CompanyGraphs() {
    const { searchresult: sr, graphData: data, getGraphData } = useContext(SearchContext)
    
    useEffect(() => {
        if (sr?.Kmo?.ondernemingsnummer)
        {
            getGraphData(sr?.Kmo?.ondernemingsnummer)
            console.log('sr', sr)
        }
    }, [getGraphData, sr?.ondernemingsnummer, sr])

    return <>
        <h2>Grafieken</h2>
        <h3>Hieronder zie je de samenvattende grafieken van "{sr?.Kmo?.naam}"</h3>
        <hr />

        {
            data && data.length > 0 ?
            <div className="graph-container">
            <div className="graph">
                <h3>Score per categorie</h3>
                <p>Deze grafiek toont de score per categorie in vergelijking met andere kmos in de hoofdsector "{sr?.Hoofdsector?.naam}"</p>
                <div className="graph-content">
                    <div className="graph-content__bar" style={{width: '100%', maxWidth: "1100px", height: '500px'}}>
                        <ResponsiveContainer>
                            <BarChart
                                width={1000}
                                height={300}
                                data={data.map(d => ({...d, rank: Math.round((d.rank - .5) * 2 * 1000) / 10 }))}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="term" />
                                <YAxis domain={[-100, 100]}/>
                                <Tooltip />
                                <Bar dataKey="rank" 
                                    fill={'#bb90bd'}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
            : null
        }
        
    </>

}