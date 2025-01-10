interface NilorButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;  // Add onClick handler as an optional prop
  }
  
  export default function NilorButton({
    text,
    className,
    onClick,  // Destructure onClick from props
  }: NilorButtonProps) {
    console.log('this is onclick', onClick)
    return (
      <button
        className={`text-nilor-white bg-transparent text-nowrap border rounded-full ~px-3/7 ~py-2/4 font-semibold md:font-bold text-xs md:text-[16px] w-fit hover:bg-nilor-accent hover:border-nilor-accent ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  