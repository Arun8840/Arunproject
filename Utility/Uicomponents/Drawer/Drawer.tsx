import Button from "@/Utility/components/Button"
import Input from "@/Utility/components/Input"
import getSocialAppServices from "@/service/SocialAppService"
import Image from "next/image"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

interface FormTypes {
  name: string
  email: string
  password: string
  theme: any
  profileImage: number
}
function Drawer({ children, handleCloseDrawer }: any) {
  const [isShowPass, setPass] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>()
  const [selectedProfile, setProfile] = useState(0)
  const { CreateUser } = getSocialAppServices()

  // todo handle login
  const selectProfile = (profileID: number) => {
    setProfile(profileID)
  }

  const handleSignUp: SubmitHandler<FormTypes> = async (data) => {
    if (data) {
      let newUserData = { ...data, profileImage: selectedProfile }
      let response = await CreateUser(newUserData)
      response && handleCloseDrawer()
      response && reset()
      response && mutate("/api/user-friends")
    }
  }

  return (
    <>
      {children}
      <div
        id="drawerContainer"
        className="bg-black/20 backdrop-blur-lg fixed bottom-0 left-0 right-0 h-full z-10 opacity-0 hidden justify-center items-center overflow-hidden"
      >
        <div className=" p-2 rounded-lg max-w-[400px] w-full">
          <h1 className="text-white text-3xl text-center pb-10 font-bold">
            Create Friend
          </h1>
          <ul className="p-2 grid grid-cols-4 gap-2 justify-items-center">
            {Array.from({ length: 8 }).map((item, index) => {
              return (
                <li
                  onClick={() => selectProfile(index + 1)}
                  key={index + 1}
                  className="w-[80px] h-[80px] border border-stone-600 rounded-full overflow-hidden cursor-pointer hover:bg-stone-900 transition-colors duration-150"
                >
                  <Image
                    src={`https://robohash.org/${index + 1}`}
                    alt="profile image"
                    className="w-full h-full object-contain"
                    width={100}
                    height={100}
                  />
                </li>
              )
            })}
          </ul>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="w-full h-full rounded text-white"
          >
            <label htmlFor="name" className="py-3 block">
              Name :
              <small className="capitalize tracking-wide text-red-500 px-2">
                {errors?.name?.message}
              </small>
            </label>
            <Input
              register={register}
              required={true}
              name="name"
              className={`border ${
                errors?.name?.message ? "border-red-500" : "border-[#27272a]"
              } rounded-lg p-2 outline-none bg-inherit w-full`}
              type="text"
            />
            <label htmlFor="email" className="py-3 block">
              Email :
              <small className="capitalize tracking-wide text-red-500 px-2">
                {errors?.email?.message}
              </small>
            </label>
            <Input
              register={register}
              required={true}
              pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              name="email"
              className={`border ${
                errors?.email?.message ? "border-red-500" : "border-[#27272a]"
              } rounded-lg p-2 outline-none bg-inherit w-full`}
              type="text"
            />

            <label htmlFor="password" className="py-3 block">
              Password :{" "}
              <small className="capitalize tracking-wide text-red-500 px-2">
                {errors?.password?.message}
              </small>
            </label>
            <Input
              register={register}
              required={true}
              pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/}
              name="password"
              className={`border ${
                errors?.password?.message
                  ? "border-red-500"
                  : "border-[#27272a]"
              } rounded-lg p-2 outline-none  bg-inherit w-full ${
                isShowPass ? "text-white" : "text-pink-600"
              }`}
              type={isShowPass ? "text" : "password"}
              handleShowPass={() => setPass(!isShowPass)}
            />

            <div className="pt-5 grid grid-cols-2  gap-2">
              <Button
                onClick={() => handleCloseDrawer()}
                type="button"
                label="Cancel"
                className="bg-gray-600 rounded-lg flex-1 py-2 transition-shadow duration-200"
              />
              <Button
                type="submit"
                label="Create"
                className="bg-pink-600 rounded-lg flex-1 py-2 hover:shadow-lg hover:shadow-pink-600/40 transition-shadow duration-200"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Drawer
