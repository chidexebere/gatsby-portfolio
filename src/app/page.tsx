import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className=''>
      <div className='container flex max-w-3xl flex-col gap-y-20'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  )
}
