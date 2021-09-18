import { FC } from "react";

const Navbar: FC = ({ children }) => {
  return (
    <>
      <div className="h-16 w-full flex justify-end items-center" id="navbar">
        {children}
      </div>
      ;
    </>
  );
};
export default Navbar;
