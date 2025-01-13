import React from "react";
import { goals } from "@/data/data";

const GoalsCard: React.FC = () => {
  return (
    <div className="flex-none w-full lg:w-1/3 bg-white rounded-lg p-4 h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center mx-auto p-6">
          <span className="mr-2 text-blue-500">💡</span> Team goals
        </h3>
      </div>
      {goals.map((goal, index) => (
        <div key={index} className="mb-2 p-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-md font-bold text-gray-700">{goal.label}</span>
            <span className="text-md text-gray-700">{goal.value.toLocaleString()}</span>
          </div>
          <div className="relative w-full h-2 rounded-full bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-orange-400"
              style={{ width: `${(goal.value / goal.max) * 100}%` }}
            >
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GoalsCard;