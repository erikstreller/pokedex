import { createContext, useContext, useEffect, useState } from 'react'

export default function useLoaded() {
  const preloaded = useContext(createContext<boolean>(false))
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (preloaded) {
      setIsLoaded(true)
    } else {
      setTimeout(() => {
        setIsLoaded(true)
      }, 200)
    }
  }, [preloaded])

  return isLoaded
}
