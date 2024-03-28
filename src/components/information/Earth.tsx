export function Earth({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Earth</h1><br />
            <p>You should be here right now.<br />Earth is third planet from the sun, and the only known planet to inhabit life.</p>
            <br></br>
            <h2 className="text-2xl">Earth's physical characteristics.</h2>
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
                        <td className="px-4 py-2">12742 km</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Surfare area (in Earths)</td>
                        <td className="px-4 py-2">1 Earth</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Total mass (in Earths)</td>
                        <td className="px-4 py-2">1 Earth</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                        <td className="px-4 py-2">255 K (−18 °C)</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button onClick={_e => {
                changePlanet(1)
            }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 2: Venus.</button><br />
            <button onClick={_e => {
                changePlanet(3)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 4: Mars.</button>
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
        </section>
    </>)
}