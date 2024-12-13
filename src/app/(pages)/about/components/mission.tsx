export default function Mission() {
    return(
        <div className="flex flex-col gap-y-10 max-w-[1152px] text-nilor-black py-10">
        <h1 className="text-landing-section-title">Our Mission</h1>
        <p className="text-landing-section-text">We are dedicated to transforming physical spaces through the power of synchronized visual art. Our integrated platform unites visionaries, artists, and venues in the creation of immersive environments that push the boundaries of what&apos;s possible. By seamlessly blending technological innovation with artistic vision, we enable the creation of experiences that inspire connection and wonder.</p>
        <video
        src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
        controls={true}
        className="h-full w-full"
      ></video>
      </div>
    )
}