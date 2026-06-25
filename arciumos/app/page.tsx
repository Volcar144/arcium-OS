
import StartWindow from "@/components/StartWindow";
import "./globals.css"

export default function Home() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-[url(/roses-wallpaper.gif)] bg-no-repeat bg-cover">
			<StartWindow />
		</main>
	);
}