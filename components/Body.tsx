import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen bg-seeturtle-800 flex justify-center">
        <div className="max-w-7xl pr-16 pl-8 h-full w-full relative">
          {children}
        </div>
      </div>
    </>
  );
};
export default Body;
