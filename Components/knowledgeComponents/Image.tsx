import { url } from "inspector"
import dynamic from "next/dynamic"
import Image from "next/image"
import React, { useEffect, useState } from "react"
function ImageViewer({ Url }: any) {
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
  }, [Url])

  return <Image src={testBanner} alt="bannerImage" width={150} height={100} />
}

export default ImageViewer
