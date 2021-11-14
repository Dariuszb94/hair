import React, { FC, useState } from "react";

interface Props {
  name: string;
  age: number;
  email: string;
}

export const Person: FC<Props> = ({ name, age, email }: Props) => {
  const [country, setCountry] = useState<string | null>("");
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Your country"
        onChange={(e) => setCountry(e.target.value)}
      />
      {country}
    </div>
  );
};
