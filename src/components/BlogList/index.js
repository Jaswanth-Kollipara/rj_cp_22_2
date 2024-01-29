import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const blogsList = props
  return (
    <div>
      <ul>
        {blogsList.map(eachContact => (
          <BlogItem key={eachContact.id} contactDetails={eachContact} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
