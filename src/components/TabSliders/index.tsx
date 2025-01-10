"use client";
import Image from "next/image";
import { useState } from "react";
import NilorButton from "../NilorButton";
import PreTitle from "../PreTitle";

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
  tabIndication?: boolean;
}

export default function TabSwitch({
  pre,
  title,
  para,
  tabs,
  containerClassNames,
  tabButtonColor,
  tabIndication = true,
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
      className={`w-full flex flex-col items-center text-nilor-white  ~px-4/0 ${containerClassNames}`}
    >
      <div className="flex flex-col gap-y-20 items-center">
        <div className="max-w-[1152px] text-center gap-y-4 flex flex-col">
         {pre && title && <PreTitle pre={pre} title={title}/>}
          {para && <p className="mt-10 nilor-text">{para}</p>}
        </div>

        {/* Tab Buttons */}
        <div className="max-w-[1152px] flex ~gap-x-5/10">
          {tabNames.map((tab) => (
            <button
              key={tab}
              onClick={() => tabToggler(tab)}
              className={`relative font-nilor-bold pb-1 
        ${
          currentTab.tabName === tab
            ? tabIndication
              ? `after:block after:w-full after:h-[4px] ${
                  tabButtonColor
                    ? `after:bg-${tabButtonColor}`
                    : "after:bg-nilor-accent"
                }`
              : "text-nilor-accent"
            : ""
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
        <div className="w-full bg-nilor-black flex justify-center items-center pt-20">
          <div className="max-w-[1152px] flex flex-col md:flex-row w-full gap-x-10 items-center bg-nilor-black">
            <div className="flex flex-col text-nilor-white  md:max-w-[50%] gap-y-10 items-start">
              <div className="flex flex-col">
                <p className="nilor-pre text-nilor-accent">
                  {currentTab.tabName}
                </p>
                <p className="nilor-title leading-tight">{currentTab.title}</p>
              </div>
              <p className="nilor-text-small">{currentTab.para}</p>
              <NilorButton text={currentTab.buttonText} />
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
