"use client"
import Button from "@/Utility/components/Button"
import Input from "@/Utility/components/Input"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { signIn, useSession } from "next-auth/react"
import { LoaderIcon } from "@/Utility/icons/icons"
import { SocialappStore } from "@/Store/SocialappStore"
import Notification from "@/Utility/Uicomponents/Notifications/Notification"

interface FormTypes {
  email: string
  password: string
}
function LoginPage() {
  const [isShowPass, setpass] = useState(false)
  const setNotification = SocialappStore((state: any) => state.setNotification)
  const { data, status }: any = useSession()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: {
      password: "arun123$",
    },
  })
  const router = useRouter()
  // todo handle login
  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    if (data) {
      try {
        const res: any = await signIn("credentials", {
          username: data?.email,
          password: data?.password,
          redirect: false,
        })
        if (res?.ok) {
          await setNotification(`Authenticated Successfully !!`)
        } else {
          await setNotification(`Authenticate Failed !!`)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  if (status === "loading") {
    return (
      <div className="w-full bg-[#09090b] min-h-screen grid place-items-center">
        <LoaderIcon />
      </div>
    )
  }
  if (status === "authenticated") {
    return router.push(`/socialapp/?id=${data?.user?.id}&tab=Messages`)
  }
  return (
    <>
      <Notification />
      <div className="bg-[#09090b] w-full min-h-screen grid place-items-center">
        <div className=" p-2 rounded-lg max-w-[400px] w-full">
          <h1 className="text-white text-3xl text-center pb-10 font-bold">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full rounded text-white"
          >
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
              handleShowPass={() => setpass(!isShowPass)}
            />

            <div className="pt-5 grid grid-cols-2  gap-2">
              <Button
                type="button"
                label="back"
                onClick={() => router.back()}
                className="bg-zinc-600 rounded-lg py-2"
              />
              <Button
                type="submit"
                label="Login"
                className="bg-pink-600 rounded-lg py-2 hover:shadow-lg hover:shadow-pink-600/40 transition-shadow duration-200"
              />
              <span className="col-span-2 py-2 text-center text-xs">
                Dont&lsquo; have account ?
              </span>
              <Button
                onClick={() => router.push("/signUp")}
                type="button"
                label="Sign-Up"
                className="bg-indigo-600 rounded-lg py-2 hover:shadow-lg hover:shadow-indigo-600/40 transition-shadow duration-200 col-span-2"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
