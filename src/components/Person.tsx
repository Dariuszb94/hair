import React, { FC, useState, ChangeEvent, useContext } from "react";
import { AppContext } from "../App";
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}
export enum HairColor {
  Blonde = "Your color is blonde",
  Brown = "Your color is brown",
  Pink = "Your color is pink",
}
export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  const name1 = useContext(AppContext);
  type NameType = "Darek" | "Radek";
  const nameForType: NameType = "Darek";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      {console.log(name1)}
      <h1>{name}</h1>
      <input type="text" placeholder="Your country" onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  );
};
