import NewPostForm from "@/components/write/new-post-form";

export default async function Write() {
  return (
    <section className='container max-w-3xl py-12 sm:py-20'>
      <h1 className='mb-10 text-center font-serif text-5xl font-bold'>
        New Post
      </h1>
      <NewPostForm />
    </section>
  )
}
