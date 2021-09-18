import { FC } from "react";
import Image from "next/image";

const TurtleFeed: FC = () => {
  return (
    <div className="aspect-w-16 aspect-h-9 w-full">
      <Image src="/turtlefeed.png" alt="Turtle feed" layout="fill" />
    </div>
  );
};
export default TurtleFeed;
