import { useParams } from "react-router-dom"

export default function CodingTreeItemOverview()
{
    const {item} = useParams()

    return <main>
        <div className="inside-main">
            <h1>Overzicht Coding Tree: {item}</h1>
        </div>
    </main>
}