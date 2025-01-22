"use client";
import { useRouter } from "next/navigation";

interface NilorButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;  // Add onClick handler as an optional prop
    linkTo?: string
  }
  
  export default function NilorButton({
    text,
    className,
    onClick,  // Destructure onClick from props
    linkTo,
  }: NilorButtonProps) {
    const router = useRouter();
    return (
      <button
        className={`text-nilor-white bg-transparent text-nowrap border rounded-full ~px-3/7 ~py-2/4 font-semibold md:font-bold text-xs md:text-[16px] w-fit hover:bg-nilor-accent hover:border-nilor-accent transition-all duration-300 ${className}`}
        onClick={linkTo ? () => router.push(linkTo) : onClick}
      >
        {text}
      </button>
    );
  }
  