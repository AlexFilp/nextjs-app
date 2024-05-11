"use client";

import React, { useState } from "react";

const data = [
  {
    column1: "Chanel",
    column2: "Clothes",
    additionalInfo: "Дополнительная информация 1",
  },
  {
    column1: "D&G",
    column2: "Parfumes",
    additionalInfo: "Дополнительная информация 2",
  },
];

interface RowData {
  column1: string;
  column2: string;
  additionalInfo: string;
}
const AdditionalInfo: React.FC<{ rowData: RowData; expanded: boolean }> = ({
  rowData,
  expanded,
}) => {
  return (
    <div
      className={`bg-slate-400 p-[10px] ${
        expanded ? "max-h-0" : "max-h-[1000px]"
      } overflow-hidden transition-[max-height] duration-300`}
    >
      <p>{rowData.additionalInfo}</p>
    </div>
  );
};

export default function HomePage() {
  const [expandedRow, setExpandedRow] = useState<RowData | null>(null);
  const handleRowClick = (rowData: RowData) => {
    // Если кликнули на уже раскрытый ряд, закрываем его
    setExpandedRow((prevRow) => (prevRow === rowData ? null : rowData));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => handleRowClick(rowData)}>
                <td>{rowData.column1}</td>
                <td>{rowData.column2}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <AdditionalInfo
                    rowData={rowData}
                    expanded={expandedRow === rowData}
                  />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
