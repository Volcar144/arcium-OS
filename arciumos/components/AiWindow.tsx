/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Logo from "./ArciumLogo";
import CircleXFillIcon from "./CircleXFillIcon";
import LinkBar from "./LinkBar";
import { Button } from "./ui/button";
import { AppWindowIcon } from "lucide-react";
import { CopilotIcon } from "@primer/octicons-react";

export default function StartWindow({
	id,
	isOpen = true,
	zIndex,
	onActivate,
	onClose,
}: {
	id: string;
	zIndex: number;
	isOpen?: boolean;
	onActivate?: () => void;
	onClose?: () => void;
}) {
	const nodeRef = useRef<HTMLDivElement | null>(null);

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef} handle=".drag-handle" cancel="button" defaultPosition={{ x: 32, y: 24 }}>
			<div
				ref={nodeRef}
				style={{ zIndex }}
				onMouseDown={onActivate}
				className="absolute flex flex-col items-stretch gap-0 bg-stone-100 border border-stone-300 rounded-md shadow-lg w-4/12 max-w-xl overflow-hidden"
			>
				<div
					className="flex drag-handle flex-row justify-between bg-stone-300 h-8 w-full items-center px-4 rounded-t-md cursor-move select-none"
					onMouseDown={onActivate}
					style={{ touchAction: "none" }}
				>
					<span className="flex items-center gap-1">
						<CopilotIcon /> <p>Ai Chat</p>
					</span>
					<Button variant={"ghost"} onClick={() => onClose?.()}>
						<CircleXFillIcon />
					</Button>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 p-4">
					
				</div>
			</div>
		</Draggable>
	);
}
