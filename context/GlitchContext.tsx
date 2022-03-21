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

  // readTooltip
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('readTooltip') ?? '')
    if (storedValue) {
      setReadTooltip(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('readTooltip', JSON.stringify(readTooltip))
  }, [readTooltip])

  // clickTeleport
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('clickTeleport') ?? '')
    if (storedValue) {
      setClickTeleport(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('clickTeleport', JSON.stringify(clickTeleport))
  }, [clickTeleport])

  // catchAbra
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('catchAbra') ?? '')
    if (storedValue) {
      setCatchAbra(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('catchAbra', JSON.stringify(catchAbra))
  }, [catchAbra])

  // teleportOut24
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('teleportOut24') ?? '')
    if (storedValue) {
      setTeleportOut24(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('teleportOut24', JSON.stringify(teleportOut24))
  }, [teleportOut24])

  // teleportOut25
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('teleportOut25') ?? '')
    if (storedValue) {
      setTeleportOut25(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('teleportOut25', JSON.stringify(teleportOut25))
  }, [teleportOut25])

  // showMew
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem('showMew') ?? '')
    if (storedValue) {
      setShowMew(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('showMew', JSON.stringify(showMew))
  }, [showMew])

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
