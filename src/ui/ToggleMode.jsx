import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

export default function ToggleMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  //console.log(isDarkMode);

  return isDarkMode ? (
    <Link onClick={toggleDarkMode}>
      <MdDarkMode className="text-[var(--color-text-primary)] w-6 h-6" />
    </Link>
  ) : (
    <Link onClick={toggleDarkMode}>
      <MdLightMode className="text-[var(--color-text-primary)] w-6 h-6" />
    </Link>
  );
}
