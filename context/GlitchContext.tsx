import { createContext, ReactNode, useState } from 'react'

const GlitchContext = createContext(null)

export function GlitchProvider({ children }: { children: ReactNode }) {
  const [readTooltip, setReadTooltip] = useState<boolean>(true)
  const [clickTeleport, setClickTeleport] = useState<boolean>(true)
  const [catchAbra, setCatchAbra] = useState<boolean>(true)
  const [teleportOut24, setTeleportOut24] = useState<boolean>(true)
  const [teleportOut25, setTeleportOut25] = useState<boolean>(true)

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
        setTeleportOut25
      }}
    >
      {children}
    </GlitchContext.Provider>
  )
}

export default GlitchContext
