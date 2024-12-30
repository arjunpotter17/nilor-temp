interface ClientLogoProps {
  name: string;
  logo?: string;
}

export const ClientLogo = ({ name, logo }: ClientLogoProps) => (
  <div className="inline-flex w-[200px] h-24 bg-black rounded-lg shadow-md p-4 items-center justify-center mx-6 transition-transform">
    {(
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    )}
  </div>
);