import React, { FC, useState, ChangeEvent } from "react";

interface Props {
  name: string;
  age: number;
  email: string;
}

export const Person: FC<Props> = ({ name, age, email }: Props) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Your country" onChange={handleChange} />
      {country}
    </div>
  );
};
