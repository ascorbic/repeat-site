import React, { useEffect } from "react";
import Head from "next/head";

const RepeatHero = ({ bgImage, headerText, subheaderText }) => {
  return (
    <div
      className="bg-center bg-fixed h-screen/1.3 bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?plains,windmill)" }}
    >
      <div className="container max-w-screen-lg h-full m-auto">
        <div className="flex h-full items-end">
          <div className="py-8 w-3/4">
            <h1 className="text-7xl pb-8 font-extrabold">{headerText}</h1>
            <h2 className="text-md w-4/5 pb-8">{subheaderText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepeatHero;
