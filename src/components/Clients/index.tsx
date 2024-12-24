import { ClientShowcase } from "./components/ClientShowcase";

export default function Clients() {
  return (
    <div className="w-full flex flex-col items-center gap-y-8 bg-nilor-accent py-10">
      <div className="w-full flex flex-col gap-y-4">
      <p className="w-full text-center text-nilor-pre font-nilor-semibold text-nilor-black ">Our Partners</p>
       <p className="w-full text-center text-nilor-title font-nilor-semibold text-nilor-white">
          Who we work with
        </p>
      </div>
     
      <ClientShowcase />
    </div>
  );
}
