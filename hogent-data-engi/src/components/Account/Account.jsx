import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthProvider";
import Title from "../Title";

export default function Account() {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = () => {
        logout()
        navigate('/account/login')
    }

    return <main>
        <div className="inside-main">
            <Title>Welkom bij HOGENT - Data Engineering Project</Title>
            Kies een applicatie om verder te gaan.
            <ul>
                <li><Link to='/'>Duurzaamheid bij kmo's</Link></li>
            </ul>
            <p className="btn" onClick={() => logoutHandler()}>Afmelden</p>
        </div>
    </main>
}