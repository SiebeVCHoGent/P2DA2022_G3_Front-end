export default function Navigation()
{
    return <nav>
        <div className="title">
            HOGENT
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
                    <li>Uitleg</li>
                </ul>
            </div>
        </div>
    </nav>
}