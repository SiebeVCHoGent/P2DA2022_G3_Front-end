import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthProvider";
import Title from "../Title";

export default function Account() {
    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = () => {
        logout()
        navigate('/account/login')
    }
    return <div className="inside-main">
        <Title>Welkom bij HOGENT - Data Engineering Project</Title>
        <h2>Dag {user?.voornaam}</h2>
        Kies een applicatie om verder te gaan.
        <ul>
            <li><Link to='/'>Duurzaamheid bij kmo's</Link></li>
        </ul>
        <p className="btn" onClick={() => logoutHandler()}>Afmelden</p>
    </div>
}