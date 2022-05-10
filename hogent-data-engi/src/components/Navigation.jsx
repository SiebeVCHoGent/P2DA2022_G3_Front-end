import { useCallback, useMemo, useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Navigation()
{
    const [navHidden, setNavHidden] = useState(false)

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
                <div className="nav-sub">
                    <span className="nav-sub-title">APPLICATIONS</span>
                    <ul className="nav-sub-list">
                        <li><Link to={'/'} className='a'>Duurzaamheid bij kmo's</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='nav-collapsed' hidden={!navHidden}>
            <HiOutlineMenuAlt2 className='nav-icon-collapsed' onClick={() => setNavHidden(!navHidden)}/>
        </div>
    </nav>
    )
}