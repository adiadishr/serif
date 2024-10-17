'use client'

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Bookmark, CirclePlay, Heart, MessageSquare, MoreHorizontal, Share, Sparkle } from 'lucide-react'
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { combineName, formatDate } from '@/lib/utils'
import Editor from '@/components/editor/editor'
import { notFound } from "next/navigation"
import { Spinner } from '@/components/ui/spinner'

export default function Post({ slug }: { slug: string }) {
    const post = useQuery(api.posts.getPostBySlug, { slug })
    const likePost = useMutation(api.posts.likePost)
    if (post === null) {
        notFound()
    }
    if (!post) {
        return (
            <section className='container flex max-w-3xl items-center justify-center'>
                <Spinner size='lg' />
            </section>
        )
    }
    return (
        <section className="flex flex-col container py-12 sm:py-20 max-w-3xl">
            {/* Title & Excerpt */}
            <h1 className='font-serif text-3xl font-bold'>{post.title}</h1>
            <p className='mt-3 text-muted-foreground'>{post.excerpt}</p>
            {/* User Details and Metadata */}
            <div className='mt-6 inline-flex items-center gap-3'>
                <Avatar>
                    <AvatarImage src={post.author?.imageUrl} alt={combineName(post.author)} />
                    <AvatarFallback>{post.author?.firstName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h5 className='font-light'>{combineName(post.author)}</h5>
                    <p className="text-sm font-light text-muted-foreground"> {formatDate(post._creationTime)}</p>
                </div>
            </div>
            {/* Interactions */}
            <div className='mt-6 flex w-full items-center justify-between border-y px-4 py-3 text-muted-foreground'>
                <div className='flex items-center gap-4'>
                    <div className="flex hover:text-foreground duration-300 items-center gap-2 cursor-pointer">
                        <Heart className='size-5' />
                        <span>{post.likes}</span>
                    </div>
                    <button
                        className="flex hover:text-foreground duration-300 items-center gap-2 cursor-pointer"
                        onClick={async () => await likePost({ slug: post.slug })}
                    >
                        <MessageSquare className='size-5' />
                        <span>100</span>
                    </button>
                </div>
                <div className='flex items-center gap-4'>
                    <CirclePlay className='size-5 hover:text-foreground duration-300 cursor-pointer' />
                    <Bookmark className='size-5 hover:text-foreground duration-300 cursor-pointer' />
                    <Share className='size-5 hover:text-foreground duration-300 cursor-pointer' />
                    <MoreHorizontal className='size-5 hover:text-foreground duration-300 cursor-pointer' />
                </div>
            </div>
            <div className='mt-16'>
                <div className="relative flex aspect-video w-full">
                    <Image src={post.coverImageUrl || '/serif-blog.jpg'} alt={post.title} fill className="object-cover" />
                </div>
                <div className='mt-10'>
                    <Editor post={post} editable={false} />
                </div>
            </div>
        </section>
    )
}