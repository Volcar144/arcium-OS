import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src="/arciumos.png"
			alt="ArciumOS Logo"
			width={200}
			height={200}
			priority
		/>
	);
}
