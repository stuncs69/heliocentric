import { QuickSwitcher } from "../quickSwitcher"

export function Main({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll">
            <h1 className="text-5xl">Our solar system.</h1><br />
            <p>Project by <i><a href="https://github.com/stuncs69">stuncs69.</a></i><br/>
            Background solar system made with <i><a href="https://threejs.org/">Three.js.</a></i><br/>
            Frontend/CSS made with <i><a href="https://tailwindcss.com/">TailwindCSS</a></i> and <i><a href="https://react.dev/">React.</a></i></p>
            <button onClick={_e => {
                changePlanet(0)
            }} className="border-solid border-2 border-black duration-300 p-1 hover:bg-black hover:text-white">View planet 1: Mercury.</button>
            <QuickSwitcher fn={changePlanet} />
        </section>
    </>)
}