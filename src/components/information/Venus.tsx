export function Venus({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Venus.</h1><br />
            <p>Venus is the second planet to the sun. Venus has historically been a common and important object for humans,<br />
                in both their cultures and astronomy. Orbiting inferiorly (inside of Earth's orbit),<br />
                it always appears close to the Sun in Earth's sky, as either a "morning star" or an "evening star".<br />
                While this is also true for Mercury, Venus appears more prominent, <br />
                since it is the third brightest object in Earth's sky after the Moon and the Sun.<br />It is named after the roman goddess of love.</p>
            <br></br>
            <h2 className="text-2xl">Venus' physical characteristics.</h2>
            <table className="table-auto">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th className="px-4 py-2">Statistic</th>
                        <th className="px-4 py-2">Measurement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">Diameter</td>
                        <td className="px-4 py-2">12104 km</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Surfare area (in Earths)</td>
                        <td className="px-4 py-2">0.902 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Total mass (in Earths)</td>
                        <td className="px-4 py-2">0.815 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                        <td className="px-4 py-2">232 K (−41 °C)</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button onClick={_e => {
                changePlanet(0)
            }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 1: Mercury.</button><br />
            <button onClick={_e => {
                changePlanet(2)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 3: Earth.</button>
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
        </section>
    </>)
}