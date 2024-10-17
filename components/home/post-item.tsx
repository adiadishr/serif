import Image from "next/image";
import Link from "next/link";

import { Post } from '@/lib/types'
import { combineName, formatDate } from '@/lib/utils'


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from "../ui/separator";
import { Bookmark, Heart, MessageSquare, Sparkle } from 'lucide-react'

export default function PostItem({ post }: { post: Post }) {
    return (
        <li className="mb-4 pb-10 pt-5 sm:border-b">
            <Link href={`/posts/${post.slug}`} className="flex flex-col w-full sm:dark:hover:bg-muted/35 sm:hover:bg-muted sm:p-4 rounded-lg duration-300">
                {/* User */}
                <div className="flex w-full items-center gap-4">
                    <Avatar className='size-6'>
                        <AvatarImage
                            src={post.author?.imageUrl}
                            alt={combineName(post.author)}
                        />
                        <AvatarFallback>{post.author?.firstName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">
                        {combineName(post.author)}
                    </span>
                </div>
                {/* Post Details */}
                <div className='mt-2 flex w-full flex-col-reverse gap-x-10 sm:mt-4 sm:flex-row sm:items-center'>
                    {/* Text */}
                    <div className='mt-4 w-full sm:mt-0 sm:w-3/4'>
                        {/* Details */}
                        <div className='space-y-1'>
                            <h3 className='font-serif text-xl font-bold'>{post.title}</h3>
                            <p className='text-sm text-muted-foreground'>{post.excerpt}</p>
                        </div>
                        {/* Interactions */}
                        <div className='mt-7 flex items-center justify-between text-sm text-muted-foreground'>
                            <div className='flex w-full flex-col sm:flex-row sm:items-center items-start gap-4'>
                                <div className="flex items-center gap-4 min-w-max">
                                    <Sparkle className='size-4 fill-yellow-500 text-yellow-500' />
                                    <span>{formatDate(post._creationTime)}</span>
                                </div>
                                <Separator orientation='vertical' className='h-4 hidden sm:block' />
                                <Separator orientation='horizontal' className='sm:hidden block' />
                                <div className='flex items-center justify-between sm:justify-start gap-4 w-full'>
                                    <div className="flex items-center gap-4">
                                        <div className='flex items-center z-10 hover:text-foreground duration-300 gap-2'>
                                            <Heart className='size-5' />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className='flex items-center z-10 hover:text-foreground duration-300 gap-2'>
                                            <MessageSquare className='size-5' />
                                            <span>28</span>
                                        </div>
                                    </div>
                                    <Bookmark className='size-5 hover:text-foreground duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className='relative aspect-video mt-2 sm:mt-0 w-full sm:w-1/3'>
                        {post.coverImageUrl && (
                            <Image
                                alt=''
                                src={post.coverImageUrl}
                                className='h-full w-full rounded-md object-cover'
                                fill
                            />
                        )}
                    </div>
                </div>
            </Link>
        </li>
    )
}