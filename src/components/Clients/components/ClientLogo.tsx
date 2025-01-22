import Image from "next/image";

interface ClientLogoProps {
  name: string;
  logo?: string;
}

export const ClientLogo = ({ name, logo }: ClientLogoProps) => (
  <div className="inline-flex ~w-24/52 ~h-12/24 bg-black rounded-lg shadow-md ~p-2/4 items-center justify-center mx-6 transition-transform">
    {(
      <Image
        src={logo as string}
        width={100}
        height={100}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    )}
  </div>
);