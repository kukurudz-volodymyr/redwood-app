export const schema = gql`
  type PostTag {
    id: Int
    tag: Tag
    tagId: Int
    post: Post
    postId: Int
  }
`
