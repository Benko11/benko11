import { useState } from "react";

interface TooltipProps {
  children: React.JSXNode[];
  label: string;
}

export default function Tooltip({ children, label }: TooltipProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col items-center font-display"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <div
        className={`${
          show ? "block" : "hidden"
        } text-bluom-light bg-black text-sm p-2 rounded -mt-4`}
      >
        {label}
      </div>
    </div>
  );
}
