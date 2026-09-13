import { useState } from "react";
import NotificationCard from "./components/NotificationCard";
import VerificationForm from "./components/VerificationForm";
import BirthdayCard from "./components/BirthdayCard";

function App() {
  const [stage, setStage] = useState("notification");

  const goBack = () => {
    if (stage === "questions") {
      setStage("birthday");
    } else if (stage === "birthday" || stage === "birthdayFinal") {
      setStage("notification");
    }
  };

  return (
    <main>
      {/* PAGE 1 — Birthday notification */}

      {stage === "notification" && (
        <NotificationCard
          onContinue={() => setStage("birthday")}
        />
      )}

      {/* PAGE 2 — Birthday wish BEFORE questions */}

      {stage === "birthday" && (
        <BirthdayCard
          onBack={goBack}
          onQuestions={() => setStage("questions")}
          showPersonalMessage={false}
        />
      )}

      {/* PAGE 3 — Questions */}

      {stage === "questions" && (
        <VerificationForm
          onSuccess={() => setStage("birthdayFinal")}
          onBack={goBack}
        />
      )}

      {/* PAGE 4 — Birthday wish AFTER questions */}

      {stage === "birthdayFinal" && (
        <BirthdayCard
          onBack={goBack}
          onQuestions={null}
          showPersonalMessage={true}
        />
      )}
    </main>
  );
}

export default App;