import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="max-w-[1200px] mx-auto bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900"
    >
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            SKSSF CampusWing
            <strong className="text-indigo-600"> Derlakatte </strong>
            unit
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        <img
          src="https://via.placeholder.com/600x400"
          alt="this is an image"
          className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"
        />
      </div>
    </section>
  );
}
