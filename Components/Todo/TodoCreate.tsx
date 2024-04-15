import { TodoStore } from "@/Store/TodoStore"
import Switch from "@/Utility/components/Switch"
import { CalendarIcon } from "@/Utility/icons/icons"
import todoAppServices from "@/service/TodoService"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface formTypes {
  title: string
  content: string
  date: string
  time: string
  priority: boolean
}
function TodoCreate() {
  const AddnewTask = TodoStore((state: any) => state.AddTask)
  const {create_Todo}=todoAppServices()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<formTypes>()
  const currentDate = new Date()
  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    // if (data) {
    //   let taskData = {
    //     ...data,
    //     complete: false,
    //     date: `${currentDate?.getFullYear()}/${currentDate?.getMonth()}/${currentDate?.getDate()}`,
    //   }
    //   AddnewTask(taskData)
    //   reset({
    //     title: "",
    //     content: "",
    //     date: "",
    //     priority: false,
    //   })
    // }
    if (data) {
      let createData={
        title:data?.date,
        description:data?.content,
        isPriority:data?.priority
      }
      let response=await create_Todo(createData)
    }
  }
  return (
    <div className="col-span-2 p-1 flex flex-col gap-1 bg-white/50 backdrop-blur-sm rounded-lg">
      <div className="tracking-wider text-[#5b33d9] bg-[#f6f8fa] font-semibold p-2 rounded flex items-center justify-between">
        <h1>Today</h1>
        <CalendarIcon width={20} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-1"
      >
        <input
          type="text"
          className={`border ${errors?.title&&"border-red-500"} w-full p-2 rounded outline-none`}
          placeholder="Title"
          {...register("title", {
            required: true,
          })}
        />
        <textarea
          className="border w-full p-2 rounded outline-none"
          placeholder="Description"
          {...register("content", {
            required: false,
          })}
        />
        <div className=" flex justify-between">
          <h1 className="text-sm">Is this main priority ?</h1>
          <Switch
            varient="#202020"
            handleAction={(e) => setValue("priority", e)}
          />
        </div>
        <button className="tracking-wider text-center bg-[#101010] text-[#f6f8fa] font-medium p-2 rounded">
          Create
        </button>
      </form>
    </div>
  )
}

export default TodoCreate
