import React from "react";

const Beginning = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background gradient and blurred ellipse */}
      <div
        className="absolute w-[111px] h-[1435px] bg-[#29AB87] blur-[200px] transform -rotate-90"
        style={{ top: "-30px", rotate: "-25deg" }}
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

      <div className="container mx-auto px-4 py-16">
        {/* The Beginning (2023) Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Beginning.png"
                alt="The Beginning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Beginning (2023)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              Training + Employment = Opportunity
            </h3>
            <p className="text-xl mb-6">Where it all started.</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Founded Oct 2023 by Ravichandra Reddy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Training → Software Analyst roles.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Training fees: ₹1,00,000 → ₹5,00,000</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>
                  Expansion: Hyderabad hub + branches (USA, Australia,
                  Singapore, Sri Lanka).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Jan 2024: Cybersecathon Graduation event.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Growth (Early 2024) Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Growth.png"
                alt="The Growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Growth (Early 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              From Startup to Scale
            </h3>
            <p className="text-xl mb-6">Rapid expansion and new horizons.</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>March 2024: Student enrollments rising.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Ravichandra stepped down as CEO (elections).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>
                  April 2024: 638 Software Analyst trainees onboarded.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>
                  Launch of Giglecan (training + job placement product).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Exploitation (Mid 2024) Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Explo.png"
                alt="The Exploitation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Exploitation (Mid 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              Misuse & Scams
            </h3>
            <p className="text-xl mb-6">
              Consultants exploited Gigleaz's success.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>700 fake employee profiles created.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Official employees = 638 trainees only.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Of 700, only 80 valid participants.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>
                  ₹5,00,000 AI/ML training fee (refund terms clear, no
                  requests).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>120 students trained free of cost.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>
                  GST paid, services delivered. Fraud = consultants, not
                  Gigleaz.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Conflict & Terminations (June-July 2024) Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Law.png"
                alt="The Conflict & Terminations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Conflict & Terminations (June-July 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              Legal Battle Begins
            </h3>
            <p className="text-xl mb-6">Consultants file false cases.</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Consultants file false cases.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Media trial, reputation damage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>600+ trainees suspended from Gigleaz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Only 38 students remained loyal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Kidnapping (July 9, 2024) Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Kidnapping.png"
                alt="The Kidnapping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Kidnapping (July 9, 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              The Darkest Day
            </h3>
            <p className="text-xl mb-6">Forced confession under duress.</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Ravichandra kidnapped.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Forced confession (refund to 120 students).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Confession to be the biggest mistake.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Pause (July 18, 2024) Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Pause.png"
                alt="The Pause"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Pause (July 18, 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              Accepting the brutal truth
            </h3>
            <p className="text-xl mb-6">Gigleaz shuts down operations.</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>All operations suspended.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Ravichandra's public apology.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>July 18, 2024 — Gigleaz official closure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Ravichandra's 3-month sabbatical.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Shift (July 19, 2024) Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-24">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Shift.png"
                alt="The Shift"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Shift (July 19, 2024)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              From Setback to Rebuild
            </h3>
            <p className="text-xl mb-6">
              Planning the comeback of Gigleaz 2.0.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Legal team formed to protect truth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>38 loyal students + 10 new members.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Planning Gigleaz 2.0 operations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Comeback (2025) Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Comeback.png"
                alt="The Comeback"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Comeback (2025)
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#29AB87] font-semibold mb-4">
              Gigleaz 2.0
            </h3>
            <p className="text-xl mb-6">
              The world's first Learn & Earn OTT platform.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Relaunch as Gigleaz 2.0 in 2025.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Transparent operations, clear policies.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#29AB87] mr-2">•</span>
                <span>Industry's first learn-earn-grow platform.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginning;
