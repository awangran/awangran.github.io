"use client";

import { useState } from "react";

interface CardProps {
  title: string;
  category: string;
  skill: string;
  description: string;
  imagesrc: string;
  link: string;
}

export default function CardGlass({
  title,
  category,
  skill,
  description,
  imagesrc,
  link
}: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>

      {/* Card */}
      <div className="relative flex h-full max-w-md min-w-sm overflow-hidden rounded-3xl bg-gray-200 dark:bg-neutral-900 col-span-1 row-span-1">
        {/* Overlay gradient */}
        <img className="h-full w-full transition duration-500 blur-sm scale-100 absolute inset-0 object-cover z-10" src={imagesrc} loading="lazy" alt="Image uwu"></img>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/70 via-white/25 to-white/50 backdrop-blur-lg backdrop-saturate-150" />
            <div className="absolute inset-0 z-30 ring-1 ring-white/40 rounded-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-30 p-4 md:p-6 text-gun">
          <p className="text-sm opacity-80">{category}</p>
          <p className="mt-1 text-xl md:text-3xl font-semibold">{title}</p>

          <div className="flex flex-wrap gap-2 mt-14">
            <span className="px-3 py-1 rounded-full bg-brightg/50 backdrop-blur-md text-gun text-xs md:text-sm">
              {skill}
            </span>
          </div>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute right-3 bottom-3 z-40 h-12 w-12 rounded-full bg-prettyp/60 dark:bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-white dark:text-black"
            aria-hidden="true"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gun/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal content */}
          <div className="relative z-10 w-[90%] max-w-lg rounded-3xl bg-white dark:bg-neutral-900 p-6 md:p-8 shadow-2xl">
            
            <div className="mb-5">        
              <img className="object-contain rounded-lg max-h-32 w-full transition " src={imagesrc} loading="lazy" alt="Imagen aqui uwu"></img>
            </div>
            <h3 className="text-sm uppercase tracking-wide text-prettyp">
              {category}
            </h3>
            <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-gun">
              {title}
            </h2>

            <p className="mt-4 text-gun ">
              {description}
            </p>
            <a href={link} target="_blank"><p className="text-prettyp underline decoration-wavy mt-2">More info</p></a>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-5 py-2 text-sm font-medium bg-brightg text-prettyp dark:bg-white dark:text-black hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
