import Input from "@/Utility/components/Input"
import { Close } from "@/Utility/icons/icons"
import getSocialAppServices from "@/service/SocialAppService"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

interface formTypes {
  name: string
  email: string
  profileImage: string
  description: string
  theme: boolean
}
function Drawer({ children, handleCloseDrawer }: any) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<formTypes>()
  const { CreateUser } = getSocialAppServices()
  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    if (data) {
      let userData = {
        ...data,
        theme: "",
        profileImage: "",
      }
      let response = await CreateUser(userData)
      response && mutate("/api/user")
      response && handleCloseDrawer()
    }
  }
  return (
    <>
      {children}
      <div
        id="drawerContainer"
        className="bg-white/20 backdrop-blur-sm fixed bottom-0 left-0 right-0 h-full z-10 opacity-0 hidden items-end overflow-hidden "
      >
        {/* //todo form */}
        <div
          id="drawerForm"
          className="w-full h-1/2 bg-black translate-y-[100%]"
        >
          <div className="flex justify-end p-3">
            <button onClick={handleCloseDrawer}>
              <Close width={25} className="text-white" />
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container mx-auto flex gap-2"
          >
            <div className="min-h-[300px] min-w-[300px] bg-white rounded-full"></div>
            <div className=" flex flex-col gap-1 w-1/2 p-2 h-fit">
              <Input
                name="name"
                type="text"
                placeholder="name"
                register={register}
                className=" bg-inherit border-b p-2 w-full outline-none text-white"
                required={true}
              />
              <Input
                name="email"
                type="text"
                placeholder="email"
                register={register}
                className=" bg-inherit border-b p-2 w-full outline-none text-white"
                required={true}
              />
              <Input
                name="description"
                type="text"
                placeholder="description"
                register={register}
                className=" bg-inherit border-b p-2 w-full flex-1 h-full outline-none text-white"
                required={true}
              />
              <div className="flex gap-2 justify-end p-4">
                <button
                  onClick={handleCloseDrawer}
                  className="rounded-lg py-1 px-5 bg-slate-600 "
                >
                  Cancel
                </button>
                <button className="rounded-lg py-1 px-5 bg-pink-600 ">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Drawer
