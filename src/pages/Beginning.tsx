import TimelineSection from "../components/common/TimelineSection";

const Beginning = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden ">
      {/* Background gradient and blurred ellipse */}
      {/* <div
        className="absolute w-[111px] h-[1435px] bg-[#29AB87] blur-[200px] transform -rotate-90"
        style={{ top: "-30px", rotate: "-25deg" }}
      /> */}

    {/* <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] top-[-700px] rotate-[75deg] bg-[#29AB87]  blur-[111px] transform "
    /> */}

        <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] right-[150px] top-[-100px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />

    <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] left-[150px] top-[1500px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />

    <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] right-[150px] top-[2000px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />


        <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] left-[150px] top-[2700px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />

    <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] right-[150px] top-[3200px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />

    <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] left-[150px] top-[4000px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />

     <div id="blurred-ellipse" className="absolute  w-[111px] h-[1435px] right-[150px] top-[4700px] rotate-[75deg] bg-[#29AB87]  blur-[111px] "
    />


      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
            <TimelineSection
      heading="The Beginning (2023)"
      subHeading="Training + Employment = Opportunity"
      description="Where it all started."
      imageSrc="/images/Beginning.png"
      imageAlt="The Beginning"
      imagePosition="left" // or "right"
      listItems={[
        "Founded Oct 2023 by Ravichandra Reddy",
        "Training → Software Analyst roles.",
        "Training fees: ₹1,00,000 → ₹5,00,000",
        "Expansion: Hyderabad hub + branches (USA, Australia, Singapore, Sri Lanka).",
        "Jan 2024: Cybersecathon Graduation event.",
      ]}
    />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
  <TimelineSection
    heading="The Growth (Early 2024)"
    subHeading="From Startup to Scale"
    description="Rapid expansion and new horizons."
    imageSrc="/images/Growth.png"
    imageAlt="The Growth"
    imagePosition="right"
    listItems={[
      "March 2024: Student enrollments rising.",
      "Ravichandra stepped down as CEO (elections).",
      "April 2024: 638 Software Analyst trainees onboarded.",
      "Launch of Giglecan (training + job placement product).",
    ]}
  />
</div>

<TimelineSection
  heading="The Exploitation (Mid 2024)"
  subHeading="Misuse & Scams"
  description="Consultants exploited Gigleaz's success."
  imageSrc="/images/Explo.png"
  imageAlt="The Exploitation"
  imagePosition="left"
  listItems={[
    "700 fake employee profiles created.",
    "Official employees = 638 trainees only.",
    "Of 700, only 80 valid participants.",
    "₹5,00,000 AI/ML training fee (refund terms clear, no requests).",
    "120 students trained free of cost.",
    "GST paid, services delivered. Fraud = consultants, not Gigleaz.",
  ]}
/>

<TimelineSection
  heading="The Conflict & Terminations (June–July 2024)"
  subHeading="Legal Battle Begins"
  description="Consultants file false cases."
  imageSrc="/images/Law.png"
  imageAlt="The Conflict & Terminations"
  imagePosition="right"
  listItems={[
    "Consultants file false cases.",
    "Media trial, reputation damage.",
    "600+ trainees suspended from Gigleaz.",
    "Only 38 students remained loyal.",
  ]}
/>


<TimelineSection
  heading="The Kidnapping (July 9, 2024)"
  subHeading="The Darkest Day"
  description="Forced confession under duress."
  imageSrc="/images/Kidnapping.png"
  imageAlt="The Kidnapping"
  imagePosition="left"
  listItems={[
    "Ravichandra kidnapped.",
    "Forced confession (refund to 120 students).",
    "Confession to be the biggest mistake.",
  ]}
/>

<TimelineSection
  heading="The Pause (July 18, 2024)"
  subHeading="Accepting the brutal truth"
  description="Gigleaz shuts down operations."
  imageSrc="/images/Pause.png"
  imageAlt="The Pause"
  imagePosition="right"
  listItems={[
    "All operations suspended.",
    "Ravichandra's public apology.",
    "July 18, 2024 — Gigleaz official closure.",
    "Ravichandra's 3-month sabbatical.",
  ]}
/>


<TimelineSection
  heading="The Shift (July 19, 2024)"
  subHeading="From Setback to Rebuild"
  description="Planning the comeback of Gigleaz 2.0."
  imageSrc="/images/Shift.png"
  imageAlt="The Shift"
  imagePosition="left"
  listItems={[
    "Legal team formed to protect truth.",
    "38 loyal students + 10 new members.",
    "Planning Gigleaz 2.0 operations.",
  ]}
/>

<TimelineSection
  heading="The Comeback (2025)"
  subHeading="Gigleaz 2.0"
  description="The world's first Learn & Earn OTT platform."
  imageSrc="/images/Comeback.png"
  imageAlt="The Comeback"
  imagePosition="right"
  listItems={[
    "Relaunch as Gigleaz 2.0 in 2025.",
    "Transparent operations, clear policies.",
    "Industry's first learn-earn-grow platform.",
  ]}
/>

      </div>
    </div>
  );
};

export default Beginning;
