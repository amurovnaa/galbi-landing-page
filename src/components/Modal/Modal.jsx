import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ isOpen, onClose, message }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-[90%] max-w-md relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-400">
              <IoMdClose size={24} />
            </button>
          </div>

          <h3 className="text-xl font-lucida font-semibold mb-3 text-center bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            Thank you!
          </h3>
          <p className="text-center text-gray-700 leading-relaxed">{message}</p>
          <div className="flex justify-center mt-6"></div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
