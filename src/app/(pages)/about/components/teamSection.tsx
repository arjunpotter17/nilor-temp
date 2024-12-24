import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "Sophia Kim",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "David Thompson",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    name: "Lisa Martinez",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800&h=800"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 max-w-[1152px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-nilor-pre text-nilor-grey">our team</h2>
          <h3 className="text-nilor-title mx-auto leading-tight text-nilor-black">
            Meet the people behind the next dimension of entertainment
          </h3>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br opacity-75"
                  style={{
                    backgroundColor: `hsl(${(index * 40) % 360}, 70%, 85%)`,
                    mixBlendMode: 'color'
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h4 className="text-2xl font-bold">{member.name}</h4>
                <p className="text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;