import Post from "@/components/posts/post";

export default function PostPage({ params: { slug } }: { params: { slug: string } }) {

    return <Post slug={slug} />
}
