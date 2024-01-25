import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      <h1 className="text-6xl p-8">
        Hello I`m{' '}
        <span className="bg-gradient-to-r from-red-500 via-red-400 to-purple-600 bg-clip-text text-transparent">
          David Lovera
        </span>
      </h1>
      <p className="mt-5 text-3xl max-w-3xl text-center mx-auto ">
        I`m a full-stack developer with JavaScript i use the framework NextJS to
        create web-app with more capacity to scale and optimized his content to
        be found using{' '}
        <span className="bg-gradient-to-r from-red-700 via-orange-700 to-black bg-clip-text text-transparent">
          SEO
        </span>{' '}
        in the the pages
      </p>
      <p className="mt-4 text-2xl">Check Out my projects</p>
      <h2 className="mt-10 font-bold text-grey-600 text-3xl">My Projects:</h2>
      <div className="ml-3 px-8 grid grid-cols-1   lg:grid-cols-2 gap-8 ">
        {projects.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className=" mt-8  rounded-lg lg:ml-20 hover:scale-110"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={200}
                className="  object-cover rounded-lg  mt-4 mb-4 text-center"
              />
            )}
            <div className="text-center mr-12 sm:ml-10 font-extrabold bg-gradient-to-r from-red-400 via-red-600 to-purple-800 bg-clip-text text-transparent ">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export const dynamic = 'force-dynamic'
