interface HeaderProps {
  pre: string;
  title: string;
  bgWhite?: boolean;
}

export default function PreTitle({ pre, title, bgWhite = false }: HeaderProps) {
  return (
    <div className="flex flex-col w-full ~gap-y-1/2 max-w-[1152px]px-4 md:px-10 xl:px-0">
      <p className="w-full text-center nilor-pre text-nilor-accent">
        {pre.toLocaleLowerCase()}
      </p>
      <p
        className={`w-full text-center nilor-title leading-tight ${
          bgWhite ? "text-nilor-black" : "text-nilor-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
