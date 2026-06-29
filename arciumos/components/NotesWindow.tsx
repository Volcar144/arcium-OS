/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import { FileIcon } from "@primer/octicons-react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { AppWindowIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Logo from "./ArciumLogo";
import CircleXFillIcon from "./CircleXFillIcon";
import LinkBar from "./LinkBar";
import { Button } from "./ui/button";
import "./editor.scss";

export default function NotesWindow({
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

	const defaultText = 
	`
		<h1> Welcome to Arcium Notes </h1>
		Enter text to get started.
		Use markdown to format text
	`

	const nodeRef = useRef<HTMLDivElement | null>(null);
	const [text, setText] = useState(defaultText);
	const extensions = [Typography, Highlight, StarterKit];

	const editor = useEditor({
		extensions,
		content: text,
	});

	useEffect(() => {

		if (typeof window === "undefined") return;
		const savedText = localStorage.getItem("text");
		if (savedText) {
			setText(savedText);
			if (editor) {
				editor.commands.setContent(savedText);
			}
		}
	}, [editor]);

	useEffect(() => {
		if(text != defaultText){
			if (typeof window === "undefined") return;
			localStorage.setItem("text", text);
		}
	}, [text]);



	useEffect(() => {
		if (!editor) return;

		const handleUpdate = () => {
			setText(editor.getHTML());
		};

		editor.on("update", handleUpdate);
		return () => {
			editor.off("update", handleUpdate);
		};
	}, [editor]);

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef} handle=".drag-handle" cancel="button">
			<div
				ref={nodeRef}
				style={{ zIndex }}
				onMouseDown={onActivate}
				className="absolute flex flex-col items-stretch gap-0 bg-stone-100 border border-stone-300 rounded-md shadow-lg w-5/12 max-w-xl overflow-hidden"
			>
				<div
					className="flex drag-handle flex-row justify-between bg-stone-300 h-8 w-full items-center px-4 rounded-t-md cursor-move select-none"
					style={{ touchAction: "none" }}
				>
					<span className="flex items-center gap-1">
						<AppWindowIcon /> <p>Arcium Notes</p>
					</span>
					<Button variant={"ghost"} onClick={() => onClose?.()}>
						<CircleXFillIcon />
					</Button>
				</div>
				<div className="flex p-4 w-full h-full" >
					<EditorContent editor={editor} className="w-full" />
				</div>
			</div>
		</Draggable>
	);
}
