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
      bg-gradient-to-r from-pink-600 to-rose-500
      shadow-sm shadow-rose-500/20
      transition duration-300 ease-in-out
      hover:shadow-md hover:shadow-rose-500/30
   "
    >
      Log out
    </button>
  );
};
export default UserMenu;
