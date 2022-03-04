import React from "react"

export default function useSpacePad() {
     const [state, setstate] = React.useState(false)
     React.useEffect(() => {
          const handle = (e) => {
               if (e.keyCode === 32) setstate((state) => !state)
          }
          document.addEventListener("keyup", handle)
          return () => document.removeEventListener("keyup", handle)
     }, [])
     return state
}
