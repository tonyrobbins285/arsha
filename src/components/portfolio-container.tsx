"use client";

import { portfolioData } from "@/assets/data";
import { cn } from "@/lib/utils";
import { useFullpageImageStore } from "@/store";
import { Link, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef } from "react";

export default function PortfolioContainer({ category }: { category: string }) {
  const data = useMemo(
    () =>
      portfolioData.filter((element) => {
        if (category === "All") {
          return true;
        } else {
          return element.category === category;
        }
      }),
    [category],
  );

  const imageRefs = useRef<HTMLImageElement[] | null>([]);
  const { setData, open } = useFullpageImageStore();

  const imageClickHandler = () => {
    open();
    setData(data);
  };

  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
      {data.map((el) => (
        <div className="flex flex-col gap-3" key={el.src}>
          <div className="flex-1">
            <Image
              onClick={imageClickHandler}
              ref={(el) => {
                if (el) imageRefs?.current?.push(el);
              }}
              alt="img"
              src={el.src}
              className="aspect-square w-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="mr-5 flex items-center justify-between">
            <p className="text-nowrap">
              <b>Category: </b>
              {el.category}
            </p>
            <div className="flex gap-3">
              <Link className="cursor-pointer transition hover:scale-105" />
              <ZoomIn className="cursor-pointer transition hover:scale-105" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
