import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations.js";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => console.log("Logout successful"))
      .catch((err) => console.log("Logout failed:", err));
  };

  return (
    <button
      onClick={handleLogout}
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
      Log out
    </button>
  );
};
export default UserMenu;
