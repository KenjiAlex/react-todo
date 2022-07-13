import { useEffect } from "react"
import OverlayScrollbars from "overlayscrollbars"
import 'overlayscrollbars/css/OverlayScrollbars.min.css'

const config = {
  className : 'os-theme-light ',
}

const useScrollbar = (root, isScroll) => {
  useEffect(() => {
    let scrollbars;

    if (root.current, isScroll) {
        scrollbars = OverlayScrollbars(root.current, config)
    }

    return() => {
      if (scrollbars) {
        scrollbars.destroy()
      }
    }
  }, [root, isScroll])
}

export {useScrollbar}