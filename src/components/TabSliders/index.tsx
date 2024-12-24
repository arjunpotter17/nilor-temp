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
  pre?: string;
  title: string;
  para?: string;
  tabs: Tab[];
  containerClassNames?: string;
  tabButtonColor?: string;
  tabIndication?:boolean;
}

export default function TabSwitch({
  pre,
  title,
  para,
  tabs,
  containerClassNames,
  tabButtonColor,
  tabIndication = true
}: TabSwitch) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);
  const tabNames = tabs.map((tab) => tab.tabName);

  // Handle tab switch
  const tabToggler = (tabName: string) => {
    const selectedTab = tabs.find((tab) => tab.tabName === tabName); // Use `find` to directly get the tab
    if (selectedTab) {
      setCurrentTab(selectedTab);
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center text-nilor-white ${containerClassNames}`}
    >
      <div className="flex flex-col gap-y-20 items-center">
      <div className="max-w-[1152px] text-center gap-y-4 flex flex-col">
        {pre && <p className="text-nilor-pre">{pre.toLocaleLowerCase()}</p>}
        <h1 className="text-nilor-title font-nilor-semibold">
          {title}
        </h1>
        {para && <p className="mt-10 text-nilor-text">{para}</p>}
      </div>

      {/* Tab Buttons */}
      <div className="max-w-[1152px] flex gap-x-10">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => tabToggler(tab)}
            className={`relative font-nilor-bold pb-1 
        ${
          currentTab.tabName === tab ? tabIndication
            ? `after:block after:w-full after:h-[4px] ${
                tabButtonColor
                  ? `after:bg-${tabButtonColor}`
                  : "after:bg-nilor-accent"
              }`
            : 'text-nilor-black' : ""
        } 
        ${
          tabButtonColor ? `hover:text-nilor-black` : "hover:text-nilor-accent"
        } hover:transform hover:scale-105 font-nilor-semibold transition-all duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>

      {/* Content of the Current Tab */}
      {currentTab && (
        <div className="w-full bg-nilor-black flex justify-center items-center py-20">
        <div className="max-w-[1152px] flex w-full gap-x-10 items-center bg-nilor-black">
          <div className="flex flex-col text-nilor-white max-w-[50%] gap-y-10 items-start">
            <div className="flex flex-col">
            <p className="text-nilor-pre text-nilor-grey">{currentTab.tabName}</p>
            <p className="text-nilor-title">{currentTab.title}</p>
            </div>
            <p className="text-nilor-text-small">{currentTab.para}</p>
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
