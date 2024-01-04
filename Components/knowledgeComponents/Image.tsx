import { url } from "inspector"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
function Image({ Url }: any) {
  const [testBanner, setTestBanner] = useState("")

  useEffect(() => {
    // Dynamic import of the image
    import(`../images/${Url}`)
      .then((image) => {
        setTestBanner(image.default.src)
      })
      .catch((error) => {
        console.error("Error loading image:", error)
      })
  }, [])

  return <img src={testBanner} alt="bannerImage" className="w-1/3" />
}

export default Image
