import PreTitle from "../PreTitle/Index";

export default function Film() {
  const src = "/solutions-visual-exp.png";
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-nilor-white gap-y-10">
     <PreTitle pre="Nilor in action" title="Next Level Visual Experiences"/>
      <div
  className="w-full min-h-[calc(100vh-100px)] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-10"
  style={{
    backgroundImage: `url(${src})`,
  }}
>
        <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-10 ~px-4/0">
          <p className="nilor-title">
            Dynamic Worlds
          </p>
          <p className="nilor-text w-full lg:max-w-[60%] font-nilor-semibold">
          We collaborate with venues to develop and optimize visual assets, using our advanced tools to map them onto environments that adapt in real time. 
          </p>
        </div>
      </div>
    </div>
  );
}
