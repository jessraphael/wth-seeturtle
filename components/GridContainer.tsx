import { FC } from "react";

const GridContainer: FC = ({ children }) => {
  return <div className="grid grid-cols-5 h-screen w-full">{children}</div>;
};
export default GridContainer;
