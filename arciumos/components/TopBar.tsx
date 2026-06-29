"use client";

import { useEffect, useState } from "react";

export function TopBar() {
	const [currentTime, setTime] = useState(new Date());

	useEffect(() => {
		const updateTime = () => setTime(new Date());
		const now = new Date();
		const msUntilNextMinute =
			(60 - now.getSeconds()) * 1000 - now.getMilliseconds();

		let intervalId: number | undefined;
		const timeoutId = window.setTimeout(() => {
			updateTime();
			intervalId = window.setInterval(updateTime, 60000);
		}, msUntilNextMinute);

		return () => {
			window.clearTimeout(timeoutId);
			if (intervalId !== undefined) {
				window.clearInterval(intervalId);
			}
		};
	}, []);

	return (
		<div className="w-full h-12 flex flex-row justify-between bg-blue-100 opacity-70 backdrop-blur-md px-4 py-2">
			<p className="text-l">ArciumOS</p>
			<p className="text-xl">
				{currentTime.toLocaleTimeString([], {
					hour: "numeric",
					minute: "2-digit",
				})}
			</p>
		</div>
	);
}
