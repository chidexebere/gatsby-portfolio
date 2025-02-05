import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className=''>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12 text-green-600'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
