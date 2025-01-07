interface HeaderProps {
    pre: string;
    title: string;
}

export default function PreTitle({pre, title}:HeaderProps) {
    return(
        <div className="flex flex-col w-full ~gap-y-1/8">
      <p className="w-full text-center nilor-pre text-nilor-accent">{pre.toLocaleLowerCase()}</p>
      <p className="w-full text-center text-nilor-white nilor-title leading-tight">{title}</p>
      </div>
    )
}