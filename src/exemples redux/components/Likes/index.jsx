import { useDispatch, useSelector } from 'react-redux'
import { addPostLike } from '../../actions/post.action'
import { addUserLike } from '../../actions/user.action'

export function Likes({ datas }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer)

  const handleLikes = () => {
    const postDatas = {
      title: datas.title,
      author: datas.author,
      content: datas.content,
      id: datas.id,
      likes: datas.likes + 1,
    }
    const userData = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    }

    dispatch(addPostLike(postDatas))
    dispatch(addUserLike(userData))
  }

  return (
    <>
      <button onClick={() => handleLikes()}>Like</button>
      <span> {datas.likes}</span>
    </>
  )
}
