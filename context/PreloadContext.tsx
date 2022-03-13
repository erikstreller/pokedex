import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

const PreloadContext = createContext<boolean>(false)

export function PreloadProvider({ children }: { children: ReactNode }) {
  /** If the dom is loaded */
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true)
    }, 200)
  }, [])

  return (
    <PreloadContext.Provider value={isPreloaded}>
      {children}
    </PreloadContext.Provider>
  )
}

export const usePreloadState = () => useContext(PreloadContext)
