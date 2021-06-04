import React, { useEffect } from "react";

const Stats = ({ stats }) => {
  stats = stats || {
    header: "",
    stats: [],
  };
  return (
    <div className="container max-w-screen-lg m-auto">
      <h3 className="font-bold text-2xl">{stats.header}</h3>
      <div className="flex flex-wrap pt-6">
        {stats.stats.map((stat, i) => (
          <div key={i} className="flex-1 ">
            <div className="text-6xl font-bold text-repeat-burnt">{stat.value}</div>
            <div className="pt-2 text-xs font-bold text-repeat-dark">{stat.label}</div>
            <div className="text-xs text-repeat-dark">{stat.supportingText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
