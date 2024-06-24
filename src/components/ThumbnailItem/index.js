// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnail

  const presentImageclassName = isActive ? '' : 'present-image'

  const onChange = () => {
    changeImage(id)
  }

  return (
    <li>
      <button onClick={onChange} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`img ${presentImageclassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
