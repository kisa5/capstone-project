import React from "react";
import { titles } from "lib/db.json";
import { v4 as uuidv4 } from "uuid";

export default function () {
  return (
    <>
      <ul>
        {titles.map((title) => (
          <li key={uuidv4()}>{title.title}</li>
        ))}
      </ul>
    </>
  );
}
