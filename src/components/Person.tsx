import React, { FC, useState, ChangeEvent } from "react";

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
  type NameType = "Darek" | "Radek";
  const nameForType: NameType = "Darek";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Your country" onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  );
};
