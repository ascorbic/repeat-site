import React, { useState } from "react";
import RepeatHero from "./global/hero";
import { policies } from "./data/policies";
import ExploreLoader from "./explore/loader";

const RepeatPolicy = ({ policy }) => {
  const activePolicy = policies[policy];
  return activePolicy ? (
    <div className="bg-policy-background bg-repeat-right-top bg-no-repeat">
      <RepeatHero headerText={activePolicy.header} subheaderText={activePolicy.subHeader} bg="" />
      <div className="container max-w-screen-lg pb-20 m-auto">
        {activePolicy.contentBlocks.map((block, i) => {
          if (block.type === "paragraph")
            return (
              <div key={i} className="md:w-1/2 pb-5">
                <p>{block.content}</p>
              </div>
            );
          if (block.type === "component")
            return (
              <div key={i} className="md:w-full py-10">
                {block.content}
              </div>
            );
          if (block.type === "heading")
            return (
              <div key={i} className="md:w-1/2 pt-2">
                <h3 className="text-lg font-bold">{block.content}</h3>
              </div>
            );
        })}
      </div>
      <div className="container max-w-screen-lg pb-10 m-auto">
        <ExploreLoader />
      </div>
    </div>
  ) : null;
};

export default RepeatPolicy;
