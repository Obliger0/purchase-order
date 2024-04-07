import React from "react";
import {
  createXlsxFileFromJson,
  convertXlsxToJson,
  createXlsxFileFromJsonFile,
} from "../utill/excel";
// import { apiData } from "../Data/apiData";

const ExcelFilePage = () => {
  const fileName = "test2";
  const xlsxFileName = "xl test file";
  return (
    <>
      <div>
        Create Excel file from JSON
        <button
          onClick={() =>
            createXlsxFileFromJson(fileName, [
              {
                name: "abc",
                age: 22,
              },
              {
                name: "xyz",
                age: 20,
              },
            ])
          }
        >
          Create Excel File
        </button>
      </div>
      <div>
        <span>Select Xlsx File And Convert To Json</span>
        <input
          type="file"
          onChange={async (e) =>
            console.log(await convertXlsxToJson(e.target.files[0]))
          }
        />
      </div>
      <div>
        <span>Convert Json To Xlsx</span>
        <input
          type="file"
          onChange={async (e) =>
            createXlsxFileFromJsonFile(xlsxFileName, e.target.files[0])
          }
        />
      </div>
    </>
  );
};

export default ExcelFilePage;
