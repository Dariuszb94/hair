import React, { FC } from "react";
import "./App.css";
import { Person } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="Darek" age={27} email="asdasd"></Person>
    </div>
  );
};

export default App;
