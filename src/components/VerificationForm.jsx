import { useState } from "react";
import { submitBirthdayForm } from "../services/formspree";

const questions = [
  {
    id: "q1",
    number: "01",
    type: "text",
    label:
      "Whyyyy didn't you wish me yesterday? You know na, I'm just 1 day younger to you! 😂",
    placeholder:
      "whyyyyyyyyyyyyyyyyyyyyyyyyyy😾",
  },

  {
    id: "q2",
    number: "02",
    type: "options",
    label:
      "When will I finally get that photo with you that you promised to give me once I passed the 10th grade?",
    options: [
      "Very soon 📸",
      "This year for sure",
      "When the right moment comes 😎",
      "You still remember that? 😂",
    ],
    otherPlaceholder: "When will we take that photo?",
  },

  {
    id: "q3",
    number: "03",
    type: "options",
    label: "When can we have some tea again?",
    options: [
      "Very soon 🎬",
      "Whenever we're both free",
      "I do not wanna have tea with youhh 😂",
      "Whenever you plan it 😂",
    ],
    otherPlaceholder: "Tell me when...",
  },

  {
    id: "q4",
    number: "04",
    type: "options",
    label:
      "When can we have some good food together at a restaurant of your choice?",
    options: [
      "Very soon 🍽️",
      "Whenever you're free",
      "I'll choose the restaurant 😋",
      "That's definitely happening soon",
    ],
    otherPlaceholder: "Tell me your plan...",
  },

  {
    id: "q5",
    number: "05",
    type: "options",
    label:
      "So... why haven't you given me a birthday party on your birthday till now? 😂",
    options: [
      "I was waiting for you to ask 😂",
      "Don't worry, your party is coming 🍕",
      "I completely forgot 😭",
      "Okay okay, I owe you one 🤦‍♂️",
    ],
    otherPlaceholder: "Give your own answer...",
  },

  {
    id: "q6",
    number: "06",
    type: "options",
    label:
      "When will you randomly ask me if I like pizza and order one for us? 🍕",
    options: [
      "Very soon 🍕",
      "When you're least expecting it 😎",
      "That's actually a great idea 😂",
      "Consider it a future plan 🗓️",
    ],
    otherPlaceholder: "Tell me when...",
  },

  {
    id: "q7",
    number: "07",
    type: "text",
    label: "Any message for me? ❤️",
    placeholder: "Waiting to see what comes here 😂",
  },
];

function VerificationForm({ onSuccess, onBack }) {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  const [otherSelected, setOtherSelected] = useState({
    q1: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleOptionChange = (questionId, option) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: option,
    }));

    setOtherSelected((previous) => ({
      ...previous,
      [questionId]: false,
    }));
  };

  const handleOtherClick = (questionId) => {
    setOtherSelected((previous) => ({
      ...previous,
      [questionId]: true,
    }));

    setAnswers((previous) => ({
      ...previous,
      [questionId]: "",
    }));
  };

  const handleTextChange = (questionId, value) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const incompleteQuestion = questions.find(
      (question) => !answers[question.id].trim()
    );

    if (incompleteQuestion) {
      setError(
        `Please answer Question ${incompleteQuestion.number} before continuing.`
      );
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await submitBirthdayForm(answers);
      onSuccess();
    } catch (err) {
      setError(
        "Something went wrong while submitting. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff9f2] px-5 py-8 sm:px-8">

      {/* Background decorations */}

      <div className="pointer-events-none absolute left-[8%] top-[15%] text-2xl text-[#d99178]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[12%] text-xl text-[#d6a84f]">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[12%] text-xl text-[#d6a84f]">
        •
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[8%] text-2xl text-[#e7a48b]">
        ✦
      </div>

      {/* Back button */}

      <button
        type="button"
        onClick={onBack}
        className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-[#eadbd1] bg-white/80 px-4 py-2 text-xs font-semibold text-[#806c61] shadow-sm backdrop-blur transition hover:-translate-x-0.5 hover:bg-white sm:left-8 sm:top-8"
      >
        ← Back
      </button>

      <section className="relative mx-auto w-full max-w-6xl">

        {/* Top service bar */}

        <div className="mb-3 flex items-center justify-between px-3 text-[9px] font-bold tracking-[0.2em] text-[#a58d7d] sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d99178]" />
            BIRTHDAY SERVICES
          </span>

          <span>VERIFICATION</span>
        </div>

        {/* MAIN CARD */}

        <div className="grid overflow-hidden rounded-[2rem] border border-[#eadbcd] bg-white shadow-[0_20px_60px_rgba(91,62,45,0.12)] md:h-[calc(100vh-120px)] md:max-h-[780px] md:min-h-[650px] md:grid-cols-[0.7fr_1.6fr]">

          {/* LEFT SIDE — FIXED */}

          <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#f9e8dc] p-8 md:h-full md:min-h-0">

            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#edbba7]/30" />

            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e7c77e]/25" />

            <div className="relative text-center">

              <div className="mb-5 text-6xl sm:text-7xl">
                🔐
              </div>

              <p className="text-[9px] font-bold tracking-[0.3em] text-[#a36f5d]">
                ACCESS VERIFICATION
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-[#795b4d]">
                A few extremely
                <br />
                important questions
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#8d6858] shadow-sm">
                🎂 RICKY&apos;S BIRTHDAY
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex min-h-0 flex-col">

            {/* FIXED HEADER */}

            <div className="shrink-0 border-b border-[#eee2d8] bg-white px-7 pb-5 pt-7 sm:px-10 sm:pt-10 md:px-12">

              <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#c27b65]">
                BIRTHDAY BENEFIT VERIFICATION
              </p>

              <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#3f3029] sm:text-4xl md:text-5xl">
                Before we
                <br />

                <span className="text-[#c77962]">
                  proceed...
                </span>{" "}
                🤨
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#8b7569]">
                To verify that you are actually Ricky Kumar,
                please answer these highly confidential questions.
              </p>

            </div>

            {/* SCROLLABLE QUESTIONS + SUBMIT */}

            <div
              className="min-h-0 flex-1 overflow-y-auto px-7 py-6 sm:px-10 md:px-12"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d9b8aa transparent",
              }}
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-7 pb-4"
              >

                {questions.map((question) => (
                  <Question
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[question.id]}
                    isOtherSelected={
                      otherSelected[question.id] || false
                    }
                    onOptionChange={(option) =>
                      handleOptionChange(question.id, option)
                    }
                    onOtherClick={() =>
                      handleOtherClick(question.id)
                    }
                    onTextChange={(value) =>
                      handleTextChange(question.id, value)
                    }
                  />
                ))}

                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600">
                    ⚠️ {error}
                  </div>
                )}

                {/* SUBMIT — LAST */}

                <div className="border-t border-[#eee2d8] pt-6">

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#c77962] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#c77962]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b96d57] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "VERIFYING..."
                      : "SUBMIT & ACCESS BIRTHDAY BENEFITS"}

                    {!submitting && (
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                  <p className="mt-3 text-center text-[9px] text-[#b3a096]">
                    Responses will be delivered to the Birthday Department™
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

        <p className="mt-4 text-center text-[9px] tracking-wide text-[#b5a197]">
          Authorized access for Ricky Kumar only.
        </p>

      </section>
    </div>
  );
}

