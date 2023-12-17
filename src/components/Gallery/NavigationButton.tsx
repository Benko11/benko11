import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

interface NavigationButtonProps {
  side: "left" | "right";
  onClick: () => void;
}

export default function NavigationButton({
  side,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      className={`invisible group-hover:visible backdrop-blur-lg absolute bg-black/20 hover:bg-black/30 transition-all h-full px-2 text-white ${side}-0 px-2 backdrop-blur-lg invisible group-hover:visible rounded-${
        side === "left" ? "s" : "e"
      }-lg hover:bg-black/30`}
      onClick={onClick}
    >
      {side === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
