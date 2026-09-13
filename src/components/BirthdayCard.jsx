function BirthdayCard({
  onBack,
  onQuestions,
  showPersonalMessage,
}) {
  // FINAL MESSAGE SCREEN
  // This is shown only after Ricky submits the questions.

  if (showPersonalMessage) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff9f2] px-5">

        {/* Background decorations */}

        <div className="pointer-events-none absolute left-[12%] top-[18%] text-3xl text-[#d99178]">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[15%] top-[22%] text-xl text-[#d6a84f]">
          ✧
        </div>

        <div className="pointer-events-none absolute bottom-[20%] left-[18%] text-xl text-[#d6a84f]">
          •
        </div>

        <div className="pointer-events-none absolute bottom-[18%] right-[12%] text-3xl text-[#e7a48b]">
          ✦
        </div>

        {/* Final message */}

        <div className="relative w-full max-w-2xl">

          <div className="rounded-[2rem] border border-[#eeddd3] bg-white p-8 text-center shadow-[0_25px_70px_rgba(91,62,45,0.12)] sm:p-12 md:p-16">

            <div className="mb-6 text-5xl">
              ❤️
            </div>

            <p className="text-[9px] font-bold tracking-[0.3em] text-[#c27b65]">
              A MESSAGE FROM SAURABH
            </p>

            <div className="mt-6">

              <p className="text-xl font-bold leading-8 text-[#4e3c34] sm:text-2xl">
                Have an amazing birthday, Sir! ❤️
              </p>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#967d70] sm:text-base">
                Thank you for being both the teacher I can
                learn from and the elder brother I can count on.
              </p>

            </div>

            <div className="mx-auto mt-8 h-px w-24 bg-[#eadbd1]" />

            <p className="mt-6 text-sm font-semibold text-[#4e3c34]">
              — Saurabh 😎
            </p>

          </div>

        </div>

      </div>
    );
  }

  // NORMAL BIRTHDAY PAGE
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff9f2] px-5 py-8 sm:px-8">

      {/* Background decorations */}

      <div className="pointer-events-none absolute left-[8%] top-[15%] text-3xl text-[#d99178]">
        ✦
      </div>

      <div className="pointer-events-none absolute left-[15%] top-[25%] text-sm text-[#d6a84f]">
        •
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[18%] text-2xl text-[#d6a84f]">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[15%] bottom-[20%] text-3xl text-[#e7a48b]">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[12%] left-[12%] text-sm text-[#d99178]">
        •
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

        {/* Service header */}

        <div className="mb-3 flex items-center justify-between px-3 text-[9px] font-bold tracking-[0.2em] text-[#a58d7d] sm:text-[10px]">

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5c9a72]" />
            BIRTHDAY SERVICES
          </span>

          <span>
            BENEFIT ACTIVATED
          </span>

        </div>

        {/* Main card */}

        <div className="grid overflow-hidden rounded-[2rem] border border-[#eadbcd] bg-white shadow-[0_25px_70px_rgba(91,62,45,0.13)] md:grid-cols-[0.85fr_1.5fr]">

          {/* LEFT CELEBRATION PANEL */}

          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#f9e8dc] p-10 md:min-h-[620px]">

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#edbba7]/30" />

            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#e7c77e]/25" />

            <span className="absolute left-[20%] top-[20%] text-xl text-[#d99178]">
              ✦
            </span>

            <span className="absolute right-[20%] top-[28%] text-sm text-[#d6a84f]">
              ✧
            </span>

            <span className="absolute bottom-[25%] left-[25%] text-sm text-[#d6a84f]">
              •
            </span>

            <div className="relative text-center">

              <div className="mb-5 text-7xl">
                🎂
              </div>

              <p className="text-[9px] font-bold tracking-[0.3em] text-[#a36f5d]">
                BENEFIT ACTIVATED
              </p>

              <p className="mt-3 text-xl font-semibold text-[#6f5145]">
                It&apos;s your day, Ricky Sirrr!
              </p>

              <p className="mt-2 text-sm leading-5 text-[#927567]">
                Enjoy your annual
                <br />
                birthday upgrade.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#8d6858] shadow-sm">
                🎁 UNLIMITED VALIDITY
              </div>

            </div>

          </div>

          {/* RIGHT MESSAGE */}

          <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">

            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#c27b65]">
              OFFICIAL BIRTHDAY DEPARTMENT
            </p>

            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#3f3029] sm:text-5xl md:text-6xl">

              Happy Birthday,
              <br />

              <span className="text-[#c77962]">
                Ricky Sir.
              </span>{" "}
              🎂

            </h1>

            <div className="my-6 h-px w-full bg-[#eee2d8]" />

            {/* Main message */}

            <div className="space-y-4 text-sm leading-6 text-[#806c61]">

              <p>
                Dear{" "}
                <strong className="text-[#4e3c34]">
                  Ricky Sirrr
                </strong>
                ,
              </p>

              <p>
                Congratulations! You have successfully
                completed another year of being my{" "}
                <strong className="text-[#4e3c34]">
                  teacher, elder brother, advisor,
                  and part-time motivational speaker.
                </strong>{" "}
              </p>

              <p>
                Your account has officially been upgraded
                with the following benefits:
              </p>

            </div>

            {/* Benefits */}

            <div className="mt-5 grid gap-2 sm:grid-cols-2">

              <Benefit>
                Unlimited love from us
              </Benefit>

              <Benefit>
                Lifetime elder brother privileges
              </Benefit>

              <Benefit>
                Unlimited teaching rights
              </Benefit>

              <Benefit>
                Permanent &quot;GURU&quot;
              </Benefit>

            </div>

            {/* OPTIONAL QUESTIONS */}

            <div className="mt-6 rounded-2xl border border-[#eadbd1] bg-[#fffaf6] p-5">

              <div className="text-center">

                <p className="text-[9px] font-bold tracking-[0.2em] text-[#b09b8e]">
                  ONE LAST THING...
                </p>

                <p className="mt-2 text-sm font-semibold text-[#4e3c34]">
                  Want to answer a few questions for Saurabh? 👀
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#967d70]">
                  Totally optional. But I&apos;d really like to
                  know your answers. 😄
                </p>

                <button
                  type="button"
                  onClick={onQuestions}
                  className="group mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#c77962] px-6 py-3 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#c77962]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b96d57] hover:shadow-xl"
                >
                  YES, ASK ME 👀

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </div>

            </div>

            {/* Signature */}

            <div className="mt-6 flex items-end justify-between">

              <div>

                <p className="text-[9px] font-bold tracking-[0.15em] text-[#b09b8e]">
                  PERMANENTLY ENROLLED STUDENT
                </p>

                <p className="mt-1 text-sm font-semibold text-[#4e3c34]">
                  Saurabh 😎
                </p>

              </div>

              <div className="text-3xl">
                🎈
              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <p className="mt-4 text-center text-[9px] tracking-wide text-[#b5a197]">
          Birthday Benefit ID: RICKY-2026 • Brotherhood Services™
        </p>

      </section>
    </div>
  );
}

function Benefit({ children }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-[#eee2d8] bg-white px-3 py-2.5">

      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[10px] font-bold text-[#5c9a72]">
        ✓
      </span>

      <span className="text-xs font-medium text-[#6f5d53]">
        {children}
      </span>

    </div>
  );
}

export default BirthdayCard;