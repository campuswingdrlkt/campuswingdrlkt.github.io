import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      class="max-w-[1200px] mx-auto bg-gray-100 dark:bg-gray-900"
    >
      <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <div class="flex justify-center text-teal-600 lg:justify-start dark:text-teal-300"></div>
            <img src="logo.png" alt="logo" />
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Youtube
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Email
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Home
              </a>
            </li>
          </ul>
        </div>

        <p class="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
