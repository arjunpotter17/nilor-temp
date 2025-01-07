export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center bg-[#011111] py-10 ~px-4/0">
      <div className="max-w-[1152px] w-full space-y-20">
        <div className="flex justify-between">
          <ul className="text-nilor-white gap-y-2 flex flex-col">
            <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
              Contact
            </li>
            <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
              Careers
            </li>
            <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
              Tutorials
            </li>
            <li className="hover:font-nilor-semibold hover:text-nilor-accent cursor-pointer transition-all duration-300 ease-in-out">
              About
            </li>
          </ul>
          <div className="flex space-x-4 text-nilor-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.583 0 0 .583 0 1.3v21.4c0 .718.583 1.3 1.325 1.3H12V14.7H9.7v-3.3H12V9.1c0-2.3 1.4-3.5 3.4-3.5.975 0 1.8.072 2.1.104v2.425h-1.7c-1.337 0-1.6.64-1.6 1.575v2.1H18l-.3 3.3h-2.5v9.3h6.275c.742 0 1.325-.582 1.325-1.3V1.3c0-.718-.583-1.3-1.325-1.3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
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

        <p className="text-nilor-white mt-5 flex items-center justify-center space-x-4 text-center text-xs">
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
        </p>
        
      </div>
    </div>
  );
}
