import { useState, useEffect } from "react";
export function TableComp() {
  const [header, setHeader] = useState([]);
  const [body, setBody] = useState([]);
    console.log(header);
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setDataInState(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getRows(columnData) {
    const rowData = [];
    const keys = Object.keys(columnData);
    keys.map((key) => {
      columnData[key].map((value,idx) => {
        if(rowData[idx]){
            rowData[idx].cells.push({
              cellValue: value,
            });
        }
        else {
        rowData[idx] =  {cells: [{
            cellValue: value,
          }]}
        };
      });
    });
    setBody(rowData);
  }

  function setDataInState(data) {
    const columnData = {};
    data.map((elem) => {
      if (columnData[elem.userId]) {
        columnData[elem.userId].push(elem.title);
      } else {
        columnData[elem.userId] = [elem.title];
      }
    });
    setHeader(Object.keys(columnData));
    getRows(columnData);
  }

  return (
    <>
      <button onClick={()=>{
        const newHeader = [...header, ""+(header.length+1)];
        setHeader(newHeader);
        body.map((row)=>{
            row.cells.push({cellValue: ''})
        })
      }}>Add Column</button>
      <button onClick={()=>{
        const newBody = [...body, {cells : header.map(()=>{
           return {cellValue: ""}
        })}]
        setBody(newBody)
      }}>Add Row</button>

      <table className="table-container">
        <thead>
          {header.map((colName, idx) => {
            return (
              <th>
                <input 
                    type="number" 
                    value={colName} 
                    placeholder={colName} 
                    id={idx}
                    onChange={(e)=>{
                        setHeader((header)=>{
                            header[e.target.id] = e.target.value;
                            return [...header]
                        })
                    }}
                />
              </th>
            );
          })}
        </thead>
        <tbody>
          {body.map((row, index) => {
            return (
              <tr>
                {row.cells.map((data, idx) => {
                  return (
                    <td>
                      <input 
                        type="text"
                        placeholder={data.cellValue}
                        value={data.cellValue}
                        id={index}
                        onChange={(e)=>{
                            setBody((body) => {
                              body[index].cells[idx].cellValue = e.target.value;
                              return [...body];
                            });
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
