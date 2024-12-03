import Image from "next/image";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Card({details, setSelected}:any){
    return(
<div onClick={() => setSelected(details)} className="min-w-[400px] cursor-pointer min-h-[200px] py-3 px-5 rounded-lg overflow-hidden flex flex-col relative group hover:shadow-soft-glow transition-shadow duration-300">
    {/* Background Image */}
    <Image
        src={details.bgImage}
        alt="bg"
        fill
        className="absolute z-10 object-cover group-hover:brightness-50 transition-all duration-300"
    />
    {/* Content */}
    <p className="text-nilor-white text-2xl z-20 font-bold relative">{details.name}</p>
    <p className="text-nilor-white text-xl z-20 font-bold relative">{details.description}</p>
</div>

    )
}