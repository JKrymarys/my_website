import { BlogPost } from 'utils/types'

interface BlogPostItemProps {
  blogPostItem: BlogPost
}

export default function BlogPost({ blogPostItem: { title, link } }: BlogPostItemProps) {
  return (
    <div className="p-4 w-full">
      <a className="hover:text-blue-700 underline mx-1" href={link}>
        {title}
      </a>
    </div>
  )
}
