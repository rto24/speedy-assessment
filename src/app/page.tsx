"use client"

import { useState } from "react";
import DataCards from "@/components/DataCards";
import TotalActiveUsersChart from "@/components/charts/TotalActiveUsers";
import RevenueDistribution from "@/components/charts/Revenue";
import TopSongs from "@/components/charts/TopSongs";
import DataTable from "@/components/DataTable";
import GoalsCard from "@/components/Goals";

const tabs = [
  { name: "Total Users", component: <TotalActiveUsersChart /> },
  { name: "Revenue", component: <RevenueDistribution /> },
  { name: "Top Songs", component: <TopSongs /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="flex-none lg:w-1/4 bg-orange-500 text-white p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <DataCards />
      </div>

      {/* Main Panel */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Tabs */}
        <div className="mb-4">
          <div className="flex border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 font-bold ${
                  activeTab === index
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 bg-white rounded-lg p-4">
            {tabs[activeTab].component}
          </div>
          <GoalsCard />
        </div>

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  );
}