import React from "react";

export default function array() {
  let names: string[] = ["ali", "ksdhi", "ali2", "sufi"];

  return (
    <div>
      {names.map((item, index) => {
        return (
          <h1>
            {item[0]} 
          </h1>
        );
      })}
    </div>
  );
}




export function object() {
  let students: { name: string; age: number; class: string }[] = [
    {
      name: 'ali44',
      age: 23,
      class: "4th"
    },
    {
      name: 'imran444',
      age: 24,
      class: "4th"
    },
    {
      name: 'adil444',
      age: 25,
      class: "4th"
    }
  ];

  return (
    <div>
      {students.map((item, index) => {
        return (
          <h1 key={index}> {item.name[0]} </h1>
        );
      })}
    </div>
  );
}

