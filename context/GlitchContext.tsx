import { createContext, ReactNode, useEffect, useState } from 'react'

const GlitchContext = createContext(null)

export function GlitchProvider({ children }: { children: ReactNode }) {
  const [readTooltip, setReadTooltip] = useState<boolean>(false)
  const [clickTeleport, setClickTeleport] = useState<boolean>(false)
  const [catchAbra, setCatchAbra] = useState<boolean>(false)
  const [teleportOut24, setTeleportOut24] = useState<boolean>(false)
  const [teleportOut25, setTeleportOut25] = useState<boolean>(false)
  const [showMew, setShowMew] = useState<boolean>(false)

  useEffect(() => {
    if (teleportOut24 === true && teleportOut25 === true) {
      setShowMew(true)
    }
  }, [teleportOut24, teleportOut25])

  return (
    <GlitchContext.Provider
      value={{
        readTooltip,
        setReadTooltip,
        clickTeleport,
        setClickTeleport,
        catchAbra,
        setCatchAbra,
        teleportOut24,
        setTeleportOut24,
        teleportOut25,
        setTeleportOut25,
        showMew,
        setShowMew
      }}
    >
      {children}
    </GlitchContext.Provider>
  )
}

export default GlitchContext
