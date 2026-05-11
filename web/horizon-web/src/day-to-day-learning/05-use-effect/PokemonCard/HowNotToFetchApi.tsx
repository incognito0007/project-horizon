import { useState } from 'react'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState<Post[]>([])

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      // Not adding this component on App.tsx, because it will cause an infinite loop of fetching data and updating state, causing performance issues and potentially crashing the application.
      setApiData(data)
      // You can see in your network tab that the API is being called multiple times, which is not ideal. This is because the fetch call is inside the component body, and every time the component re-renders, it triggers a new fetch call. this will lead to an infinite loop of fetching data and updating state, causing performance issues and potentially crashing the application.
    })
    .catch(error => console.error('Error fetching data:', error))

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

export default HowNotToFetchApi
