import { motion } from "framer-motion";
import { Link } from "react-router";

const MarqueeTextSection = () => {
  const textItems = [
    "In a world full of endless swipes, Galbi slows things down",
    "Click to know more about our story 🩷",
    "It’s not about looks or trends — it’s about meaning",
    "Because real love should remember where it came from",
    "Find your story, not just another match",
  ];

  return (
    <Link to="/story">
      <section className="overflow-hidden py-6 bg-gradient-to-b from-pink-50 via-white to-pink-100">
        <motion.ul
          className="flex whitespace-nowrap text-black text-[15px] font-lufga italic"
          animate={{ x: [0, -window.innerWidth * 2] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <li key={i} className="flex items-center">
              {textItems.map((text, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="flex items-center gap-4">{text}</span>
                  <span className="w-1 h-1 rounded-full bg-[#480f57] inline-block mr-4"></span>
                </div>
              ))}
            </li>
          ))}
        </motion.ul>
      </section>
    </Link>
  );
};

export default MarqueeTextSection;
