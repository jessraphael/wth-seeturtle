import { FC } from "react";
import Image from "next/image";
import { BiPlay, BiFullscreen } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";

type Props = {
  embedId?: string;
};

const TurtleFeed: FC<Props> = ({ embedId }) => {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9 w-full video-border relative">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Turtle Live Feed"
          className="rounded-xl rounded-b-lg"
        />
        <div className="absolute w-full h-8 items-center top-[368px] flex">
          <BiPlay className="text-white text-3xl cursor-pointer mr-2" />
          <BsFillVolumeUpFill className="text-white text-3xl cursor-pointer" />
          <FaCog className="text-white text-2xl cursor-pointer ml-auto" />
          <BiFullscreen className="text-white text-3xl cursor-pointer ml-2" />
        </div>
      </div>
    </>
  );
};
export default TurtleFeed;
