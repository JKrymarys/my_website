import Head from 'next/head'

import BlogPostItem from 'components/BlogPostItem'
import { BlogPost } from 'utils/types'

const posts: BlogPost[] = [
  {
    type: 'external',
    link:
      'https://geek.justjoin.it/jak-zabezpieczyc-projekt-przed-przypadkowymi-bledami-przy-uzyciu-narzedzi-eslint-prettier-i-husky',
    title:
      'Jak zabezpieczyć projekt przed przypadkowymi błędami przy użyciu narzędzi ESLint, Prettier i Husky',
  },
]

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles - jkrymarys.pl</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-4 text-xl">Blog posts</h2>
        <div className="w-full divide-y divide-grey-400 items-start">
          {posts.map((item: BlogPost, id: number) => (
            <BlogPostItem blogPostItem={item} key={id} />
          ))}
        </div>
      </div>
    </>
  )
}
