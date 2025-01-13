import React from "react";
import { dataCardMatrics } from "@/data/data";
import { DataCard } from "./ui/card";

const DataCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 max-w-4xl mx-auto">
      {Object.values(dataCardMatrics).map((cardInfo, index) => (
        <DataCard 
          key={index}
          title={cardInfo.title}
          description={cardInfo.description}
          value={cardInfo.value}
          changePercentage={cardInfo.changePercentage}
          changeType={cardInfo.changeType}
        />  
      ))}
    </div>
  )
}

export default DataCards;