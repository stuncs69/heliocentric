import { useState } from "react"

export function QuickSwitcher({ fn } : { fn: Function }) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div> <br/>
          <button
          className="border-solid border-2 border-black duration-300 p-1 hover:bg-black hover:text-white"
           onClick={handleOpen}>Quickly navigate to planet.</button>
           {open ? (
                <ul className="border-solid border-2 border-black duration-300 mt-2 max-w-fit">
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(-1)}>Home.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(0)}>Planet 1: Mercury.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(1)}>Planet 2: Venus.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(2)}>Planet 3: Earth.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(3)}>Planet 4: Mars.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(4)}>Planet 5: Jupiter.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(5)}>Planet 6: Saturn.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(6)}>Planet 7: Uranus.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(7)}>Planet 8: Neptune.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(8)}>Planet 9: Pluto.</li>
                    <li className="p-2 duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={() => fn(9)}>More information about gas giants.</li>
                </ul>
            ) : null}
        </div>
      );
}