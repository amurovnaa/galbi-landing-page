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
      className="flex justify-center items-center
      max-w-[161px] max-h-[62px]
      px-[34px] py-[10px]
      rounded-[16px]
      font-semibold text-[16px] text-center text-white
      bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
        hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
        transition duration-700 ease-in-out
        hover:from-[#ff4a7c] hover:to-[#a42fc2]
   "
    >
      Log out
    </button>
  );
};
export default UserMenu;
