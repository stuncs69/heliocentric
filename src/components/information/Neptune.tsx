export function Neptune({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Neptune</h1><br />
            <p>Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet.<br /> It is 17 times the mass of Earth, and slightly more massive than fellow ice giant Uranus.<br /> Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface. <br />The planet orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). <br />It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.</p>
            <br></br>
            <h2 className="text-2xl">Neptune's physical characteristics.</h2>
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
                        <td className="px-4 py-2">49244 km</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Surfare area (in Earths)</td>
                        <td className="px-4 py-2">14,98 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Total mass (in Earths)</td>
                        <td className="px-4 py-2">57,74 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                        <td className="px-4 py-2">46,6 K (-226,55 °C)</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button onClick={_e => {
                changePlanet(6)
            }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 7: Saturn.</button><br />
            <button onClick={_e => {
                changePlanet(8)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 9: Pluto.</button>
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
        </section>
    </>)
}