interface NavigationButtonProps {
  side: "left" | "right";
  onClick: () => void;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function NavigationButton({
  side,
  onClick,
}: NavigationButtonProps) {
  return (
    <div
      className={`absolute flex items-center text-white bg-black/20 h-full ${
        side === "left" ? "left-" : "right-"
      }0 px-4 cursor-pointer backdrop-blur-lg invisible group-hover:visible rounded-${
        side === "left" ? "s" : "e"
      }-lg hover:bg-black/30 transition-all`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={side === "left" ? faChevronLeft : faChevronRight}
        className="w-4 cursor-pointer"
      />
    </div>
  );
}
