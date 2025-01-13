import Link from "next/link";
import { AnimatedSection } from "../AnimateComponent";

export default function Footer() {
  return (
    <AnimatedSection>
    <div className="w-full flex items-center justify-center bg-[#011111] py-10 px-4 md:px-10 xl:px-0">
      <div className="max-w-[1152px] w-full space-y-20">
        <div className="flex justify-between">
        <ul className="text-nilor-white gap-y-2 flex flex-col">
  <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
    <Link href="/about">Contact</Link>
  </li>
  {/* <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
    <Link href="/careers">Careers</Link>
  </li> */}
  <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
    <Link href="/learn">Tutorials</Link>
  </li>
 
</ul>

          <div className="flex space-x-4 text-nilor-white">
            <a
              href="https://discord.com/channels/1171373496073457664"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nilor-accent"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.55.07.07 0 0 0-.076.035c-.211.37-.444.855-.608 1.237-1.865-.278-3.727-.278-5.578 0-.164-.392-.397-.867-.614-1.237a.072.072 0 0 0-.076-.035c-1.694.39-3.328.94-4.885 1.55a.065.065 0 0 0-.03.027C.533 9.157-.32 13.68.099 18.153a.081.081 0 0 0 .031.057 20.095 20.095 0 0 0 5.993 3.03.071.071 0 0 0 .078-.027 14.566 14.566 0 0 0 1.261-2.062.069.069 0 0 0-.041-.098 12.95 12.95 0 0 1-1.841-.878.07.07 0 0 1-.007-.118c.124-.092.248-.188.365-.28a.07.07 0 0 1 .071-.01c3.835 1.755 7.963 1.755 11.742 0a.07.07 0 0 1 .073.01c.117.092.241.188.365.28a.07.07 0 0 1-.006.118c-.588.37-1.21.668-1.842.878a.07.07 0 0 0-.04.099 13.16 13.16 0 0 0 1.261 2.061.071.071 0 0 0 .078.028 20.082 20.082 0 0 0 6.002-3.03.07.07 0 0 0 .03-.057c.503-5.063-.838-9.542-3.467-13.757a.063.063 0 0 0-.031-.028zM8.02 15.574c-1.155 0-2.104-1.064-2.104-2.375s.927-2.375 2.104-2.375c1.166 0 2.113 1.065 2.104 2.375 0 1.31-.927 2.375-2.104 2.375zm7.944 0c-1.155 0-2.104-1.064-2.104-2.375s.927-2.375 2.104-2.375c1.166 0 2.113 1.065 2.104 2.375 0 1.31-.927 2.375-2.104 2.375z" />
              </svg>
            </a>
            <a
              href="https://x.com/nilorstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nilor-accent"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M24 4.557a9.822 9.822 0 01-2.828.775A4.92 4.92 0 0023.337 3.1a9.842 9.842 0 01-3.127 1.195A4.917 4.917 0 0016.675 2c-2.716 0-4.92 2.204-4.92 4.92 0 .386.043.762.127 1.124A13.95 13.95 0 011.671 3.148a4.905 4.905 0 00-.664 2.475c0 1.708.869 3.216 2.188 4.102a4.904 4.904 0 01-2.228-.616v.062c0 2.386 1.697 4.375 3.95 4.827a4.923 4.923 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.418A9.867 9.867 0 010 21.543a13.924 13.924 0 007.548 2.212c9.055 0 14.001-7.503 14.001-14.001 0-.213-.004-.425-.014-.637A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/nilor-corp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nilor-accent"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452H16.78v-5.3c0-1.264-.025-2.892-1.765-2.892-1.766 0-2.036 1.38-2.036 2.799v5.393H8.658V9.354h3.568v1.52h.049c.497-.939 1.708-1.93 3.513-1.93 3.753 0 4.448 2.47 4.448 5.683v5.825zM5.337 7.433a2.069 2.069 0 01-2.066-2.066 2.066 2.066 0 012.066-2.066 2.065 2.065 0 012.065 2.066 2.068 2.068 0 01-2.065 2.066zM6.947 20.452H3.723V9.354h3.224v11.098zM22.225 0H1.771C.79 0 0 .79 0 1.771v20.452C0 23.21.79 24 1.771 24h20.452C23.21 24 24 23.21 24 22.225V1.771C24 .79 23.21 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <p className="text-nilor-white mt-5 flex items-center justify-center space-x-4 text-center text-xs">
          <span className="group flex items-center space-x-1">
            <span className="text-nilor-white">•</span>
            <span className="hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Terms and Conditions
            </span>
          </span>
          <span className="group flex items-center space-x-1">
            <span className="text-nilor-white">•</span>
            <span className="hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Privacy
            </span>
          </span>
          <span className="group flex items-center space-x-1">
            <span className="text-nilor-white">•</span>
            <span className="hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              License
            </span>
          </span>
          <span className="group flex items-center space-x-1">
            <span className="text-nilor-white">•</span>
            <span className="hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Support
            </span>
          </span>
        </p> */}
      </div>
    </div>
    </AnimatedSection>
  );
}
