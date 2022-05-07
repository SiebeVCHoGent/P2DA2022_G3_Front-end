import Language from "../files/images/language.png"
import {AiFillSetting} from 'react-icons/ai'
import { MdOutlineNoAccounts, MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

export default function Title({children}){
    const { isAuthenticated } = useContext(AuthContext)

    return <header>
        <h1>{children}</h1>
        <section className="top-icons">
            {/* <div className="flag">
                <a href="#e"><img src={Language} alt="settings" /></a>
            </div>
            <div className="nav-icons">
                <a href="#e"><AiFillSetting/></a>
            </div> */}
            <div className="nav-icons">
                {
                    isAuthenticated ? <Link to='/account'><MdOutlineAccountCircle /></Link> : <Link to='/account/login'><MdOutlineNoAccounts /></Link>
                }
            </div>
        </section>
    </header>
}