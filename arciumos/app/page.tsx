import Logo from "@/components/ArciumLogo";
import LinkBar from "@/components/LinkBar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Logo/>
          <h1 className="text-2xl font-bold">Welcome to ArciumOS</h1>
          <h2 className="text-xl">The most useful OS on the web</h2>
          <LinkBar/>
        </div>
      </main>
    </div>
  );
}
