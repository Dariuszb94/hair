import React, { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";
const AppContext = createContext(null);
const App: FC = () => {
  return (
    <div className="App">
      <Person
        name="Darek"
        age={27}
        email="asdasd"
        hairColor={HairColor.Blonde}
      ></Person>
    </div>
  );
};

export default App;
