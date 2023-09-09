"use client";
import React, { useState } from "react";
import Input from "../input";
import { Products } from "../../repositories/productsRepository";

const products = new Products();

const CSVHandler = () => {
  const [data, setData] = useState<string[][]>([]);


  
  
  
  const validatePrice = (sellingPrice:string, costPrice:string, newPrice: string)=>{
    const refactoredSelling = Number(sellingPrice);
    const refactoredCost = Number(costPrice);
    const refactoredNewPrice = Number(newPrice)
    return refactoredNewPrice > refactoredSelling && (refactoredSelling / refactoredCost > 1.1 || refactoredSelling / refactoredCost < 0.9) ?
    true : false 
  }
  
  
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
                  const productCode = products.getOne(rowData[0]);
                  
                  console.log(JSON.stringify(rowData));
                  console.log(productCode);

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
