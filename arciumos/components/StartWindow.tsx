"use client"

import Logo from "./ArciumLogo";
import LinkBar from "./LinkBar";
import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function StartWindow() {
	const nodeRef = useRef(null);

	return (
		<Draggable nodeRef={nodeRef}>
			<div className="flex flex-col items-center justify-center py-2 bg-stone-100 border border-black-300 border-solid h-1/12 w-4/12 rounded-md position-absolute" ref={nodeRef}>
				<Logo />
				<h1 className="text-2xl font-bold" ref={nodeRef}>Welcome to ArciumOS</h1>
				<h2 className="text-xl" ref={nodeRef}>The most useful OS on the web</h2>
				<LinkBar />
			</div>
		</Draggable>
	);
}
