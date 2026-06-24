import Logo from "./ArciumLogo";
import LinkBar from "./LinkBar";

export default function StartWindow() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-stone:100 border-solid">
			<Logo />
			<h1 className="text-2xl font-bold">Welcome to ArciumOS</h1>
			<h2 className="text-xl">The most useful OS on the web</h2>
			<LinkBar />
		</div>
	);
}
