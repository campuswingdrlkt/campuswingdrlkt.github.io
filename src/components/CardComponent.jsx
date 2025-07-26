import React from "react";

export default function CardComponent(props) {
  return (
    <div className="col-span-1 md:col-span-3 lg:col-span-2 bg-gray-800">
      <a href="#" className="group relative block overflow-hidden">
        <img
          src={props.image}
          alt={`${props.title} image`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {props.title}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700">{props.desc}</p>

          <form className="mt-4">
            <a href={props.link}>
              <button className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                Learn More
              </button>
            </a>
          </form>
        </div>
      </a>
    </div>
  );
}
