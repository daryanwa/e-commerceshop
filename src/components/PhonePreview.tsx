"use client";

import { CaseColor } from "@prisma/client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useRef, useState } from "react";

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimension, setRenderedDimension] = useState({
    height: 0,
    width: 0,
  });
  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimension.width / 2 -
            renderedDimension.width / (1216 / 121),
          top: renderedDimension.height / 6.22,
        }}>
        <img
          src={croppedImageUrl}
          width={renderedDimension.width / (3000 / 637)}
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
