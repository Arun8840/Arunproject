import React from "react"
import CardImage from "../Wrappers/card/CardImage"
import CardContent from "../Wrappers/card/CardContent"
import CardHeader from "../Wrappers/card/CardHeader"
import CardSubHeader from "../Wrappers/card/CardSubHeader"
import CardAction from "../Wrappers/card/CardAction"

interface CardPropsTypes {
  className: string
  header: string
  subHeader: string
  cardContent: string
  children: any
}
function Card(props: CardPropsTypes) {
  const { className, header, subHeader, cardContent, children } = props
  let defaultstyle = {
    cardcontainer: className
      ? className
      : `bg-white mx-auto w-[90%] h-full rounded-lg`,
  }

  return (
    <div
      className={`${defaultstyle.cardcontainer} flex flex-col justify-between`}
    >
      <div className="flex-1">
        {/* image container */}
        <CardImage>
          <img
            src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="cardImage"
            className="w-full h-full rounded object-cover"
          />
        </CardImage>
        {/* header and subheader */}

        <CardHeader>
          <h1 className="text-slate-800 font-semibold">Header</h1>
          <CardSubHeader>
            <span className="text-slate-500 text-sm">Sub header</span>
          </CardSubHeader>
        </CardHeader>

        {/* content */}
        <CardContent>
          <p className="text-slate-800 text-sm px-2  tracking-wide break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dignissimos suscipit distinctio
          </p>
        </CardContent>
      </div>

      {/* actions */}
      <CardAction>
        <button className="px-5 py-2 rounded-lg bg-zinc-100 text-slate-800">
          cancel
        </button>
        <button className="px-5 py-2 rounded-lg bg-zinc-800">View</button>
      </CardAction>
    </div>
  )
}

export default Card
