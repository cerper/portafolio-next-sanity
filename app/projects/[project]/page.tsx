import { getProject } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project

  const project = await getProject(slug)
  return (
    <div>
      <header className="py-10 flex justify-center items-center gap-5  md:ml-10">
        <h1 className="  text-5xl font-extrabold text-green-400 bg-clip-text ">
          {project.name}
        </h1>
        <a
          className=" bg-gray-100 rounded-lg text-black font-bold py-4 px-1 whitespace-nowrap hover:bg-green-400 "
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the project
        </a>
      </header>
      <div className="max-w-3xl text-center mt-12 text-xl mx-auto ">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={600}
        height={400}
        className="block max-w-full min-h-[50vh] mt-10 border-2 mx-auto border-gray-700 text-lg object-cover rounded-lg text-center"
      />
    </div>
  )
}

export const dynamic = 'force-dynamic'
