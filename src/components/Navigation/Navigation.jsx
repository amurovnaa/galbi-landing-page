import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const Navigation = ({ textColor }) => {
  return (
    <nav className="flex items-center">
      <ul
        className={`flex flex-col justify-center gap-8 items-center ${textColor} font-medium text-[16px] leading-[1.33] lg:flex-row`}
      >
        <li className="opacity-90 hover:opacity-100">
          <HashLink smooth to="/#features">
            Features
          </HashLink>
        </li>
        <li className="opacity-90 hover:opacity-100">
          <HashLink smooth to="/#vibe-check">
            Vibe Check
          </HashLink>
        </li>
        <li className="opacity-90 hover:opacity-100">
          <HashLink smooth to="/#impact">
            Impact
          </HashLink>
        </li>
        <li className="opacity-90 hover:opacity-100">
          <Link to="/story">Our Story</Link>
        </li>
        <li className="opacity-90 hover:opacity-100">
          <Link to="/privacy">Privacy & Terms</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
