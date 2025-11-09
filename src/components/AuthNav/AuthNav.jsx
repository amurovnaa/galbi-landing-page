import { HashLink } from "react-router-hash-link";

const AuthNav = () => {
  return (
    <HashLink
      smooth
      to="/#sign-up"
      className="flex justify-center items-center
      max-w-[161px] max-h-[62px]
      px-[34px] py-[10px]
     rounded-full tracking-wide
      font-semibold text-[16px] text-center text-white
      bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
        hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
        transition duration-700 ease-in-out
        hover:from-[#ff4a7c] hover:to-[#a42fc2]
     "
    >
      Join Now
    </HashLink>
  );
};

export default AuthNav;
