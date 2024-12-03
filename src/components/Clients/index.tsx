import Image from "next/image";

export default function Clients() {
  return (
    <div className="w-full flex flex-col items-center">
    
      <div className="relative w-full max-w-[768px] h-[500px]">
        {" "}
        <Image src="/clients.png" alt="clients" fill />
      </div>
    </div>
  );
}
