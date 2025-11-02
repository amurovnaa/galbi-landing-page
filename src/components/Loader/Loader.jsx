import { ClipLoader } from "react-spinners";

const Loader = ({ loading = true, size = 50, color = "#e11d48" }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-[9999]">
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
