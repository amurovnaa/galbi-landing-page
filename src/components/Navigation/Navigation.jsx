const Navigation = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col justify-center gap-[10px] text-white font-medium text-lg leading-[1.33] lg:flex-row">
        <li className="px-6 py-3">
          <a href="#features">Features</a>
        </li>
        <li className="px-6 py-3">
          <a href="#vibe-check">Vibe Check</a>
        </li>
        <li className="px-6 py-3">
          <a href="#impact">Impact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
