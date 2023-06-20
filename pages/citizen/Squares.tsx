import React from "react";
import Image from "next/image";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image
    src={src}
    alt="Load"
    width={900}
    height={900}
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{
      width: "100%",
      height: "auto"
    }} />
);

export default LoadImage;
