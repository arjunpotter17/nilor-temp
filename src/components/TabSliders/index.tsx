"use client";
import Image from "next/image";
import { useState } from "react";

type Tab = {
  tabName: string;
  title: string;
  buttonText: string;
  para: string;
  imgSrc: string;
};

interface TabSwitch {
  pre: string;
  title: string;
  tabs: Tab[];
}

export default function TabSwitch({ pre, title, tabs }: TabSwitch) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);
  const tabNames = tabs.map((tab) => tab.tabName);

  // Handle tab switch
  const tabToggler = (tabName: string) => {
    const selectedTab = tabs.find(tab => tab.tabName === tabName); // Use `find` to directly get the tab
    if (selectedTab) {
      setCurrentTab(selectedTab);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-20 items-center text-nilor-white">
      <div className="max-w-[1152px] text-center">
        <p className="text-landing-section-pre">{pre}</p>
        <h1 className="text-landing-section-title font-nilor-semibold">{title}</h1>
      </div>

      {/* Tab Buttons */}
      <div className="max-w-[1152px] flex gap-x-10">
  {tabNames.map((tab) => (
    <button
      key={tab}
      onClick={() => tabToggler(tab)}
      className={`relative font-nilor-bold pb-1 
        ${currentTab.tabName === tab ? 'after:block after:w-full after:h-[4px] after:bg-nilor-accent' : ''} 
        hover:text-nilor-accent hover:transform hover:scale-105 font-nilor-semibold transition-all duration-300`}
    >
      {tab}
    </button>
  ))}
</div>


      {/* Content of the Current Tab */}
      {currentTab && (
        <div>
          <div className="max-w-[1152px] flex w-full gap-x-10 items-center">
            <div className="flex flex-col text-nilor-white max-w-[50%] gap-y-10 items-start">
              <p className="text-landing-section-pre">{currentTab.tabName}</p>
              <p className="text-landing-section-title">{currentTab.title}</p>
              <p className="text-landing-section-text-small">{currentTab.para}</p>
              <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold w-fit hover:bg-nilor-accent hover:border-nilor-accent">
                {currentTab.buttonText}
              </button>
            </div>

            {/* Tab Image */}
            <div className="relative lg:max-w-[50%] w-full h-[300px]">
              <Image src={currentTab.imgSrc} alt={currentTab.tabName} fill />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
