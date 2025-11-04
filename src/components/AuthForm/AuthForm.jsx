import { useForm, Controller } from "react-hook-form";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx";
import Loader from "../Loader/Loader.jsx";

// --- Validation Schema ---
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password required"),
  country: yup.string().required("Country is required"),
  dialect: yup.string().required("Dialect or heritage is required"),
  gender: yup.string().required("Select your gender"),
  thoughts: yup.string().max(300, "Max 300 characters"),
});

const countries = [
  "Palestine",
  "Sudan",
  "Pakistan",
  "Lebanon",
  "Jordan",
  "Syria",
  "Egypt",
  "Morocco",
  "Algeria",
  "Tunisia",
  "Saudi Arabia",
  "United Arab Emirates",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Iraq",
  "Somalia",
  "Bangladesh",
  "India",
  "Turkey",
  "Albania / Kosovo",
  "Diaspora – 3rd Culture",
];

const genders = ["Male", "Female", "Prefer not to say"];
const causes = ["Palestine", "Sudan", "Yemen", "Ukraine", "Congo"];

export default function AuthForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRefreshing);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      country: "",
      dialect: "",
      gender: "",
      thoughts: "",
      howDidYouHear: "",
      brands: [],
      cause: causes[0],
      collabNote: "",
      wantAmbassador: false,
      wantCollaborate: false,
    },
  });

  const wantCollaborate = watch("wantCollaborate");

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    console.log("IsLoads:", isLoading);
    const payload = {
      email: data.email,
      password: data.password,
      displayName: data.name,
      country: data.country,
      dialect: data.dialect,
      gender: data.gender.toLowerCase(),
      // brands: data.brands?.map((b) => b.toLowerCase()) || [],
      cause: data.cause,
      thoughts: data.thoughts || "",
      howDidYouHear: data.howDidYouHear?.toLowerCase() || "",
      intent: data.intent?.toLowerCase() || "",
      wantAmbassador: !!data.wantAmbassador,
      wantCollaborate: !!data.wantCollaborate,
      collabNote: data.wantCollaborate ? data.collabNote || "" : "",
    };
    dispatch(registerUser(payload))
      .unwrap()
      .then(() => {
        toast.success("You’re in! We’ll email you when your city opens.");
        reset();
        if (data.wantAmbassador || data.wantCollaborate) {
          setModalMessage(
            "We love that you want to help build Galbi. We’ll reach out soon 🩷"
          );
          setModalOpen(true);
        }
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[1200px] w-full mx-auto  p-[50px]
    rounded-[30px] backdrop-blur-[50px]
    bg-[linear-gradient(135deg,rgba(196,196,196,0.12)_0%,rgba(196,196,196,0.12)_100%)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[30px]">
          <div className="max-h-[81px]">
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter Your Name"
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
            <p className="text-red-400 text-sm">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Enter Your Email"
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
            <p className="text-red-400 text-sm">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
            <p className="text-red-400 text-sm">{errors.password?.message}</p>
          </div>

          {/* Country */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Country
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Listbox value={field.value} onChange={field.onChange}>
                  <div className="relative">
                    <Listbox.Button
                      className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] text-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] placeholder-white placeholder-font-inter placeholder-opacity-60 focus:ring-1 focus:ring-pink-400 outline-none text-left flex justify-between items-center"
                    >
                      <span>{field.value || "Select Your Country"}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-gray-900 rounded-lg shadow-lg z-10">
                      {countries.map((c) => (
                        <Listbox.Option
                          key={c}
                          value={c}
                          className="cursor-pointer p-2 hover:bg-pink-500/30"
                        >
                          {c}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              )}
            />
            <p className="text-red-400 text-sm">{errors.country?.message}</p>
          </div>

          {/* Dialect */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Dialect or Heritage
            </label>
            <input
              {...register("dialect")}
              placeholder="Enter Dialect or Heritage"
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
            <p className="text-red-400 text-sm">{errors.dialect?.message}</p>
          </div>

          {/* Intent (optional) */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Intent (optional)
            </label>
            <input
              {...register("intent")}
              placeholder="Why are you joining Galbi?"
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="font-normal text-base leading-[1.4] block mb-2">
              Gender Identity
            </label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Listbox value={field.value} onChange={field.onChange}>
                  <div className="relative">
                    <Listbox.Button
                      className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] text-opacity-50 border border-solid 
            border-[rgba(255,255,255,0.3)] placeholder-white placeholder-font-inter placeholder-opacity-60 focus:ring-1 focus:ring-pink-400 outline-none text-left flex justify-between items-center"
                    >
                      <span>{field.value || "Select Your Gender"}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-gray-900 rounded-lg shadow-lg z-10">
                      {genders.map((g) => (
                        <Listbox.Option
                          key={g}
                          value={g}
                          className="cursor-pointer p-2 hover:bg-pink-500/30"
                        >
                          {g}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              )}
            />
            <p className="text-red-400 text-sm">{errors.gender?.message}</p>
          </div>

          {/* How did you hear */}
          <div className="">
            <label className="font-normal text-base leading-[1.4] block mb-2">
              How did you hear about Galbi?
            </label>
            <input
              {...register("howDidYouHear")}
              placeholder="Instagram, friends, event..."
              className="w-full max-w-[535px] bg-white/10 rounded-lg p-3 
            font-normal text-[14px] placeholder-white placeholder-font-inter placeholder-opacity-60 border border-solid 
            border-[rgba(255,255,255,0.3)] focus:ring-1 focus:ring-pink-400 outline-none"
            />
          </div>
        </div>

        {/* Thoughts */}
        <div className="mb-[30px]">
          <label className="block mb-[2px] font-normal text-base leading-[1.4]">
            What is Galbi to you?
          </label>
          <span className="block mb-4 font-normal text-[14px] leading-[1.4] opacity-[0.8]">
            What features or values would you love to see on Galbi?
          </span>
          <textarea
            {...register("thoughts")}
            placeholder="Share Your Thoughts..."
            className="text-[14px] w-full bg-white/10 border border-white/20 border max-w-[1100px] min-h-[109px] p-3 rounded-lg 
          border-solid border-[rgba(255,255,255,0.3)] placeholder-opacity-60 placeholder-white focus:ring-1 focus:ring-pink-400 outline-none min-h-[66px]"
          />
          <p className="text-red-400 text-sm">{errors.thoughts?.message}</p>
        </div>

        {/* Brand involvement checkboxes */}
        {/* <div className="mb-[30px]">
        <p className="font-roboto font-medium text-lg leading-[1.44] mb-3">
          Optional Brand Involvement:
        </p>
        <div className="flex flex-col gap-2">
          {[
            "I’d like to be featured in future campaigns",
            "I’m open to being a Galbi ambassador",
            "I want to co-create with the team",
            "Not right now",
          ].map((label) => (
            <label
              key={label}
              className="font-roboto flex items-center gap-3 text-[15px] leading-[1.47] tracking-[0.02em] opacity-80"
            >
              <input
                type="checkbox"
                className="accent-pink-500"
                value={label}
                {...register("brands")}
              />
              {label}
            </label>
          ))}
        </div>
      </div> */}

        {/* Brand involvement checkboxes */}
        <div className="mb-[30px]">
          <p className="font-roboto font-normal text-[16px] leading-[1.44] mb-3">
            Optional Brand Involvement:
          </p>

          <div className="flex flex-col gap-2">
            {/* Ambassador */}
            <label className="font-roboto flex items-center gap-3 text-[15px] leading-[1.47] tracking-[0.02em] opacity-80">
              <input
                type="checkbox"
                className="accent-pink-500"
                {...register("wantAmbassador")}
              />
              I’d like to be a Galbi Ambassador
            </label>

            {/* Collaborate */}
            <label className="font-roboto flex items-center gap-3 text-[15px] leading-[1.47] tracking-[0.02em] opacity-80">
              <input
                type="checkbox"
                className="accent-pink-500"
                {...register("wantCollaborate")}
              />
              I’d like to collaborate or work with Galbi
            </label>

            {/* Show input if checked */}
            {wantCollaborate && (
              <textarea
                {...register("collabNote")}
                placeholder="Tell us briefly how you'd like to collaborate..."
                className="w-full bg-white/10 border border-white/20 border max-w-[1100px] text-[14px] min-h-[51px] p-3 rounded-lg 
          border-solid border-[rgba(255,255,255,0.3)] placeholder-opacity-60 placeholder-white focus:ring-1 focus:ring-pink-400 outline-none min-h-[100px]"
              />
            )}
          </div>
        </div>

        {/* Causes */}
        <div className="mb-[60px]">
          <label className="block mb-[2px] font-normal text-base leading-[1.4]">
            Causes You Care About
          </label>
          <span className="text-[14px] leading-[1.4] opacity-80 block mb-2">
            show one or two example causes in the dropdown (e.g. Palestine,
            Sudan, Yemen).
          </span>
          <Controller
            name="cause"
            control={control}
            render={({ field }) => (
              <Listbox value={field.value} onChange={field.onChange}>
                <div className="relative">
                  <Listbox.Button className="w-full min-h-[51px] placeholder-white placeholder-font-inter placeholder-opacity-60 text-[14px] bg-white/10 border border-white/20 rounded-lg p-3 text-left flex justify-between items-center">
                    <span className="font-normal">{field.value}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Listbox.Button>
                  <Listbox.Options className=" absolute mt-2 w-full max-h-60 overflow-y-auto bg-gray-900 rounded-lg shadow-lg z-10">
                    {causes.map((cause) => (
                      <Listbox.Option
                        key={cause}
                        value={cause}
                        className="cursor-pointer p-2 hover:bg-pink-500/30"
                      >
                        {cause}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            )}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="
max-w-[358px] max-h-14 flex items-center justify-center gap-[10px]
        font-inter font-semibold text-[14px] text-center text-white
        px-7 py-3 rounded-[16px]
        bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
        hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
        transition duration-700 ease-in-out
        hover:from-[#ff4a7c] hover:to-[#a42fc2] lg:text-[16px]
  "
          >
            {isLoading ? (
              <span className="">Saving...</span>
            ) : (
              <div className="flex items-center justify-center gap-[10px]">
                <span className="">Sign Up</span>
                <svg
                  className="inline-block w-4 h-4"
                  strokeWidth="2"
                  stroke="#fff"
                  fill="none"
                >
                  <use href="/sprite.svg#icon-arrow-right"></use>
                </svg>
              </div>
            )}
          </button>
        </div>
      </form>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </>
  );
}
