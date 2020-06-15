import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { pink, blue } from "@material-ui/core/colors";

const P10Button = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[300]),
    backgroundColor: pink[300],
    "&:hover": {
      backgroundColor: pink[400],
    },
  },
}))(Button);

const P1Button = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[100]),
    backgroundColor: pink[100],
    margin: 10,
    size: "large",
    "&:hover": {
      backgroundColor: pink[200],
    },
  },
}))(Button);

const M1Button = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[100]),
    backgroundColor: blue[100],
    "&:hover": {
      backgroundColor: blue[200],
    },
  },
}))(Button);

const M10Button = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[300],
    "&:hover": {
      backgroundColor: blue[400],
    },
  },
}))(Button);

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="counter">
      <h1 class="counter-tittle">Reactカウンター</h1>
      <div class="counter-value-wrap">
        現在のカウント
        <br />
        <span class="counter-value">{count}</span>
      </div>
      <P10Button
        variant="outlined"
        onClick={() => {
          setCount(count + 10);
        }}
      >
        +10
      </P10Button>
      <P1Button
        variant="outlined"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </P1Button>
      <M1Button
        variant="outlined"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </M1Button>
      <M10Button
        variant="outlined"
        onClick={() => {
          setCount(count - 10);
        }}
      >
        -10
      </M10Button>

      <IconButton
        aria-label="delete"
        class="reset"
        onClick={() => {
          setCount(0);
        }}
      >
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default App;
