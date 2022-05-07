import { useParams } from "react-router-dom"
import Title from "../Title"

export default function CodingTreeItemOverview() {
    const { item } = useParams()

    return <div className="inside-main">
        <Title>Overzicht Coding Tree: {item}</Title>
    </div>
}