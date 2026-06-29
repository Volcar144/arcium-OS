"use client";

import StartWindow from "@/components/StartWindow";
import "./globals.css";
import { useState } from "react";
import { AppIcon } from "@/components/Icon";
import NotesWindow from "@/components/NotesWindow";
import { TopBar } from "@/components/TopBar";

export default function Home() {
	const [windowOrder, setWindowOrder] = useState<string[]>(["start"]);
	const [startOpen, setStartOpen] = useState(true);
	const [notesOpen, setNotesOpen] = useState(false);

	const bringWindowToFront = (windowId: string) => {
		setWindowOrder((prev) => [
			...prev.filter((id) => id !== windowId),
			windowId,
		]);
	};

	const openWindow = (windowId: string) => {
		setWindowOrder((prev) =>
			prev.includes(windowId)
				? [...prev.filter((id) => id !== windowId), windowId]
				: [...prev, windowId]
		);
	};

	const closeWindow = (windowId: string) => {
		setWindowOrder((prev) => prev.filter((id) => id !== windowId));
	};

	const getZIndex = (windowId: string) => {
		const idx = windowOrder.indexOf(windowId);
		return idx >= 0 ? 100 + idx : 100;
	};

	return (
		<main className="relative min-h-screen flex items-center justify-center bg-[url(/roses-wallpaper.gif)] bg-no-repeat bg-cover">
			<StartWindow
				id="start"
				isOpen={startOpen}
				zIndex={getZIndex("start")}
				onActivate={() => bringWindowToFront("start")}
				onClose={() => {
					setStartOpen(false);
					closeWindow("start");
				}}
			/>
			<NotesWindow
				id="notes"
				isOpen={notesOpen}
				zIndex={getZIndex("notes")}
				onActivate={() => bringWindowToFront("notes")}
				onClose={() => {
					setNotesOpen(false);
					closeWindow("notes");
				}}
			/>
			<AppIcon
				imageSrc="/icon-notepad.png"
				appName="Notepad"
				onClick={() => {
					setNotesOpen(true);
					openWindow("notes");
				}}
			/>
			<AppIcon
				imageSrc="/arciumos.png"
				appName="Welcome"
				onClick={() => {
					setStartOpen(true);
					openWindow("start");
				}}
			/>
			<div className="fixed bottom-0 left-0 right-0">
				<TopBar />
			</div>
		</main>
	);
}
