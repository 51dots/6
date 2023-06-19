import React from "react";
import Image from "next/image";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <div style={{ borderRadius: "50%", overflow: "hidden" }}>
    <Image
      src={src}
      alt="Load"
      layout="responsive"
      width={200}
      height={200}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

export default LoadImage;
