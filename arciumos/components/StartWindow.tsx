"use client"

import { FileIcon } from "@primer/octicons-react";
import Logo from "./ArciumLogo";
import LinkBar from "./LinkBar";
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Button } from "./ui/button";
import CircleXFillIcon from "./CircleXFillIcon";

export default function StartWindow() {
	const nodeRef = useRef(null);
	const [isHidden, setIsHidden] = useState(false);

	if(isHidden) return (<div></div>);

	return (
		<Draggable nodeRef={nodeRef} handle=".drag-handle" cancel="button">
			<div className="flex flex-col items-stretch gap-0 bg-stone-100 border border-stone-300 rounded-md shadow-lg w-4/12 max-w-xl overflow-hidden " ref={nodeRef}>
				<div className="flex drag-handle flex-row gap-14 bg-stone-300 h-10 w-full items-center px-4 rounded-t-md cursor-move">
					<span className="flex items-center gap-1"><FileIcon /> <p>Welcome.txt</p></span>
					<Button variant={"ghost"} onClick={() => {setIsHidden(true)}}><CircleXFillIcon/></Button>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 p-4">
					<Logo />
					<h1 className="text-2xl font-bold">Welcome to ArciumOS</h1>
					<h2 className="text-xl">The most useful OS on the web</h2>
					<LinkBar />
				</div>
			</div>
		</Draggable>
	);
}
