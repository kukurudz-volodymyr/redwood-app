import type { HomePagePostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query HomePagePostsQuery {
    posts {
      id
      title
      body
      author {
        avatar
        firstName
        lastName
      }
      postTag {
        tag {
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<HomePagePostsQuery>) => {
  return (
    <ul>
      {posts.map((item, index) => {
        return (
          <div className="m-8" key={index}>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 ">
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={item.author.avatar}
                alt=""
                width="350"
                height="350"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">“{item.body}”</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {`${item.author.firstName} ${item.author.lastName}`}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    {(item.postTag || [])
                      .map((postTag) => postTag.tag.name)
                      .join(', ')}
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        )
      })}
    </ul>
  )
}
