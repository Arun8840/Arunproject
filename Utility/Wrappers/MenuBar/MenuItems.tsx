import React from 'react'

interface MenusItemsTypes{
    children:any
}
function MenuItems(props:MenusItemsTypes) {
    // todo props items
    const{children}=props
  return (
    <>{children}</>
  )
}

export default MenuItems