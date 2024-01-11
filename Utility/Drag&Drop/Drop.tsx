import { TodoStore } from "@/Store/TodoStore"
import { useDrop } from "react-dnd"

const DropFunction = ({ action }: any) => {
  const AddCompleted = TodoStore((state: any) => state.AddCompletedTask)
  let isLoading = false
  const [{ isover }, drop] = useDrop({
    accept: "todo",
    drop(item: any, monitor) {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
      if (action === "add") {
        AddCompleted(item)
      } else if (action === "delete") {
      }
    },
    collect: (monitor) => ({
      isover: monitor.isOver(),
    }),
  })

  return { drop, isover, isLoading }
}

export default DropFunction
