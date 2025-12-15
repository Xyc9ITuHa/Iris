import CommandInput from "./parts/IRISqa/CommandInput";
import LasersMenu from "./LaserMenu";

interface LasersWithCommandProps {
    limit?: number;
    manufacturer?: string;
    searchTerm?: string;
    power?: string;
    wavelength?: string;
    type?: string;
    cooling?: string;
    modulation?: string;
    application?: string;
    pulse?: string;
    stability?: string;
}

export default function LasersWithCommand(props: LasersWithCommandProps) {
    return (
        <>
            <CommandInput />
            <LasersMenu {...props} />
        </>
    );
}

// Commands reference:
// \pw [value] - Power search (e.g., \pw 100)
// \wl [value] - Wavelength search (e.g., \wl 532)
// \tp [value] - Type search (e.g., \tp diode)
// \mf [value] - Manufacturer search (e.g., \mf coherent)
// \cl [value] - Cooling method (e.g., \cl water)
// \md [value] - Modulation type (e.g., \md cw)
// \ap [value] - Application (e.g., \ap medical)
// \ps - Filter for pulse specs
// \st - Filter for stability specs
// [text] - Regular laser name search (no command)