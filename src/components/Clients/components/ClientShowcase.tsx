import { clients } from '../data';
import { ClientLogo } from './ClientLogo';

export const ClientShowcase = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-nilor-secondary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-nilor-secondary to-transparent z-10"></div>

          {/* Logo Carousel */}
          <div className="logos">
            <div className="logos-slide">
              {clients.map((client, index) => (
                <ClientLogo key={`original-${index}`} {...client} />
              ))}
            </div>
            <div className="logos-slide">
              {clients.map((client, index) => (
                <ClientLogo key={`duplicate-${index}`} {...client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};