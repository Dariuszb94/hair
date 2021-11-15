import React, { FC } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person
        name="Darek"
        age={27}
        email="asdasd"
        hairColor={HairColor.Blonde}
      ></Person>
      {console.log(HairColor.Blonde)}
    </div>
  );
};

export default App;
