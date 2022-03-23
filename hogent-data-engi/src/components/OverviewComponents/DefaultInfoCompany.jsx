export default function DefaultInfoCompany(){
    return <div className="default-info-container">
        <h2>Volckaert - Soetens NV</h2>
        <hr/>
        <div className="table-container">
        {/* TODO Implement real values */}
        <table className="table-default-info">
            <tr>
                <th>Venootschapsnaam</th>
                <td>Volckaert - Soetens NV</td>
            </tr>
            <tr>
                <th>Ondernemingsnummer</th>
                <td>BE04053957723</td>
            </tr>
            <tr>
                <th>Telefoonnummer</th>
                <td>+329 360 76 36</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>/</td>
            </tr>
            <tr>
                <th>Adres</th>
                <td>Grote Steenweg 41</td>
            </tr>
            <tr className="multirow">
                <th></th>
                <td>930, Lede</td>
            </tr>
            <tr>
                <th>Website</th>
                <td><a href="www.volckaert.be">www.volckaert.be</a></td>
            </tr>
        </table>
        <table className="table-default-info table-economics">
            <tr>
                <th>Omzetcijfer</th>
                <td>€ 32225</td>
            </tr>
            <tr>
                <th>Balanstotaal</th>
                <td>€ 2650</td>
            </tr>
            <tr>
                <th>Framework voor duurzaamheidsrapportering</th>
                <td>Neen</td>
            </tr>
            <tr>
                <th>Beursnotatie</th>
                <td>Niet beursgenoteerd</td>
            </tr>
            <tr>
                <th>Aantal werknemers</th>
                <td>36</td>
            </tr>
            <tr>
                <th>B2B of B2C</th>
                <td>B2C</td>
            </tr>
            <tr>
                <th>Sector</th>
                <td>groothandeltabaksproducten</td>
            </tr>
        </table>
        </div>
    </div>
}