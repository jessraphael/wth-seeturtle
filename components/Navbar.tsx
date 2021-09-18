import { FC } from "react";
import Image from "next/image";
import { BiHomeAlt, BiSliderAlt } from "react-icons/bi";

const Navbar: FC = () => {
  return (
    <div className="flex flex-col w-16 h-full absolute justify-evenly items-center left-0 py-8">
      <Image
        src="/icon.png"
        alt="SeeTurtle icon"
        layout="fixed"
        height={36}
        width={36}
      />
      <BiHomeAlt className="text-white text-3xl" />
      <BiSliderAlt className="text-white text-3xl mt-auto" />
    </div>
  );
};
export default Navbar;
