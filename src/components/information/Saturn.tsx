export function Saturn({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Saturn</h1><br />
            <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.<br/> It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive.<br/> Even though Saturn is nearly the size of Jupiter, Saturn has less than one-third of Jupiter's mass.<br/> Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km) with an orbital period of 29.45 years. </p>
            <br></br>
            <h2 className="text-2xl">Saturn's physical characteristics.</h2>
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
                        <td className="px-4 py-2">116460 km</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Surfare area (in Earths)</td>
                        <td className="px-4 py-2">83,703 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Total mass (in Earths)</td>
                        <td className="px-4 py-2">95,159 Earths</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                        <td className="px-4 py-2">81 K (-192,15 °C)</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <button onClick={_e => {
                changePlanet(4)
            }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 5: Jupiter.</button><br />
            <button onClick={_e => {
                changePlanet(6)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 7: Uranus.</button>
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
        </section>
    </>)
}