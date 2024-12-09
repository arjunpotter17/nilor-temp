type Tab = {
  tabName: string;
  title: string;
  buttonText: string;
  para: string;
  imgSrc:string
};

interface TabSwitch {
  pre: string;
  title: string;
  tabs: Tab[];
}

export default function TabSwitch({ pre, title, tabs }: TabSwitch) {
  const tabNames = tabs.map((tab) => tab.tabName);
  return (
    <div className="w-full flex flex-col gap-y-20 border border-red-500 items-center text-nilor-white">
      <div className="max-w-[1152px] text-center">
        <p className="text-landing-section-pre">{pre}</p>
        <h1 className="text-landing-section-title font-nilor-semibold">{title}</h1>
      </div>
      <div className="max-w-[1152px] flex gap-x-10">
        {tabNames.map((tab) => (
          <button key={tab} className="font-nilor-bold">{tab}</button>
        ))}
      </div>
    </div>
  );
}
