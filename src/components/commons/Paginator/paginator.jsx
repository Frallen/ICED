import React, { useState } from "react";
import classes from "./paginator.module.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export let Paginator = ({ TotalResults, currentPage, nextPage }) => {
  let pages = [];
  let pageSize = 20;
  let pagesCount = Math.ceil(TotalResults / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize = 5;

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.box}>
      <ul className={classes.ul}>
        {portionNumber > 1 && (
          <ArrowBackIosIcon
            className={classes.arrow}
            onClick={() => setPortionNumber(portionNumber - 1)}
          ></ArrowBackIosIcon>
        )}
        {pages
          .filter(
            p => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map(p => (
            <li
              key={p}
              onClick={() => nextPage(p)}
              className={
                classes.item + " " + (currentPage === p && classes.active)
              }
            >
              {p}
            </li>
          ))}

        {portionCount > portionNumber && (
          <ArrowForwardIosIcon
            className={classes.arrow}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          ></ArrowForwardIosIcon>
        )}
      </ul>
    </div>
  );
};
