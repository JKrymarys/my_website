import { BlogPost } from 'utils/types'

interface BlogPostItemProps {
  item: BlogPost
}

export default function BlogPostItem({ item: { title, link } }: BlogPostItemProps) {
  return (
    <div className="p-4 w-full">
      <a className="hover:text-blue-700 underline mx-1" href={link}>
        {title}
      </a>
    </div>
  )
}
