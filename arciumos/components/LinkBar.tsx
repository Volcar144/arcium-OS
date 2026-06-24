import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function LinkBar() {
	return (
		<div className="flex flex-row gap-3">
			<a href="https://github.com/Volcar144/arcium-OS">
				<Image
					src="/github-light.png"
					alt="github icon"
					width={32}
					height={32}
				/>
			</a>
			<a href="https://archiem.top">
				<ExternalLink aria-label="External link" />
			</a>
		</div>
	);
}
