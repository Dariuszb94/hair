import React from "react";

interface Props {
  name?: string;
  age?: number;
  email?: string;
}

export const Person = ({ name }: Props) => {
  return <div>{name}</div>;
};
