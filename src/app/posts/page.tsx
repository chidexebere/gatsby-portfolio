import PostsWithSearch from '@/components/posts-with-search'
import { getPosts } from '@/lib/posts'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className=''>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12 text-green-600'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
