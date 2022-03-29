import { useCallback, useMemo, useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

export default function Navigation()
{
    const [navHidden, setNavHidden] = useState(false)

    return (
    <nav>
        <div  class='nav' hidden={navHidden}>
            <div className="title">
                HOGENT
                <HiOutlineMenuAlt2 className='nav-icon' onClick={() => setNavHidden(!navHidden)}/>
                <span className="subtitle">Data Engineering Project</span>
            </div>
                
            <div className=".nav-body">
                <div className="nav-sub">
                <span className="nav-sub-title">MENU</span>
                    <ul className="nav-sub-list">
                        <li>Uitleg</li>
                        <li>Dashboard</li>
                        <li>Overzicht</li>
                    </ul>
                </div>
                <div className="nav-sub">
                    <span className="nav-sub-title">APPLICATIONS</span>
                    <ul className="nav-sub-list">
                        <li>Duurzaamheid bij kmo's</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='nav-collapsed' hidden={!navHidden}>
            <HiOutlineMenuAlt2 className='nav-icon-collapsed' onClick={() => setNavHidden(!navHidden)}/>
        </div>
    </nav>
    )
}