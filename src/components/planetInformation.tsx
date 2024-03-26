export function Information({ fn, current }: { fn: Function, current: number }) {

    const changePlanet = (planetId: number) => {
        fn(planetId)
    }

    switch (current) {
        case -1:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10">
                    <h1 className="text-5xl">Our solar system.</h1><br />
                    <p>Project by <i><a href="https://github.com/stuncs69">stuncs69.</a></i></p>
                    <button onClick={_e => {
                        changePlanet(0)
                    }} className="border-solid border-2 border-black duration-300 p-1 hover:bg-black hover:text-white">View planet 1: Mercury.</button>
                </section>
            </>)
            break;
        case 0:
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
                                <td className="px-4 py-2">4,880 km</td>
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
        case 1:
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
                                <td className="px-4 py-2">12,104 km</td>
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
                </section>
            </>)
        case 2:
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
                                <td className="px-4 py-2">12,104 km</td>
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
                </section>
            </>)
        case 3:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Mars</h1><br />
                    <p>Mars is the fourth planet from the Sun.<br />
                        The surface of Mars is orange-red because it is covered in iron oxide dust, giving it the nickname "the Red Planet".<br /> Mars is among the brightest objects in Earth's sky and its high-contrast albedo features have made it a common subject for telescope viewing.<br /> In terms of orbital motion,
                        a Martian solar day (sol) is equal to 24.5 hours and a Martian solar year is equal to 1.88 Earth years (687 Earth days)</p>
                    <br></br>
                    <h2 className="text-2xl">Mars' physical characteristics.</h2>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                    <button onClick={_e => {
                        changePlanet(2)
                    }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 3: Earth.</button><br />
                    <button onClick={_e => {
                        changePlanet(4)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 5: Jupiter.</button>
                </section>
            </>)
        case 4:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Jupiter</h1><br />
                    <p>Not finished</p>
                    <br></br>
                    <h2 className="text-2xl">Jupiter's physical characteristics.</h2>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                    <button onClick={_e => {
                        changePlanet(3)
                    }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 4: Mars.</button><br />
                    <button onClick={_e => {
                        changePlanet(5)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 6: Saturn.</button>
                </section>
            </>)
        case 5:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Saturn</h1><br />
                    <p>Not finished</p>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                    <button onClick={_e => {
                        changePlanet(4)
                    }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 4: Jupiter.</button><br />
                    <button onClick={_e => {
                        changePlanet(6)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 7: Uranus.</button>
                </section>
            </>)
        case 6:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Uranus</h1><br />
                    <p>Not finished</p>
                    <br></br>
                    <h2 className="text-2xl">Uranus' physical characteristics.</h2>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                    <button onClick={_e => {
                        changePlanet(5)
                    }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 6: Saturn.</button><br />
                    <button onClick={_e => {
                        changePlanet(7)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">View planet 8: Neptune.</button>
                </section>
            </>)
        case 7:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Neptune</h1><br />
                    <p>Not finished</p>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
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
                </section>
            </>)
        case 8:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Pluto</h1><br />
                    <p>Not finished</p>
                    <br></br>
                    <h2 className="text-2xl">Pluto's physical characteristics.</h2>
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
                                <td className="px-4 py-2">6,779 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0.284 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0.151 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">255 K (−18 °C)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                    <button onClick={_e => {
                        changePlanet(7)
                    }} className="border-solid border-2 border-black duration-300 m-1  p-1 hover:bg-black hover:text-white">Return to planet 8: Neptune.</button><br />
                    <button onClick={_e => {
                        changePlanet(-1)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Back home.</button>
                </section>
            </>)
    }

}