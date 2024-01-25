import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const slug = params.slug
  const page = await getPage(slug)
  return (
    <div>
      <h1 className="ml-6 drop-shadow text-3xl font-bold">{page.title}</h1>

      <div className="max-w-3xl text-center mt-12 text-xl mx-auto ">
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
export const dynamic = 'force-dynamic'
