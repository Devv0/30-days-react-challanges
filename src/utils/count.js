import React from "react";
import { Button } from "./Button";
import { buttonStyles } from "../styles/button";

export const Count = ({ count, addOne, minusOne }) => (
    <div>
      <h1>{count}</h1>
      <div>
        <Button text='Add One' onClick={addOne} style={buttonStyles} />
        <Button text='Minus One' onClick={minusOne} style={buttonStyles} />
      </div>
    </div>
  )