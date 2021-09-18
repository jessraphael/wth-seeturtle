import { FC } from "react";
import Image from "next/image";
import { BiHomeAlt, BiSliderAlt, BiVideo } from "react-icons/bi";

const Navbar: FC = () => {
  return (
    <>
      <div className="flex flex-col w-16 h-screen fixed justify-evenly items-center left-8 py-8">
        <Image
          src="/icon.png"
          alt="SeeTurtle icon"
          layout="fixed"
          height={36}
          width={36}
        />
        <BiHomeAlt className="text-white text-3xl cursor-pointer mt-2" />
        <BiVideo className="text-white text-3xl cursor-pointer mt-2" />
        <BiSliderAlt className="text-white text-3xl mt-auto cursor-pointer" />
      </div>
    </>
  );
};
export default Navbar;
