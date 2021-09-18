import { FC } from "react";

const LeftGrid: FC = ({ children }) => {
  return <div className="col-span-2 ml-8 mr-8">{children}</div>;
};
export default LeftGrid;
