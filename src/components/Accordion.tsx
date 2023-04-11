import React, { FC } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Accordion;
