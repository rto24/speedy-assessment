"use client"

import { useState } from "react";
import DataCards from "@/components/DataCards";
import TotalActiveUsersChart from "@/components/charts/TotalActiveUsers";
import RevenueDistribution from "@/components/charts/Revenue";
import TopSongs from "@/components/charts/TopSongs";
import DataTable from "@/components/DataTable";

const tabs = [
  { name: "Total Users", component: <TotalActiveUsersChart /> },
  { name: "Revenue", component: <RevenueDistribution /> },
  { name: "Top Songs", component: <TopSongs /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/4 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <DataCards />
      </div>

      {/* Main Panel */}
      <div className="w-3/4 bg-gray-100 p-6 overflow-y-auto">
        {/* Tabs */}
        <div className="mb-4">
          <div className="flex border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 font-bold ${
                  activeTab === index
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          {tabs[activeTab].component}
        </div>

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  );
}