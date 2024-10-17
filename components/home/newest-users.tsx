"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "../ui/spinner";
import { formatDate, getTimeAgo } from "@/lib/utils";

export default function NewestUsers() {
    const users = useQuery(api.users.getRecentUsers);

    return (
        <div className="flex flex-col h-max font-serif border dark:border-muted rounded-lg shadow-lg px-4 xl:px-8 py-6 sticky top-[80px] duration-500 transition-all">
            <h1 className="font-bold flex mb-4">Newest Members:</h1>
            <div className="flex flex-col">
                {!users && <Spinner />}
                {users?.map(user => (
                    <Link href="/wip" key={user.clerkUserId} className="py-2 flex items-center space-x-4 duration-300 hover:bg-muted px-4 rounded">
                        <div className="size-8 flex rounded-full overflow-hidden relative">
                            <Image
                                src={user.imageUrl || ""}
                                alt={user.firstName + " " + user.lastName + "'s profile picture"}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-sans"> {user.firstName + " " + user.lastName}</p>
                            <p className="text-xs font-sans text-muted-foreground">Joined {getTimeAgo(user._creationTime)}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href="/wip" className="text-sm hover:text-green-600 duration-300 text-green-800 flex gap-2 font-sans mt-6 items-center group">
                View All Members
                <ArrowRightIcon className="w-4 h-4 group-hover:rotate-[-45deg] duration-300" />
            </Link>
        </div >
    )
}