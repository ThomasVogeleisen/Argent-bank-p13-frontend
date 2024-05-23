import './App.css'
import { UserCard } from './components/CardUser'
import { Post } from './components/Post'
import { useSelector } from 'react-redux'
import { isEmpty } from './utils/isEmpty'
import { PostForm } from './components/PostForm'

function App() {
  const posts = useSelector((state) => state.postReducer)
  return (
    <>
      <h1>REDUX TEST</h1>
      <PostForm />
      <div className="main">
        <div>
          {!isEmpty(posts) &&
            posts.map((post, index) => <Post key={index} datas={post} />)}
        </div>
        <UserCard />
      </div>
    </>
  )
}

export default App
