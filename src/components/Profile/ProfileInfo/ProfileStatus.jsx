import {
  useEffect,
  useState
} from 'react'

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(`${props.status}`)
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(edit => !edit)
  }

  const onChangeStatus = (event) => {
    setStatus(event.target.value)
  }

  const sendStatus = () => {
    props.updateStatus(status)
    toggleEditMode()
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {!editMode
        ? <div>
          <span onDoubleClick={toggleEditMode}>{props.status}</span>
        </div>
        : <div>
          <input autoFocus={true} onChange={(event) => onChangeStatus(event)} value={status}/>
          <button onClick={sendStatus}>Сохранить</button>
        </div>
      }


    </div>
  )
}

export default ProfileStatus