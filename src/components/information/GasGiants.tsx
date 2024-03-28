import { QuickSwitcher } from "../quickSwitcher"

export function GasGiants({ changePlanet }: { changePlanet: Function }) {
    return (<>
        <section className="z-20 absolute top-0 left-0 m-10 overflow-scroll max-h-screen pb-20">
            <h1 className="text-5xl">Gas giants.</h1><br />
            <p>A gas giant is a giant planet composed mainly of hydrogen and helium. Gas giants are also called failed stars because they contain the same basic elements as a star.<br /> Jupiter and Saturn are the gas giants of the Solar System. The term "gas giant" was originally synonymous with "giant planet". <br />However, in the 1990s, it became known that Uranus and Neptune are really a distinct class of giant planets, being composed mainly of heavier volatile substances (which are referred to as "ices").<br /> For this reason, Uranus and Neptune are now often classified in the separate category of ice giants.</p>
            <br/>
            <button onClick={_e => {
                changePlanet(-1)
            }} className="border-solid border-2 border-black duration-300 p-1 m-1 hover:bg-black hover:text-white">Back home.</button>
            <QuickSwitcher fn={changePlanet} />
        </section>
    </>)
}