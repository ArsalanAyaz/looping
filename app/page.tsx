import React from "react";

export default function Home() {
  let names: string[] = ["ali", "ksdhi", "ali2", "sufi"];

  return (
    <div>
      {names.map((item, index) => {
        return (
          <h1>
            {item} {index}
          </h1>
        );
      })}
    </div>
  );
}
