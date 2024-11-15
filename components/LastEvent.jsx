import EventCard from "./EventCard";
import Martin from "@/assets/Martin.jpeg";

const LastEvent = () => {
  return (
    <section className="h-full py-12 bg-gradient-to-b from-[#1D0808] via-[#112B2A] to-[#112B2A]   ">
      <div className="container ">
        <div>
          <h2 className="text-3xl text-secondary uppercase ">
            Nos derniers événements
          </h2>
          <div className="border- border-b border-secondary mt-2 mb-2"></div>
          <p>
            Découvrez nos dernières prestations et laissez-vous inspirer par
            l&apos;ambiance unique que nous avons créée pour chaque événement.
            Mariages, soirées privées, célébrations d&apos;entreprise… chaque
            occasion est pour nous l&apos;opportunité de sublimer vos moments
            avec style et élégance.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center items-center">
            <EventCard
              imageUrl={
                "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaWFnZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              badgeText="Mariage"
              title="Mariage de John & Lily"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium natus doloremque ab distinctio perferendis ullam consequuntur commodi labore voluptatibus, enim autem beatae iure pariatur repellendus sapiente dolorum omnis culpa quo?"
              authorName="Martin - Good Old Drinks"
              authorImage={Martin}
              date={"20 février 2024"}
            />
            <EventCard
              imageUrl={
                "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
              }
              badgeText="Entreprise"
              title="Séminaire IBM"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium natus doloremque ab distinctio perferendis ullam consequuntur commodi labore voluptatibus, enim autem beatae iure pariatur repellendus sapiente dolorum omnis culpa quo?"
              authorName="Martin - Good Old Drinks"
              authorImage={Martin}
              date={"20 février 2024"}
            />
            <EventCard
              imageUrl={
                "https://images.unsplash.com/photo-1704564872119-0e6b4ff0d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
              }
              badgeText="Soirée privée"
              title="Soirée privée"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium natus doloremque ab distinctio perferendis ullam consequuntur commodi labore voluptatibus, enim autem beatae iure pariatur repellendus sapiente dolorum omnis culpa quo?"
              authorName="Martin - Good Old Drinks"
              authorImage={Martin}
              date={"20 février 2024"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastEvent;
