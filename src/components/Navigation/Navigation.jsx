const Navigation = ({ textColor }) => {
  return (
    <nav className="flex items-center">
      <ul
        className={`flex flex-col justify-center gap-[8px] items-center ${textColor} font-medium text-[16px] leading-[1.33] lg:flex-row`}
      >
        <li className="px-4 opacity-90 hover:opacity-100">
          <a href="#features">Features</a>
        </li>
        <li className="px-4 opacity-90 hover:opacity-100">
          <a href="#vibe-check">Vibe Check</a>
        </li>
        <li className="px-4 opacity-90 hover:opacity-100">
          <a href="#impact">Impact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
