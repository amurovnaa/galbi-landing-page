import { useState } from "react";

const AuthNav = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  return (
    <div>
      <button
        className="flex justify-center items-center max-w-[161px] max-h-[62px] 
    px-[39px] py-[20px] 
    rounded-[16px] 
    border border-white 
    bg-white/20
    backdrop-blur-sm
    font-semibold text-lg text-center
    transition duration-300 ease-in-out
    hover:bg-white/30"
      >
        Join Now
      </button>
    </div>
  );
};
export default AuthNav;
