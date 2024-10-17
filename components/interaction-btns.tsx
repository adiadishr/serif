import { Bookmark, Heart, MessageSquare, Sparkle } from 'lucide-react'

const classes = "flex hover:text-foreground duration-300 items-center gap-2 cursor-pointer"

export function HeartBtn() {
    return (
        <div className={classes}>
            <Heart className='size-5' />
            <span>100</span>
        </div>
    )
}

export function CommentBtn() {
    return (
        <div className={classes}>
            <MessageSquare className='size-5' />
            <span>100</span>
        </div>
    )
}