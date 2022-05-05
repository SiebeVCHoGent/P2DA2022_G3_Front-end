import Language from "../files/images/language.png"
import {AiFillSetting} from 'react-icons/ai'
import Profile from "../files/images/profile.jpg"

export default function Title({children}){
    return <header>
        <h1>{children}</h1>
        <section className="top-icons">
            <div className="flag">
                <a href="#e"><img src={Language} alt="settings" /></a>
            </div>
            <div className="settings">
                <a href="#e"><AiFillSetting/></a>
            </div>
            <div className="cirkel-profile">
                <img src={Profile} alt="profile" />
            </div>
        </section>
    </header>
}