import dynamic from "next/dynamic"
import React from "react"

function page({ params }: { params: { projectPages: string } }) {
  let ProjectComponent = dynamic(
    () => import(`../../../Components/Projects/${params.projectPages}`)
  )
  return (
    <>
      <ProjectComponent />
    </>
  )
}

export default page
