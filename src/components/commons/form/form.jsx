import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input
} from "@material-ui/core";
import classes from "./form.module.scss";
export const DateSelect = ({ input, meta, ...props }) => {
  var today = new Date();

  let todayYear = today.getFullYear();
  let date = [];
  //если сегоднешний год не равен 1900му то вычетаю из него по одному
  for (todayYear; todayYear !== 1900; todayYear--) {
    //когда текущий год равен 1900 то получаю все ответы и пушу их в массив
    date.push(todayYear);
  }

  return (
    <FormControl className={classes.control}>
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
      <Select
        {...input}
        {...props}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        {date.map((p, index) => (
          <MenuItem key={index} value={p}>
            {p}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const Sort = ({ input, meta, ...props }) => {
  let value = [
    { id: 1, text: "Popularity Descending", value: "popularity.desc" },
    { id: 2, text: "Popularity Ascending", value: "popularity.asc" },
    { id: 3, text: "Rating Descending", value: "vote_average.desc" },
    { id: 4, text: "Rating Ascending", value: "vote_average.asc" },
    { id: 5, text: "Release Date Descendin", value: "release_date.desc" },
    { id: 6, text: "Release Date Ascending ", value: "release_date.asc" },
    { id: 7, text: "Title (A-Z)", value: "original_title.desc" },
    { id: 8, text: "Title (Z-A)", value: "original_title.asc" }
  ];
  return (
    <FormControl className={classes.control}>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select {...input} {...props}>
        <MenuItem value={undefined}>None</MenuItem>
        {value.map(p => (
          <MenuItem key={p.id} value={p.value}>
            {p.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const Genres = ({ input, meta, ...props }) => {
  let value = [
    {
      id: 28,
      value: "Action"
    },
    {
      id: 12,
      value: "Adventure"
    },
    {
      id: 16,
      value: "Animation"
    },
    {
      id: 35,
      value: "Comedy"
    },
    {
      id: 80,
      value: "Crime"
    },
    {
      id: 99,
      value: "Documentary"
    },
    {
      id: 18,
      value: "Drama"
    },
    {
      id: 10751,
      value: "Family"
    },
    {
      id: 14,
      value: "Fantasy"
    },
    {
      id: 36,
      value: "History"
    },
    {
      id: 27,
      value: "Horror"
    },
    {
      id: 10402,
      value: "Music"
    },
    {
      id: 9648,
      value: "Mystery"
    },
    {
      id: 10749,
      value: "Romance"
    },
    {
      id: 878,
      value: "Science Fiction"
    },
    {
      id: 10770,
      value: "TV Movie"
    },
    {
      id: 53,
      value: "Thriller"
    },
    {
      id: 10752,
      value: "War"
    },
    {
      id: 37,
      value: "Western"
    }
  ];
  return (
    <FormControl className={classes.control}>
      <InputLabel id="demo-simple-select-label">Genres</InputLabel>
      <Select
        {...input}
        {...props}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
     
        <MenuItem value={undefined}>None</MenuItem>
        {value.map(p => (
          <MenuItem key={p.id} value={p.id}>
            {p.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const Search = ({ input, meta, ...props }) => {
  return (
    <FormControl className={classes.control}>
      <InputLabel htmlFor="component-simple">Search</InputLabel>
      <Input {...input} {...props} id="component-simple" />
    </FormControl>
  );
};
