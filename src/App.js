
import classes from './App.module.scss';
import React from "react";

function App() {
  return (
    <div className={classes.items}>
      <div className={classes.item}>1</div>
      <div className={classes.item}>2</div>
      <div className={classes.item}>3</div>
      <div className={classes.item}>4</div>
      <div className={classes.item}>5</div>
    </div>
  );
}

export default App;
