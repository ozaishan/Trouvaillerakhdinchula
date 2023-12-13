"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from "next/font/google"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, BadgeInfo, } from 'lucide-react';
import { usePathname } from 'next/navigation';

const montserratt = Montserrat ({ weight: "600", subsets : ["latin"] })

const routes = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
		color: "text-sky-500",
	},
	{
		label: "Conversation",
		icon: MessageSquare,
		href: "/conversation",
		color: "text-violet-500",
	},
	{
		label: "Code Generator",
		icon: Code,
		href: "/code",
		color: "text-green-700",
	},
	{
		label: "Image Generator",
		icon: ImageIcon,
		href: "/image",
		color: "text-pink-700",
	},
	{
		label: "Music Generator",
		icon: Music,
		href: "/music",
		color: "text-emerald-500",
	},
	{
		label: "Video Generator",
		icon: VideoIcon,
		href: "/video",
		color: "text-orange-700",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
	},
	{
		label: "About Us",
		icon: BadgeInfo,
		href: "/about-us",
	},
];
const marketing = [
	{
		icon : FacebookIcon,
		href: "https://www.facebook.com/love.sainju.1",
		color: "text-blue-800",
	},
	{
		icon: TwitterIcon,
		href: "https://twitter.com/showshant",
		color: "text-blue-400",
	},
	{
		icon: InstagramIcon,
		href: "https://www.instagram.com/ozaishan/",
		color: "text-pink-700",
	},
	{
		icon: LinkedinIcon,
		href: "https://www.linkedin.com/jobs/search?keywords=&location=Nepal&locationId=&geoId=104630404&f_TPR=&f_JT=I&position=1&pageNum=0",
		color: "text-blue-500",
	},
];
const Sidebar = () => {
const pathname = usePathname();
return (
	<div className="flex flex-col h-full bg-[#111827] text-white">
	<div className="px-3 py-2 flex-1 space-y-4 py-4">
		<Link href="/dashboard" className="flex items-center pl-3 mb-14">
			<div className="relative w-8 h-8 mr-4">
				<Image fill alt="Logo" src="/logo.png" />
			</div>
			<h1 className="text-2xl font-bold">
				Trouvaille
			</h1>
		</Link>
		<div className="space-y-1">
			{routes.map((route)=>(
				<Link 
				href={route.href}
				key={route.href}
				className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hevr:text-white hover:bg-white/10 rounded-lg transition",
				pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
				)}
				>
					<div className="flex items-center flex-1">
						<route.icon className={cn("h-5 w-5 mr-3", route.color)} />
						{route.label}
					</div>
				</Link>
			))}
		</div>
		</div>
		<div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                {marketing.map((mark) => (
                    <Link
                        href={mark.href}
                        key={mark.href}
                        className={cn(
                            "group flex p-3 w-12 h-10 cursor-pointer hover:bg-white/10 rounded-lg transition",
                            pathname === mark.href ? "text-white bg-white/10" : "text-zinc-400"
                        )}
                    >
                        <div className="flex items-center">
                            <mark.icon className={cn("h-7 w-7 mr-3", mark.color)} />
                        </div>
                    </Link>
                ))}
            </div>
	</div>
);

}

export default Sidebar;



