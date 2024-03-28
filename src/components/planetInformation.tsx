import { Earth } from "./information/Earth"
import { GasGiants } from "./information/GasGiants"
import { Jupiter } from "./information/Jupiter"
import { Main } from "./information/Main"
import { Mars } from "./information/Mars"
import { Mercury } from "./information/Mercury"
import { Neptune } from "./information/Neptune"
import { Pluto } from "./information/Pluto"
import { Saturn } from "./information/Saturn"
import { Uranus } from "./information/Uranus"
import { Venus } from "./information/Venus"

export function Information({ fn, current }: { fn: Function, current: number }) {

    const changePlanet = (planetId: number) => {
        fn(planetId)
    }

    switch (current) {
        case -1:
            return <Main changePlanet={changePlanet} />
        case 0:
            return <Mercury changePlanet={changePlanet} />
        case 1:
            return <Venus changePlanet={changePlanet} />
        case 2:
            return <Earth changePlanet={changePlanet} />
        case 3:
            return <Mars changePlanet={changePlanet} />
        case 4:
            return <Jupiter changePlanet={changePlanet} />
        case 5:
            return <Saturn changePlanet={changePlanet} />
        case 6:
            return <Uranus changePlanet={changePlanet} />
        case 7:
            return <Neptune changePlanet={changePlanet} />
        case 8:
            return <Pluto changePlanet={changePlanet} />
        case 9:
            return <GasGiants changePlanet={changePlanet} />
    }

}