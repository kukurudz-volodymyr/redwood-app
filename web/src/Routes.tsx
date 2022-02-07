import { Router, Route, Set } from '@redwoodjs/router'
import TagsLayout from 'src/layouts/TagsLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={TagsLayout}>
        <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
        <Route path="/tags/{id:Int}/edit" page={TagEditTagPage} name="editTag" />
        <Route path="/tags/{id:Int}" page={TagTagPage} name="tag" />
        <Route path="/tags" page={TagTagsPage} name="tags" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
