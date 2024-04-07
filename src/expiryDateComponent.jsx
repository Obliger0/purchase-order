import { useState } from "react";

function ExpiryDateComponent({ setTable, table }) {
    const [disable, setDisable] = useState(false);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const date = e.target.children[0].value;
            const qty = e.target.children[1].value;
            if (!date || !qty) return alert("fill out all the information properly !!!")
            setTable((table) => {
                const newTable = [...table, {
                    date: date,
                    quantity: qty
                }];
                return newTable;
            })
            e.target.children[0].value = "";
            e.target.children[1].value = "";
        }}>
            <input onSelect={(e) => {
                table.length > 0 && table.forEach((elem) => {
                    if (e.target.value === elem.date) {
                        setDisable(true);
                        return;
                    }
                    else setDisable(false);
                })
            }} type="date" />
            <input disabled={disable} type="number" />
            <button> + </button>
        </form>
    );
}

export default ExpiryDateComponent;