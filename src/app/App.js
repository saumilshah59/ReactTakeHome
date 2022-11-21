import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
      color: "rgb(38, 38, 38)"   
  }
}));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter classes={classes.root}>
      <Provider store={configureStore()}>
        <Home></Home>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
