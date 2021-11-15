import React, { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";
interface IAppContext {
  name: string;
  age: number;
  country: string;
}
const AppContext = createContext<IAppContext | null>(null);
const App: FC = () => {
  const contextValue: IAppContext = {
    name: "Darek",
    age: 21,
    country: "Poland",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Darek"
          age={27}
          email="asdasd"
          hairColor={HairColor.Blonde}
        ></Person>
      </div>
    </AppContext.Provider>
  );
};

export default App;
