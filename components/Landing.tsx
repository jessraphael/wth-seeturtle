import { FC } from "react";

const Landing: FC = ({ children }) => {
  return (
    <div className="h-screen bg-green-200" id="landing">
      {children}
    </div>
  );
};
export default Landing;
