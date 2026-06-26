"use client"

import StartWindow from "@/components/StartWindow";
import "./globals.css"
import { TopBar } from "@/components/TopBar";
import { useState } from "react";
import { AppIcon } from "@/components/Icon";

export default function Home() {
	const [windowOrder, setWindowOrder] = useState<string[]>(["start"]);
	const [startOpen, setStartOpen] = useState(true);
	const [notesOpen, setNotesOpen] = useState(false);

	const bringWindowToFront = (windowId: string) => {
		setWindowOrder((prev) => [...prev.filter((id) => id !== windowId), windowId]);
	};

	const getZIndex = (windowId: string) => {
		const idx = windowOrder.indexOf(windowId);
		return idx >= 0 ? 10 + idx : 10;
	};

	return (
		<main className="relative min-h-screen flex items-center justify-center bg-[url(/roses-wallpaper.gif)] bg-no-repeat bg-cover">
			<StartWindow
				id="start"
				isOpen={startOpen}
				zIndex={getZIndex("start")}
				onActivate={() => bringWindowToFront("start")}
				onClose={() => setStartOpen(false)}
			/>
			<AppIcon imageSrc="/icon-notepad.png" appName="Notepad" onClick={() => {setNotesOpen(true)}} />
			<AppIcon imageSrc="/arciumos.png" appName="Welcome" onClick={() => {setStartOpen(true)}} />
			<div className="fixed bottom-0 left-0 right-0">
				<TopBar />
			</div>
		</main>
	);
}
