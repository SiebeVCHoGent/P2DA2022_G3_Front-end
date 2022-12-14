import { useContext } from 'react'
import {  useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

export default function Navigation()
{
    const [navHidden, setNavHidden] = useState(false)
    const {user} = useContext(AuthContext)

    return (
    <nav>
        <div  className='nav' hidden={navHidden}>
            <div className="title">
                HOGENT
                <HiOutlineMenuAlt2 className='nav-icon' onClick={() => setNavHidden(!navHidden)}/>
                <span className="subtitle">Data Engineering Project</span>
            </div>
                
            <div className=".nav-body">
                <div className="nav-sub">
                <span className="nav-sub-title">MENU</span>
                    <ul className="nav-sub-list">
                        <li><Link to={'/'} className='a'>Uitleg</Link></li>
                        <li><Link to={'/dashboard'} className='a'>Dashboard</Link></li>
                        <li><Link to={'/sectoren'} className='a'>Sectoren</Link></li>
                    </ul>
                </div>
                {
                    user && user?.roles?.includes("moderator") ?
                    <div className='nav-sub'>
                        <span className='nav-sub-title'>MODERATOR TOOLS</span>
                        <ul className="nav-sub-list">
                            <li><Link to={'/searchterms'} className='a'>Zoektermen</Link></li>
                            <li><Link to={'/voorspellen'} className='a'>Voorspellen</Link></li>
                        </ul>
                    </div>
                    : null
                }

            </div>
        </div>
        <div className='nav-collapsed' hidden={!navHidden}>
            <HiOutlineMenuAlt2 className='nav-icon-collapsed' onClick={() => setNavHidden(!navHidden)}/>
        </div>
    </nav>
    )
}