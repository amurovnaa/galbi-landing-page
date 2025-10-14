const AuthNav = () => {
  return (
    <button>
      <a
        href="#sign-up"
        className="flex justify-center items-center max-w-[161px] max-h-[62px] 
        px-[29px] py-[20px] 
        rounded-[16px] 
        border border-white 
        bg-white/20
        backdrop-blur-sm
        font-semibold text-lg text-center
        transition duration-300 ease-in-out
        hover:bg-white/30 lg:px-[39px] lg:w-[161px]"
      >
        Join Now
      </a>
    </button>
  );
};
export default AuthNav;
