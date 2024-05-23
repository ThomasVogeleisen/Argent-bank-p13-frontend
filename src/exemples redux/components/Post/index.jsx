import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { isEmpty } from '../../utils/isEmpty'
import { useState } from 'react'
import { deletePost, editPost } from '../../actions/post.action'
import { Likes } from '../Likes'

export function Post({ datas }) {
  const user = useSelector((state) => state.userReducer)
  const [editToggle, setEditToggle] = useState(false)
  const [editContent, setEditContent] = useState(datas.content)
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    e.preventDefault()
    const postData = {
      title: datas.title,
      author: user.pseudo,
      content: editContent,
      likes: datas.likes,
      id: datas.id,
    }

    dispatch(editPost(postData))
    setEditToggle(false)
  }

  return (
    <div className="card">
      <p className="card-title">{datas.title}</p>
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <input
            type="text"
            autoFocus
            defaultValue={datas.content}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <input type="submit" value="Valider" />
        </form>
      ) : (
        <p>{datas.content}</p>
      )}
      <p className="card-author">{datas.author}</p>
      {/* Affiche le bouton supprimer uniquement si le nom d'utilisateur est Thomas */}
      {!isEmpty(user) && datas.author === user.pseudo && (
        <div>
          <button onClick={() => setEditToggle(!editToggle)}>EDIT</button>
          <button onClick={() => dispatch(deletePost(datas.id))}>Delete</button>
        </div>
      )}
      <Likes datas={datas} />
    </div>
  )
}
