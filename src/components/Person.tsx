import React, { FC } from "react";

interface Props {
  name: string;
  age: number;
  email: string;
}

export const Person: FC<Props> = ({ name, age, email }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
