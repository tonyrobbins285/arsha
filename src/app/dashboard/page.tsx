import { buttonVariants } from "@/components/ui/button";
import React from "react";

export default function page() {
  console.log(3);
  return (
    <div className={buttonVariants({ variant: "ghost", className: "px-10" })}>
      page
    </div>
  );
}
