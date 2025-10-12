import { useState } from "react";
import { FaMedal } from "react-icons/fa";
import Container from "../Container/Container.jsx";
import palestineFg from "../../assets/images/palestine-flag.webp";
import jordanFg from "../../assets/images/jordan-flag.webp";
import egyptFg from "../../assets/images/egypt-flag.webp";

const QUIZ_DATA = [
  {
    country: "Palestinian Pride",
    flagEmoji: "🇵🇸",
    badgeIcon: "/badges/palestine.webp",
    questions: [
      {
        q: "Which city is famous for its knafeh?",
        choices: ["Bethlehem", "Nablus", "Jericho", "Ramallah"],
        a: "Nablus",
      },
      {
        q: "Which spice blend is made with thyme, toasted sesame seeds, and sumac?",
        choices: ["Baharat", "Za'atar", "Dukkah", "Sumac"],
        a: "Za'atar",
      },
      {
        q: "“His onion is burnt!” means what?",
        choices: [
          "He’s broke",
          "He can’t cook",
          "He’s impatient or in a rush",
          "He smells bad",
        ],
        a: "He’s impatient or in a rush",
      },
    ],
  },
  {
    country: "Sudanese Soul",
    flagEmoji: "🇸🇩",
    badgeIcon: "/badges/sudan.webp",
    questions: [
      {
        q: "During 'Jertig' weddings, which color is worn to protect against the evil eye?",
        choices: ["Blue", "Red", "Yellow", "Green"],
        a: "Red",
      },
      {
        q: "At a traditional Sudanese wedding, the groom traditionally holds:",
        choices: [
          "Bouquet",
          "A sword and black beads",
          "Instrument",
          "Gift box",
        ],
        a: "A sword and black beads",
      },
      {
        q: "When invited to a Sudanese home for dinner, you’re most likely eating from:",
        choices: [
          "Individual plates",
          "A shared tray (Seniyya)",
          "Picnic basket",
          "Fancy dining table",
        ],
        a: "A shared tray (Seniyya)",
      },
    ],
  },
];

function getRandomCountry(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export default function CultureQuizTeaser() {
  const [country, setCountry] = useState(() => getRandomCountry(QUIZ_DATA));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, choice) => {
    setAnswers({ ...answers, [qIndex]: choice });
  };

  const handleSubmit = () => {
    let correct = 0;
    country.questions.forEach((q, i) => {
      if (answers[i] === q.a) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setCountry(getRandomCountry(QUIZ_DATA));
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 via-white to-pink-100 flex justify-center">
      <Container className="xl:px-[240px] flex flex-col items-center justify-center">
        <div className="text-center mb-[100px]">
          <h2 className="font-lucida font-semibold text-[50px] text-center text-black mb-6">
            Earn Your Heritage Badge
          </h2>
          <div className="flex gap-2 items-center justify-center mb-2">
            <p className="font-normal text-xl leading-normal text-center text-black opacity-90">
              Every culture has its own
            </p>
            <ul className="flex gap-1 items-center">
              <li className="w-5 h-5">
                <img
                  src={palestineFg}
                  className="w-full h-full"
                  alt="Palestine Flag"
                />
              </li>

              <li className="w-6 h-6">
                <img src={egyptFg} className="w-full h-full" alt="Egypt Flag" />
              </li>
              <li className="w-5 h-5">
                <img
                  src={jordanFg}
                  className="w-full h-full"
                  alt="Jordan Flag"
                />
              </li>
            </ul>
          </div>
          <span className="font-normal text-xl leading-normal text-center text-black opacity-90">
            Take the quiz, claim your badge.
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {country.questions.map((q, i) => (
            <div
              key={i}
              className="bg-white max-w-[453px] min-h-[269px] shadow-[0_1px_15px_0_rgba(0,0,0,0.05)] p-[30px] pr-[38px] rounded-[20px]
                         hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <p className="font-medium text-[20px] italic text-black mb-3 text-left">
                  {q.q}
                </p>
              </div>
              <ul className="space-y-2 flex-1">
                {q.choices.map((choice, ci) => {
                  const isCorrect = submitted && choice === q.a;
                  const isWrong =
                    submitted && answers[i] === choice && choice !== q.a;

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
                        className="accent-pink-500 cursor-pointer"
                      />
                      <span className="font-normal text-l leading-[1.4] text-black opacity-90 text-lef">
                        {choice}
                      </span>
                      {isCorrect && (
                        <span className="text-green-500 ml-auto">✅</span>
                      )}
                      {isWrong && (
                        <span className="text-red-500 ml-auto">❌</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-16">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < country.questions.length}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                Object.keys(answers).length < country.questions.length
                  ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-600 to-rose-500 text-white hover:shadow-lg"
              }`}
            >
              Submit Answers
            </button>
          ) : (
            <div className="text-center flex gap-8">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  You got {score} / {country.questions.length} correct!
                </p>
                <div className="text-pink-600 flex items-center gap-1 mb-4 justify-center">
                  <FaMedal />
                  {score >= 2 ? (
                    <span>You earned the {country.country} badge!</span>
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
      </Container>
    </section>
  );
}
