import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import One from "./Components/One";

function App() {
  return (
    <div className="App">
      <h1>Interview App</h1>
      <Nav />
      <Switch>
        <Route path="/one" component={One} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={() => <>404 Not Found</>} />
      </Switch>
    </div>
  );
}

export default App;
