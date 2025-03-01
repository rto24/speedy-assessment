"use client"

import React, { useState, lazy, Suspense } from "react";
import { Podcast } from "lucide-react";
import DataCards from "@/components/DataCards";
import DataTable from "@/components/DataTable";
import GoalsCard from "@/components/Goals";

const TotalActiveUsersChart = lazy(() => import("@/components/charts/TotalActiveUsers"));
const RevenueDistribution = lazy(() => import("@/components/charts/Revenue"));
const TopSongs = lazy(() => import("@/components/charts/TopSongs"));

const tabs = [
  { name: "Total Users", component: TotalActiveUsersChart },
  { name: "Revenue", component: RevenueDistribution },
  { name: "Top Songs", component: TopSongs },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="flex-none lg:w-1/4 bg-orange-500 text-white p-6 overflow-y-auto">
        <div className="flex items-center">
          <Podcast className="w-12 h-12"/>
          <h1 className="text-2xl font-bold ml-2">Streamify</h1>
        </div>
        <DataCards />
      </div>

      {/* Main Panel */}
      <div className="flex-1 bg-gray-100 lg:p-6">
        {/* Tabs */}
        <div className="mb-4">
          <div className="flex flex-wrap border-b">
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
          {/* Lazy Loading Optimization */}
          <div className="flex-1 h-[400px] bg-white rounded-lg p-2">
            <Suspense fallback={<div>Loading chart...</div>}>
              {React.createElement(tabs[activeTab].component)}
            </Suspense>
          </div>
          <GoalsCard />
        </div>

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  );
}