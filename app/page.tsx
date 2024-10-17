import NewestUsers from "@/components/home/newest-users";
import PostItem from "@/components/home/post-item";
import Posts from "@/components/home/posts";

export default function Home() {

  return (
    <section className="flex container py-8">
      <div className="flex flex-col w-full md:w-2/3 lg:w-3/4 md:pr-12">
        <ul>
          <Posts />
        </ul>
      </div>
      <div className="md:flex hidden flex-col md:w-1/3 lg:w-1/4 relative">
        <NewestUsers />
      </div>
    </section >
  )
}
