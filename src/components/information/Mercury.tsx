export function Mercury({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Mercury.</h1><br />
            <p>Mercury is the first, and smallest planet in our solar system.<br />In English, it is named after the roman god Mercurius.</p>
            <br></br>
            <h2 className="text-2xl">Mercury's physical characteristics.</h2>
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
                        <td className="px-4 py-2">4880 km</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Surfare area (in Earths)</td>
                        <td className="px-4 py-2">0.147 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Total mass (in Earths)</td>
                        <td className="px-4 py-2">0.055 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                        <td className="px-4 py-2">437 K (164 °C) </td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to home.</button><br />
            <button onClick={_e => {
                changePlanet(1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 2: Venus.</button>
        </section>
    </>)
}