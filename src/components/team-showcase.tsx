import { team_members } from "@/lib/constant";
import Button from "./global/Button";
import { HoverCardWithBg } from "./hover-card-with-bg";
import { Separator } from "./ui/separator";

export function TeamShowcase() {
  return (
    <div className="relative w-full  overflow-hidden bg-[url('/img/team-bg.jpg')] bg-no-repeat bg-cover">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-white">
        <h2 className="text-2xl font-light mb-2 font-secondary">NICE TO MEET</h2>
        <h1 className="text-5xl font-bold mb-12 font-primary">OUR TEAM</h1>

        <Separator className="mt-8 mb-12 bg-secondary h-2 w-32" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4 relative">
          {team_members.map((member, i) => (
            <div key={i} className={`relative`}>
              <HoverCardWithBg image={member.image} name={member.name} role={member.role} />
            </div>
          ))}
        </div>
        <div className=" w-full flex justify-center xl:justify-end mt-8 bottom-0 grid-cols-4 items-end">
          <Button label="Meet The Team" href="/team" />
        </div>
      </div>
    </div>
  );
}

interface SocialCardProps {
  name: string;
  role: string;
  image: string;
}
