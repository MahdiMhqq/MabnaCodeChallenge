import Link from "next/link";
import React from "react";

interface BreadCrumbInterface {
  prev: {
    title: string;
    link: string;
  };
  curr: {
    title: string;
  };
  customClass?: string;
}

function BreadCrumb({ prev, curr, customClass }: BreadCrumbInterface) {
  return (
    <div className={`flex items-center gap-x-2 ${customClass ?? ""}`}>
      <Link passHref href={prev.link}>
        <a className="text-info hover:text-linfo font-semibold transition duration-300 ">
          {prev.title}
        </a>
      </Link>
      <span>/</span>
      <span className="text-info">{curr.title}</span>
    </div>
  );
}

export default BreadCrumb;
