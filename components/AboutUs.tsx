import { FC } from "react";
import GridContainer from "../components/GridContainer";
import AboutUsLeftGrid from "../components/aboutusGrids/AboutUsLeftGrid";
import AboutUsRightGrid from "../components/aboutusGrids/AboutUsRightGrid";

const AboutUs: FC = ({ children }) => {
  return (
    <div className="h-screen w-full">
      {children}
      
      <GridContainer>
        <AboutUsLeftGrid>
        </AboutUsLeftGrid>
        <AboutUsRightGrid></AboutUsRightGrid>
      </GridContainer>
    </div>
  );
};
export default AboutUs;
