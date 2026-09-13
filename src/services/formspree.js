const FORM_ENDPOINT =
  "https://formspree.io/f/xvkojaww";

const questionTexts = {
  q1:
    "Whyyyy didn't you wish me yesterday? You know na, I'm just 1 day younger to you! 😂",

  q2:
    "When would I finally get that photo with you that you said you'd give me once I passed 10th?",

  q3:
    "When can we watch some movie in theatre together?",

  q4:
    "When can we have some good food together at a restaurant of your choice?",

  q5:
    "So... why haven't you given me a birthday party on your birthday till now? 😂",

  q6:
    "When will you randomly ask me if you like pizza and order one for us? 🍕",

  q7:
    "Any message for me? ❤️",
};

export async function submitBirthdayForm(answers) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      Recipient: "Ricky Kumar",

      "Question 1": questionTexts.q1,
      "Answer 1": answers.q1,

      "Question 2": questionTexts.q2,
      "Answer 2": answers.q2,

      "Question 3": questionTexts.q3,
      "Answer 3": answers.q3,

      "Question 4": questionTexts.q4,
      "Answer 4": answers.q4,

      "Question 5": questionTexts.q5,
      "Answer 5": answers.q5,

      "Question 6": questionTexts.q6,
      "Answer 6": answers.q6,

      "Question 7": questionTexts.q7,
      "Answer 7": answers.q7,
    }),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response.json();
}