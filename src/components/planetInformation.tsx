import { QuickSwitcher } from "./quickSwitcher"

export function Information({ fn, current }: { fn: Function, current: number }) {

    const changePlanet = (planetId: number) => {
        fn(planetId)
    }

    switch (current) {
        case -1:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10">
                    <h1 className="text-5xl">Our solar system.</h1><br />
                    <p>Project by <i><a href="https://github.com/stuncs69">stuncs69.</a></i><br/>
                    Background solar system made with <i><a href="https://threejs.org/">Three.js.</a></i><br/>
                    Frontend/CSS made with <i><a href="https://tailwindcss.com/">TailwindCSS</a></i></p>
                    <button onClick={_e => {
                        changePlanet(0)
                    }} className="border-solid border-2 border-black duration-300 p-1 hover:bg-black hover:text-white">View planet 1: Mercury.</button>
                    <QuickSwitcher fn={changePlanet} />
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
                                <td className="px-4 py-2">6779 km</td>
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
                    <button onClick={_e => {
                        changePlanet(-1)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
                </section>
            </>)
        case 4:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Jupiter</h1><br />
                    <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System.<br/> It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, <br/>and slightly less than one one-thousandth the mass of the Sun. <br/>Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus,<br/> and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion. </p>
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
                                <td className="px-4 py-2">139820 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">120.4 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">317.8 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">88 K (−185 °C)</td>
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
                    <button onClick={_e => {
                        changePlanet(-1)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
                </section>
            </>)
        case 5:
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
        case 6:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Uranus</h1><br />
                    <p>Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant.<br/> Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. <br/>The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of all the Solar System's planets. <br/>It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 minutes. This means that in an 84-Earth-year orbital period around the Sun, <br/>its poles get around 42 years of continuous sunlight, followed by 42 years of continuous darkness. </p>
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
                                <td className="px-4 py-2">50724 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">15,91 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">14,536 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">58,1 K (-215,05 °C)</td>
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
                    <button onClick={_e => {
                        changePlanet(-1)
                    }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Go home.</button>
                </section>
            </>)
        case 7:
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
        case 8:
            return (<>
                <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
                    <h1 className="text-5xl">Pluto</h1><br />
                    <p>Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. <br />It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is less massive than Eris.<br /> Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Pluto has only one sixth the mass of Earth's moon, and one third its volume. </p>
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
                                <td className="px-4 py-2">2376,6 km</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Surfare area (in Earths)</td>
                                <td className="px-4 py-2">0,035 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Total mass (in Earths)</td>
                                <td className="px-4 py-2">0,00218 Earths</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Temperature (blackbody temperature)</td>
                                <td className="px-4 py-2">44 K (−229 °C)</td>
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