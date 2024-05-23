import { useSelector } from 'react-redux'
import { isEmpty } from '../../utils/isEmpty'
import './style.css'

export function UserCard() {
  const user = useSelector((state) => state.userReducer)
  return (
    <div className="bloc-user">
      <h3>{!isEmpty(user) && user.pseudo}</h3>
      <p>Age {!isEmpty(user) && user.age} ans</p>
      <p>Likes : {!isEmpty(user) && user.likes}</p>
    </div>
  )
}
