import React from "react";
import type { Specialist } from "../libs/types";

const SpecialistCard: React.FC<Specialist> = ({
  name,
  specialization,
  experience,
  issues,
  rating,
}) => {
  return (
    <div className="min-h-64 w-full rounded-2xl bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 p-4 pb-7 border border-lightgraygreen/20">
      {/* Header Section */}
      <div className="h-[60%] flex gap-4">
        <div className="w-16 h-16 flex-shrink-0 flex justify-center items-center">
          <div className="size-14 bg-gradient-to-br from-lightgreen to-darkgreen rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">JD</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-24">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-darkgreen">{name}</h1>
            <p className="text-sm text-lightgreen font-medium">
              {specialization}
            </p>
          </div>

          <p className="text-sm font-medium text-darkgreen/80">{experience}</p>
          <p className="text-xs text-darkgreen/60 italic leading-relaxed">
            {issues.join(", ")}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-[40%] flex flex-col justify-between gap-3">
        {/* Issues Tags */}
        <div className="flex flex-wrap gap-2">
          {issues.slice(0, 3).map((issue, index) => (
            <div
              key={index}
              className="rounded-full bg-lightgreen/20 px-3 py-1 text-xs text-darkgreen font-medium border border-lightgreen/30"
            >
              {issue.length > 8 ? issue.slice(0, 8) + "..." : issue}
            </div>
          ))}
          {issues.length > 3 && (
            <div className="rounded-full bg-darkgreen/10 px-3 py-1 text-xs text-darkgreen font-medium">
              +{issues.length - 3}
            </div>
          )}
        </div>

        {/* Rating and Action */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">{"★".repeat(5)}</div>
            <span className="text-sm font-medium text-darkgreen ml-1">
              {rating}
            </span>
          </div>

          <button className="bg-gradient-to-r from-darkgreen to-lightgreen hover:from-darkgraygreen hover:to-quaternary-color text-white text-sm font-medium h-9 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
