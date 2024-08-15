import Image from "next/image";

export default function Home() {
  return (
    <main className="section-padding">
      <div className="text-heading-display">
        <Image
          className="-mb-[1em] w-[calc(var(--column-width)*3-var(--gap-fluid))]"
          src={
            "https://images.unsplash.com/photo-1720442617080-c25f9955194c?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1080}
          height={1920}
          priority
        />
        <h1>
          <span className="ml-[calc(var(--column-width)*3)]">
            Hey there my name is Huy. I am a freelance frontend developer and
            designer
          </span>
        </h1>
      </div>
    </main>
  );
}
