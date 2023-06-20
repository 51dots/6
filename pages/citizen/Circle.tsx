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
      width={800}
      height={800}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
    />
  </div>
);

export default LoadImage;
