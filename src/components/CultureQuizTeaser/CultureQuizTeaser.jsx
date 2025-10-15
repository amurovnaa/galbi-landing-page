import { useState } from "react";
import { FaMedal } from "react-icons/fa";
import { Listbox } from "@headlessui/react";
import Container from "../Container/Container.jsx";
import { ChevronDownIcon } from "lucide-react";

const QUIZ_DATA = [
  {
    country: "Palestine",
    questions: [
      {
        q: "Which city is famous for its knafeh?",
        choices: ["Bethlehem", "Nablus", "Jericho", "Ramallah"],
        answer: "Nablus",
      },
      {
        q: "Which spice blend is made with thyme, toasted sesame seeds, and sumac?",
        choices: ["Baharat", "Za'atar", "Dukkah", "Sumac"],
        answer: "Za'atar",
      },
      {
        q: "“His onion is burnt!” means what?",
        choices: [
          "He’s broke",
          "He can’t cook",
          "He’s impatient or in a rush",
          "He smells bad",
        ],
        answer: "He’s impatient or in a rush",
      },
    ],
  },
  {
    country: "Jordan",
    questions: [
      {
        q: "Which Jordanian city is known for its ancient ruins?",
        choices: ["Amman", "Petra", "Aqaba", "Irbid"],
        answer: "Petra",
      },
      {
        q: "What is the traditional Jordanian dish?",
        choices: ["Mansaf", "Kebab", "Shawarma", "Falafel"],
        answer: "Mansaf",
      },
    ],
  },
  {
    country: "Egypt",
    questions: [
      {
        q: "Which river is essential to Egyptian civilization?",
        choices: ["Nile", "Amazon", "Tigris", "Danube"],
        answer: "Nile",
      },
      {
        q: "What is the traditional Egyptian bread called?",
        choices: ["Baladi", "Pita", "Bagel", "Chapati"],
        answer: "Baladi",
      },
    ],
  },
];

export default function CultureQuizTeaser() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, choice) => {
    setAnswers({ ...answers, [qIndex]: choice });
  };

  const handleSubmit = () => {
    if (!selectedCountry) return;
    let correct = 0;
    selectedCountry.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-pink-50 via-white to-pink-100 flex justify-center text-black rtl"
      id="vibe-check"
    >
      <Container className="xl:px-[240px] flex flex-col items-center justify-center">
        <div className="text-center mb-[80px] flex flex-col items-center justify-center">
          <h2 className="font-lucida font-semibold text-[50px] text-black mb-6">
            Earn Your Heritage Badge
          </h2>
          <p className="text-xl text-black opacity-90 mb-6">
            Every culture has its rhythm. Take the quiz, claim your badge.
          </p>

          {!selectedCountry && (
            <div className="w-full max-w-[535px]">
              <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                <div className="relative">
                  <Listbox.Button
                    className="w-full bg-white rounded-lg p-4 
                      font-normal text-base text-opacity-50 border border-solid 
                      border-[rgba(255,255,255,0.3)] placeholder-white placeholder-opacity-60 focus:ring-1 focus:ring-pink-400 outline-none text-left flex justify-between items-center"
                  >
                    <span>
                      {selectedCountry?.country || "Select Your Country"}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-gray-900 text-white text-left rounded-lg shadow-lg z-10">
                    {QUIZ_DATA.map((c) => (
                      <Listbox.Option
                        key={c.country}
                        value={c}
                        className="cursor-pointer p-2 hover:bg-pink-500/30"
                      >
                        {c.country}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          )}
        </div>

        {/* Quiz Questions */}
        {selectedCountry && (
          <div className="grid gap-6 md:grid-cols-2">
            {selectedCountry.questions.map((q, i) => (
              <div
                key={i}
                className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
              >
                <p className="font-medium text-lg mb-3">{q.q}</p>
                <ul className="space-y-2">
                  {q.choices.map((choice, ci) => {
                    const isCorrect = submitted && choice === q.answer;
                    const isWrong =
                      submitted && answers[i] === choice && choice !== q.answer;

                    return (
                      <li
                        key={ci}
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer border transition-all
                          ${
                            isCorrect
                              ? "border-green-400 bg-green-50"
                              : isWrong
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                          }`}
                        onClick={() => !submitted && handleChange(i, choice)}
                      >
                        <input
                          type="checkbox"
                          checked={answers[i] === choice}
                          onChange={() => handleChange(i, choice)}
                          disabled={submitted}
                          className="accent-pink-500"
                        />
                        <span>{choice}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}

        {selectedCountry && (
          <div className="mt-12 flex flex-col items-center gap-6">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-600 to-rose-500 text-white hover:shadow-lg transition"
              >
                Submit Answers
              </button>
            ) : (
              <div className="text-center flex flex-col gap-8 md:flex-row">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    You got {score} / {selectedCountry.questions.length}{" "}
                    correct!
                  </p>
                  <div className="text-pink-600 flex items-center justify-center gap-2">
                    <FaMedal />
                    {score >= 1 ? (
                      <span>
                        You earned the {selectedCountry.country} badge!
                      </span>
                    ) : (
                      <span>Try again to earn your badge!</span>
                    )}
                  </div>
                </div>
                <button
                  className="
    w-[278px] h-16 flex items-center justify-center gap-[10px]
    font-inter font-semibold text-[19px] text-center text-white
    px-[34px] py-5 rounded-2xl
    bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
    shadow-none
    transition-[box-shadow,background-position,background-color] duration-700 ease-in-out
    hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
    hover:from-[#ff4a7c] hover:to-[#a42fc2]
  "
                >
                  <span className="">Try the Quiz</span>
                  <svg
                    className="inline-block w-6 h-6"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                  >
                    <use href="/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
