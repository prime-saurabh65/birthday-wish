function NotificationCard({ onContinue }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff9f2] px-5 py-6 sm:px-8">

      {/* Background decorations */}
      <div className="pointer-events-none absolute left-[5%] top-[12%] text-2xl text-[#d99178]">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[20%] text-xl text-[#d6a84f]">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-[12%] left-[10%] text-xl text-[#d6a84f]">
        •
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[10%] text-2xl text-[#e7a48b]">
        ✦
      </div>

      {/* Main content */}
      <section className="relative mx-auto w-full max-w-6xl">

        {/* Service header */}
        <div className="mb-2 flex items-center justify-between px-3 text-[9px] font-bold tracking-[0.2em] text-[#a58d7d] sm:text-[10px]">

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d99178]" />

            BIRTHDAY SERVICES
          </span>

          <span>
            13 SEPTEMBER 2026
          </span>

        </div>


        {/* Main card */}
        <div className="grid overflow-hidden rounded-[2rem] border border-[#eadbcd] bg-white shadow-[0_20px_60px_rgba(91,62,45,0.12)] md:grid-cols-[0.8fr_1.5fr]">

          {/* LEFT SIDE */}
          <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#f9e8dc] p-8 md:min-h-[420px]">

            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#edbba7]/30" />

            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e7c77e]/25" />

            {/* Birthday visual */}
            <div className="relative text-center">

              <div className="mb-4 text-6xl sm:text-7xl">
                🎂
              </div>

              <p className="text-[9px] font-bold tracking-[0.3em] text-[#a36f5d]">
                SPECIAL DELIVERY
              </p>

              <p className="mt-2 text-sm font-medium leading-5 text-[#795b4d]">
                One very important
                <br />
                birthday notification
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold text-[#8d6858] shadow-sm">
                🎁 2026 EDITION
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10">

            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#c27b65]">
              IMPORTANT BIRTHDAY NOTIFICATION
            </p>

            <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#3f3029] sm:text-4xl md:text-5xl">

              Birthday Benefit

              <br />

              <span className="text-[#c77962]">
                For Ricky Kumar.
              </span>

            </h1>


            <p className="mt-4 max-w-xl text-sm leading-5 text-[#8b7569]">
              An extremely important annual upgrade has
              been detected for the following account holder.
            </p>


            {/* ACCOUNT INFORMATION */}
            <div className="my-5 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-[#eee2d8] py-5">

              <Info
                label="RECIPIENT"
                value="Ricky Kumar"
              />

              <Info
                label="ACCOUNT STATUS"
                value="● LEGENDARY"
                valueClass="text-[#5c9a72]"
              />

              <Info
                label="BENEFIT"
                value="Birthday Upgrade"
              />

              <Info
                label="PRIORITY"
                value="VERY IMPORTANT"
              />

            </div>


            {/* WARNING */}
            <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#fff6e8] px-4 py-3 text-xs text-[#8d7257]">

              <span className="text-base">
                ⚠️
              </span>

              <span>
                Account holder action required.
              </span>

            </div>


            {/* BUTTON */}
            <button
              onClick={onContinue}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#c77962] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#c77962]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b96d57] hover:shadow-xl active:translate-y-0"
            >
              VERIFY BIRTHDAY BENEFITS

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>


            <p className="mt-4 text-center text-[9px] text-[#b3a096]">
              Issued by{" "}
              <span className="font-semibold">
                Brotherhood Services™
              </span>
            </p>

          </div>

        </div>


        {/* Bottom message */}
        <p className="mt-4 text-center text-[9px] tracking-wide text-[#b5a197]">
          This notification was prepared exclusively for Ricky Kumar.
        </p>

      </section>
    </div>
  );
}


function Info({
  label,
  value,
  valueClass = "",
}) {
  return (
    <div>

      <p className="mb-1 text-[8px] font-bold tracking-[0.18em] text-[#b09b8e]">
        {label}
      </p>

      <p
        className={`text-xs font-semibold text-[#4e3c34] ${valueClass}`}
      >
        {value}
      </p>

    </div>
  );
}


export default NotificationCard;