"use client";
import { cn } from "@/lib/utils";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function CardDemo({ details }: any) {
  return (
    <div className="w-full">
      <div
        className={cn(
          "group min-w-[300px] w-full cursor-pointer overflow-hidden relative card ~h-72/96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div 
          className={cn(
            "text relative z-50",
            "absolute bottom-0 left-0 right-0 p-4",
            "transform translate-y-full transition-transform duration-500 ease-in-out",
            "group-hover:translate-y-0",
            "bg-gradient-to-t from-black to-transparent"
          )}
        >
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {details.title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {details.type} . {details.time}
          </p>
        </div>
      </div>
    </div>
  );
}

