import * as React from "react";

const RightArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    width={24}
    height={24}
    {...props}
  >
    <path
      d="M506.134 241.843l-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104c7.833-7.818 7.808-20.522 0-28.314z"
      fill="currentColor"  
    />
  </svg>
);

export default RightArrow;
