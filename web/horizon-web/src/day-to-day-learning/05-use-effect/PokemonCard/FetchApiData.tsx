import { useEffect, useState } from 'react'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const FetchApiData = () => {
  const [apiData, setApiData] = useState<Post[]>([])

  // This is the correct way to fetch data in a React component, as it ensures that the fetch call is only made once when the component mounts, and not on every re-render. By using the useEffect hook with an empty dependency array, we can control when the fetch call is made and avoid unnecessary API calls that can lead to performance issues.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setApiData(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="component">
      <ul>
        {apiData.map((currData: Post) => (
          <li key={currData.id}>{currData.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchApiData
