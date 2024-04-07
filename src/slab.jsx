import { useState } from "react";

export function SlabComponent() {
    const [i, setI] = useState(0);
    return (
        <>
            <form>
                <input type="number" disabled value={1} />
                <input type="number" onBlur={(e) => {
                    if (e.target.value > 0) {
                        console.log(e.target.value);
                        setI(e.target.value);
                    }
                }} />
                <input type="number" value={i <= 0 ? Number.POSITIVE_INFINITY : i * 10} />

            </form>
            {
                i > 0 && <SlabChildComponent i={i} />
            }
        </>
    );
}


function SlabChildComponent({ i }) {
    const [j, setJ] = useState(0);
    return (
        <>
            <form>
                <input type="number" disabled value={i} />
                <input type="number" onBlur={(e) => {
                    if (e.target.value > 0) {
                        console.log(e.target.value);
                        setJ(e.target.value);
                    }
                }} />
                <input type="number" value={j <= 0 ? Number.POSITIVE_INFINITY : j * 10} />
            </form>
            {
                j > 0 && <SlabChildComponent i={j} />
            }
        </>
    );
}