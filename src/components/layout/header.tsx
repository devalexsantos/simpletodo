import { ModeToggle } from "../mode-toggle";

export function Header() {
    return(
        <div className="container p-8 flex justify-between">
            <span className="text-xl font-bold italic">fastodo.</span>
            <ModeToggle />
        </div>
    )
}