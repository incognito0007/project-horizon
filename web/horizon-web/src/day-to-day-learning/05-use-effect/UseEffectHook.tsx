import { useEffect } from 'react'

export default function UseEffectHook() {
  useEffect(() => {
    // side effect logic goes here
    console.log('useEffect hook is running')

    //We will look into cleanup function in the next section when we will discuss about component unmounting and cleanup logic.
    // return () => {
    //   // cleanup logic goes here
    //   console.log('Cleaning up resources')
    // }
  }, [])

  return (
    <div className="component">
      <h2>UseEffect Hook</h2>
      <p>
        The useEffect hook is a powerful tool in React that allows you to perform side effects in
        your functional components. It serves as a replacement for lifecycle methods like
        componentDidMount, componentDidUpdate, and componentWillUnmount in class components. With
        useEffect, you can manage tasks such as data fetching, subscriptions, and manually changing
        the DOM.
      </p>
      <p>
        The useEffect hook takes two arguments: a function that contains the side effect logic and
        an optional dependency array. The function will be executed after the component renders, and
        it can return a cleanup function to clean up any resources when the component unmounts or
        before the effect runs again.
      </p>
      <p>
        By using the dependency array, you can control when the effect runs. If you provide an empty
        array, the effect will only run once after the initial render. If you include specific
        variables in the array, the effect will run whenever those variables change. If you omit the
        dependency array, the effect will run after every render, which can lead to performance
        issues if not used carefully.
      </p>
    </div>
  )
}
