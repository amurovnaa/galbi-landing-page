import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-semibold text-pink-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-pink-900 mb-2">
        Page Not Found
      </h2>
      <p className="text-black mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="max-w-[358px] max-h-16 flex items-center justify-center gap-[10px]
              font-semibold text-[14px] text-center text-white
              px-7 py-3 rounded-full tracking-wide
              bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
              hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
              hover:from-[#ff4a7c] hover:to-[#a42fc2] lg:text-[16px]
             "
      >
        Go to Homepage
      </Link>
    </main>
  );
};

export default NotFoundPage;
