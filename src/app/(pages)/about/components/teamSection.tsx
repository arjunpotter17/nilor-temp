"use client";
import PreTitle from "@/components/PreTitle";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lucas Moskun",
    role: "Director",
    image: "/team/lucas.webp",
    description:
      "Recognized by UKVI as a Global Talent, Lucas has had an impactful career building systems that enable immersion and storytelling for industry leading brands such as Boeing, The VOID, and Marshmallow Laser Feast. Lucas, operating at the intersection of XR, AI, and Blockchain, has embarked on developing the nilor platform. This initiative aims to transform creative studios into cutting-edge generative AI studios. nilor studio is the proof in the pudding.",
  },
  {
    name: "Stephen Henderson",
    role: "Creative Director",
    image: "/team/stephen.webp",
    description:
      "Senior Creative and Programmer with a background in Architecture, Spatial Design & Education. Previously at Marshmallow Laser Feast full time, and his other work has been internationally exhibited, from South Korea to Venice to London, and he has given talks at international symposia such as Ars Electronica. During his time as an educator, Stephen introduced and taught a new Pre-U qualification called Interdisciplinary Design which prepared students for a future in applied arts practices, at a prestigious North London school.",
  },
  {
    name: "Sebastian Monroy",
    role: "Creative Systems Software Engineer and Artist",
    image: "/team/seb.webp",
    description:
      "Always occupying a role that is both technical and creative, Sebastian's expertises are in interactive media design, generative art, and computer graphic programming. Excited by pushing the limits of immersive media and producing rich, engaging experiences, his previous work has been showcased internationally, including Tribeca Film Festival, Cannes Film Festival, The World Economic Forum, Serpentine Gallery, ACMI, and the Museum of the Future.",
  },
  {
    name: "Nils Johannesson",
    role: "Technical Artist",
    image: "/team/nils.webp",
    description:
      "Nils Johanesson's VFX Supervision background sharpened his creative eye across award-winning films, commercials, and music videos, collaborating with artists and brands like M.I.A, Rumi Kaul, MEYY, The New Originals, and Obey. His technical expertise, honed at Marshmallow Laser Feast, fuels his innovative experiments in digital media. Nils' work has been showcased globally, including at the Museum of the Future, Tribeca, Cannes, Netherlands Film Festival, WAVE MUSEUM, and ACMI.",
  },
  {
    name: "Dean White",
    role: "Creative Partner",
    image: "/team/dean.webp",
    description:
      "Dean White executes audio post-production services for feature films, fortune500 companies, and creative agencies. In early 2014 he joined VICE Media to work across tentpole productions and branded content until late 2019 when he left to start Multiworld. His current clients and destinations include Apple, Alphabet, Meta, Netflix, Amazon Prime, HBO Max, Paramount+, ESPN, Fox, and Condé Nast.",
  },
  {
    name: "James Moskun",
    role: "Board",
    image: "/team/james.webp",
    description: "Tech entrepeneur & Investor.",
  },
  {
    name: "Eleanor (Nell) Whitley",
    role: "Board",
    image: "/team/nell.webp",
    description:
      "Representing Marshmallow Laser Feast (MLF). MLF are an industry leading experiential artist collective who believe in the power of stories to tickle senses and shift perceptions.",
  },
];

const TeamSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    setActiveCard((prev) => (prev === name ? null : name));
  };

  return (
    // <AnimatedSection>

    <section className="py-24 max-w-[1152px]">
      <div className="max-w-7xl mx-auto">
        <PreTitle
          pre="our team"
          title="Meet the people behind the next dimension of entertainment"
          bgWhite={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 xl:px-0 mt-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => handleCardClick(member.name)}
            >
              {/* Image Section */}
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>

              {/* Description Overlay */}
              <AnimatePresence>
                {activeCard === member.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center p-4 transition-opacity duration-300"
                  >
                    <motion.h4
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg xl:text-xl font-bold mb-2"
                    >
                      {member.name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs xl:text-sm mb-4"
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs xl:text-sm"
                    >
                      {member.description}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Text Section */}
              {activeCard !== member.name && (
                <div className="absolute bottom-0 left-0 right-0 p-6  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    // </AnimatedSection>
  );
};

export default TeamSection;
