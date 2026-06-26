import Image from "next/image";


export function AppIcon({
    appName,
    imageSrc,
    onClick,
}: {
    appName: string;
    imageSrc: string;
    onClick: () => void;
}){

    return(
        <div onClick={onClick} className="flex flex-col gap-2 rounded-xl bg-stone-200/0 hover:bg-stone-200/40 transition-all duration-200 w-20 h-20 p-2 cursor-pointer">
            <Image
                src={imageSrc}
                alt={appName}
                height={64}
                width={64}
            />
            <p className="text-xs" style={{textShadow: '0 0 2px white, 0 0 4px white'}}>{appName}</p>
        </div>
    )

}