function Question({
  question,
  selectedAnswer,
  isOtherSelected,
  onOptionChange,
  onOtherClick,
  onTextChange,
}) {
  const {
    number,
    type,
    label,
    options,
    placeholder,
    otherPlaceholder,
    id,
  } = question;

  return (
    <div>

      {/* Question heading */}

      <div className="mb-3">

        <span className="mb-1 block text-[8px] font-bold tracking-[0.18em] text-[#b09b8e]">
          QUESTION {number}
        </span>

        <p className="text-xs font-semibold leading-5 text-[#4e3c34] sm:text-sm">
          {label}
        </p>

      </div>

      {/* ============================================= */}
      {/* TEXT QUESTION */}
      {/* ============================================= */}

      {type === "text" && (
        <textarea
          value={selectedAnswer}
          onChange={(event) =>
            onTextChange(event.target.value)
          }
          placeholder={placeholder}
          required
          rows={3}
          className="birthday-input resize-none"
        />
      )}

      {/* ============================================= */}
      {/* OPTIONS QUESTION */}
      {/* ============================================= */}

      {type === "options" && (
        <>
          <div className="grid gap-2 sm:grid-cols-2">

            {options.map((option) => {
              const selected =
                !isOtherSelected &&
                selectedAnswer === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onOptionChange(option)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-xs font-medium transition duration-150 ${
                    selected
                      ? "border-[#c77962] bg-[#fff3ed] text-[#8d5948] shadow-sm"
                      : "border-[#eadbd1] bg-[#fffaf6] text-[#6f5d53] hover:border-[#d9b8aa] hover:bg-white"
                  }`}
                >

                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      selected
                        ? "border-[#c77962] bg-[#c77962]"
                        : "border-[#d7c7bd] bg-white"
                    }`}
                  >
                    {selected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>

                  {option}

                </button>
              );
            })}

            {/* OTHER */}

            <button
              type="button"
              onClick={onOtherClick}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-xs font-medium transition duration-150 sm:col-span-2 ${
                isOtherSelected
                  ? "border-[#c77962] bg-[#fff3ed] text-[#8d5948] shadow-sm"
                  : "border-[#eadbd1] bg-[#fffaf6] text-[#6f5d53] hover:border-[#d9b8aa] hover:bg-white"
              }`}
            >

              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                  isOtherSelected
                    ? "border-[#c77962] bg-[#c77962]"
                    : "border-[#d7c7bd] bg-white"
                }`}
              >
                {isOtherSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>

              ✍️ Other

            </button>

          </div>

          {/* OTHER INPUT */}

          {isOtherSelected && (
            <div className="mt-3">

              <input
                type="text"
                value={selectedAnswer}
                onChange={(event) =>
                  onTextChange(event.target.value)
                }
                placeholder={otherPlaceholder}
                autoFocus
                required
                className="birthday-input"
              />

            </div>
          )}
        </>
      )}

      {/* Q7 little extra */}

      {id === "q7" && (
        <p className="mt-2 text-[10px] italic text-[#a58d7d]">
          No pressure... but I&apos;m definitely reading this one carefully. 😌
        </p>
      )}

    </div>
  );
}

export default VerificationForm;