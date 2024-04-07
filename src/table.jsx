import { useState } from "react";
import { createPortal } from 'react-dom';

export default function TableComp({ modal, setModal }) {

    const [header, setHeader] = useState([])
    const [body, setBody] = useState([])
    

    function addCol(colName, elemType) {
        const newHeader = [...header, {
            name: colName ?? String.fromCharCode(header.length + 65),
            elemType: elemType
        }]
        setHeader(newHeader);
        body.forEach((row, idx) => {
            row.cellDetails.push({
                name: `cell-${colName ?? String.fromCharCode(header.length + 65)}-${idx+1}`,
                elemType: elemType
            })
        })
    }

    const addRow = () => {
        if (header.length < 1) {
            setModal((modal) => {
                return { ...modal, open: true, type: "alert" }
            })

        }

        else {
            const newBody = [...body, {
                cellDetails:
                    header.map((elem) => {
                        return ({
                            name: `cell-${elem.name}-${body.length+1}`,
                            elemType: elem.elemType
                        })
                    })

            }]
            setBody(newBody);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        addCol(e.target.children[0].value, e.target.children[1].value);
        e.target.children[0].value = "";
        e.target.children[1].value = "";
        setModal((modal) => {
            return { ...modal, open: false }
        });
    }

    return (
        <>
            <button onClick={() => {
                setModal((modal) => {
                    return { ...modal, open: true, type: "form" }
                });
            }}>Add Column</button>
            <button onClick={addRow}>Add Row</button>
            {modal.open &&
                <ModalComp submitForm={submitForm} setModal={setModal} modal={modal} />
            }
            <table className="table-container">
                <thead>
                    {
                        header.map((col) => {
                            console.log({col});
                            return (
                                <th>
                                    <span>
                                        <input type="text" value={col.name} placeholder={col.name} />
                                        <input type="search" />
                                    </span>
                                </th>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        body.map((row) => {
                            return (
                                <tr>
                                    {
                                        row.cellDetails.map((data) => {
                                            return (
                                                <td>
                                                    <InputComp data={data} />
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}



function InputComp({ data }) {
    return (
        data.elemType === "TextArea" ?
            <textarea placeholder={data.name} />
            : <input placeholder={data.name} />
    )
}

function FormComp({ submitForm }) {
    return (
        <form onSubmit={(e) => { submitForm(e) }}>
            <input type="text" />
            <select>
                <option value="TextArea">TextArea</option>
                <option value="TextInput">Text Input</option>
            </select>
            <div className="btnWrap">
                <button type="submit">  Save </button>
                <button type="reset" > Clear </button>
            </div>
        </form>
    );
}

function ModalComp({ setModal, submitForm, modal }) {
    return (

        createPortal(
            <div className="modal-div">
                <div className="closeBtn">
                    <button autoFocus type="button" onClick={() => {
                        setModal({ ...modal, open: false })
                    }}>
                        ✖
                    </button>
                </div>
                {
                    modal?.type === "form" ?
                        <FormComp submitForm={submitForm} /> :
                        <Alert />
                }
            </div>,
            document.body
        )
    )
}

function Alert() {
    return (
        <div className="alert-box">Add a Column before adding a row!!!</div>
    )
}