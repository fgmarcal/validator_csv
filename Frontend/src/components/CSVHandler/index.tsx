"use client";
import React, { useState } from "react";
import Input from "../input"

const CSVHandler = () => {
  const [data, setData] = useState<string[][]>([]);

  const headers = data[0];
  const rows = data.slice(1);
  return (
    <div>
      <Input onChange={(_data) => setData(_data)} />
      <table>
        <thead>
          <tr>
            {headers?.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((rowData, i) => {
            return (
              <tr key={i}>
                {rowData?.map((data, i) => {
                  return <td key={i}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CSVHandler;
