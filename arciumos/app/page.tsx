import Logo from "@/components/ArciumLogo";
import LinkBar from "@/components/LinkBar";
import StartWindow from "@/components/StartWindow";
import "./globals.css"

export default function Home() {
	return (
		<div className="">
			<main className="bg-stone:50 w-full min-h-screen">
				<StartWindow />
			</main>
		</div>
	);
}
