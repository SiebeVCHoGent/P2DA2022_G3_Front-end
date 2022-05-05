import { useParams } from "react-router-dom"
import Title from "../Title"

export default function CodingTreeItemOverview()
{
    const {item} = useParams()

    return <main>
        <div className="inside-main">
            <Title>Overzicht Coding Tree: {item}</Title>
        </div>
    </main>
}