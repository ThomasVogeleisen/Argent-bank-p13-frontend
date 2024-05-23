import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, getPost } from '../../actions/post.action'
import './style.css'

export const PostForm = () => {
  const form = useRef()
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const handleForm = async (e) => {
    e.preventDefault()

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    }

    await dispatch(addPost(postData))
    dispatch(getPost())
    form.current.reset()
  }

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Titre" />
        <input type="text" placeholder="Message..." />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}
