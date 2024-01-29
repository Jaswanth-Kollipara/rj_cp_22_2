import './index.css'

const BlogItem = props => {
  const {contactDetails} = props
  const {title, description, publishedDate} = contactDetails
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  )
}

export default BlogItem
