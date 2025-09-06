// import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full  px-6 py-16 flex flex-col items-center max-w-7xl mx-auto text-white">
      {/* Heading */}
      <h2 className="text-3xl w-full z-10 md:text-5xl font-bold mb-4">
        Be part of the comeback. Be part of the future.
      </h2>

      {/* Description */}
      <p className="text-base md:text-xl w-full leading-relaxed mb-8">
        “Join the comeback and shape what’s next. Together, we’re creating a future of opportunities and innovation—don’t just watch, participate.”
      </p>

      {/* Links */}

      <div className="flex flex-col sm:flex-row gap-4 items-center w-full" >
          <span className="text-2xl font-semibold">
    Join Now:
  </span>

        <a
          href="#"
          className="text-white text-xl hover:text-gray-300 transition-colors duration-200"
        >
          Join As Learner
        </a>
        |
        <a
          href="#"
          className="text-white text-xl hover:text-gray-300 transition-colors duration-200"
        >
          Join As Creator
        </a>
        |
        <a
          href="#"
          className="text-white text-xl hover:text-gray-300 transition-colors duration-200"
        >
          Join As Trainee
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
