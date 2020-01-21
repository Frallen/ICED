import React, { useState } from "react";
import classes from "./paginator.module.scss";

export let Paginator = ({ TotalPages, currentPage, nextPage }) => {
  let pages = [];
  for (let i = 1; i <= TotalPages; i++) {
    pages.push(i);
  }
  let portionSize = 10;

  let portionCount = Math.ceil(TotalPages / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div className={classes.box}>
      <ul className={classes.ul}>
        {portionNumber >
          1 && (
            <button onClick={() => setPortionNumber(portionNumber - 1)}>
              Prev
            </button>
          )
        }
        {pages
          .filter(
            p => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map(p => (
            <li key={p} onClick={() => nextPage(p)} className={classes.item}>
              {p}
            </li>
          ))}

        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </ul>
    </div>
  );
};
