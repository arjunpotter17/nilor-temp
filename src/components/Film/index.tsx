export default function Film() {
  const src = "/solutions-ironman.jpg";
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-nilor-white gap-y-10">
        
      <p className="text-nilor-pre">NILOR IN ACTION</p>
      <h1 className="text-nilor-title">Next Level Visual Experiences</h1>
      <div
        className="w-full min-h-[calc(100vh-100px)] bg-cover flex items-center justify-center mt-10"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-10">
          <p className="text-nilor-title">
            A Paragon Tool
          </p>
          <p className="text-nilor-text max-w-[60%] font-nilor-semibold">
          From previz storyboarding to final rendered VFX, Nilor&apos;s team of developers and artists have experience across the post-production landscape of film.
          </p>
        </div>
      </div>
    </div>
  );
}
