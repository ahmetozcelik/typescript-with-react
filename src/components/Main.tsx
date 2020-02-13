import React from "react";
import { Component } from "react";

const Main = ({ books }) => {
  return (
    <div>
      <h1>Books List</h1>
      {books.map(book => (
        <div>{book.title}</div>
      ))}
    </div>
  );
};

export default Main;
