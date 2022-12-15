import { useContext } from "react"
import { SearchContext } from "../../contexts/SearchProvider"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis, ZAxis } from 'recharts'
import { useEffect } from "react"

function CustomDot({ cx, cy, stroke, payload }) {
    let color='#EF8767' 
    // make color distribution for score, red is bad, green is good on values 20 40 60 80 
    if (payload?.score > 80) {
        color = '#A5CA72'
    } else if (payload?.score > 60) {
        color = '#16B0A5'
    } else if (payload?.score > 40) {
        color = '#F4DE00'
    } else if (payload?.score > 20) {
        color = '#FABC32'
    }

    return (
        <svg width="1000" height="1000">
        <circle cx={cx} cy={cy} r="30" fill={color} strokeWidth="5" />
        <text x={cx} y={cy} text-anchor="middle" dominant-baseline="central" fontWeight={'bold'}>{payload?.score}</text>
      </svg>
    )
}

export default function CompanyGraphs() {
    const { searchresult: sr, graphData: data, getGraphData } = useContext(SearchContext)

    useEffect(() => {
        if (sr?.Kmo?.ondernemingsnummer) {
            getGraphData(sr?.Kmo?.ondernemingsnummer)
            console.log('sr', sr)
        }
    }, [getGraphData, sr?.ondernemingsnummer, sr])


    const data2 = [
        {
            jaar: 2016,
            score: 0.0154456
        },
        {
            jaar: 2017,
            score: 0.345567864
        },
        {
            jaar: 2018,
            score: 0.456567864
        },
        {
            jaar: 2019,
            score: 0.375521
        },
        {
            jaar: 2020,
            score: 0.7851234
        },
        {
            jaar: 2021,
            score: 0.9515315
        }
    ];

    return <>
        <h2>Grafieken</h2>
        {
            sr?.Hoofdsector ?
                <h3>Hieronder zie je de samenvattende grafieken van "{sr?.Kmo?.naam}"</h3>
                : <h3>Zoek een bedrijf om de corresponderende grafieken te zien.</h3>
        }

        <hr />

        {
            data && data.sector_percent.length > 0 ?
                <div className="graph-container">
                    <div className="graph" style={{ maxWidth: "950px" }} >
                        <h3>Score per categorie</h3>
                        <p>Deze grafiek toont de score per categorie in vergelijking met andere kmos in de hoofdsector "{sr?.Hoofdsector?.naam}".</p>
                        <div className="graph-content">
                            <div className="graph-content__bar" style={{ width: '100%', maxWidth: "1000px", height: '500px' }}>
                                <ResponsiveContainer>
                                    <BarChart
                                        width={1000}
                                        height={300}
                                        data={data.sector_percent.map(d => ({ ...d, rank: Math.round((d.rank - .5) * 2 * 1000) / 10 }))}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="5 5" />
                                        <XAxis dataKey="term" />
                                        <YAxis domain={[-100, 100]} />
                                        <Tooltip />
                                        <Bar dataKey="rank"
                                            fill={'#bb90bd'}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="graph" style={{ maxWidth: "1000px" }} >
                        <h3>Score Geschiedenis</h3>
                        <p>Een geschiedenis van de scores van afgelopen jaren.</p>
                        <div className="graph-content">
                            <div className="graph-content__bar" style={{ width: '100%', maxWidth: "1000px", height: '500px' }}>
                                <LineChart width={1000} height={400} data={data?.history?.map(s => ({ ...s, score: Math.round(s.score * 1000) / 10 }))}
                                margin={{ top: 30, right: 40, left: 20, bottom: 30 }}
                                >
                                    <XAxis dataKey={'jaar'} type="number" domain={['dataMin -1', 'dataMax + 1']} />
                                    <YAxis domain={[0, 100]} />
                                    <Line type="monotone" dataKey="score" stroke="#bb90bd" strokeWidth={3}
                                        dot={<CustomDot />}
                                        isAnimationActive={false}
                                    />
                                    <Tooltip />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <Scatter />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
                : null
        }

    </>

}