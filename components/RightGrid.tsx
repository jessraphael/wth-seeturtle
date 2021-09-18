import { FC } from "react";

const RightGrid: FC = ({ children }) => {
  return <div className="col-span-3 w-full bg-red-200">{children}</div>;
};
export default RightGrid;
