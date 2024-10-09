"use client"
import Button from "@/Utility/components/Button"
import Input from "@/Utility/components/Input"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { signIn, useSession } from "next-auth/react"
import { LoaderIcon, MessageIcon } from "@/Utility/icons/icons"
import { SocialappStore } from "@/Store/SocialappStore"
import Notification from "@/Utility/Uicomponents/Notifications/Notification"
import useGetFonts from "@/font/fonts"
interface FormTypes {
  email: string
  password: string
}
function LoginPage() {
  const [isShowPass, setpass] = useState(false)
  const { ContentFont, HeaderFont } = useGetFonts()
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
      <div className="bg-white w-full min-h-screen grid place-items-center   gap-1 p-3">
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="hidden lg:block bg-white max-w-[400px]"></div>
          <div className="grid place-items-center p-3 bg-white w-full">
            <div className="min-w-[400px]">
              <h1
                className={`text-[3rem] text-center py-2 lg:py-5 font-bold text-[#42434d] ${HeaderFont.className}`}
              >
                Sign In
              </h1>
              <p
                className={`text-center text-[#7c7e8d] ${ContentFont.className}`}
              >
                Welcome back! Please sign in to continue
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`w-full h-full rounded  pt-3 lg:pt-10 ${ContentFont.className}`}
              >
                <label
                  htmlFor="email"
                  className={`py-3 block text-[#42434d] font-semibold`}
                >
                  Email :
                  <small className="capitalize tracking-wide text-red-500 px-1">
                    {errors?.email?.message}
                  </small>
                </label>
                <Input
                  register={register}
                  required={true}
                  pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                  name="email"
                  className={`border text-[#42434d] ${
                    errors?.email?.message
                      ? "border-red-500"
                      : "border-[#e6e6e7]"
                  } rounded-lg p-2 outline-none bg-inherit w-full`}
                  type="text"
                />

                <label
                  htmlFor="password"
                  className={`py-3 block text-[#42434d] font-semibold`}
                >
                  Password :{" "}
                  <small className="capitalize tracking-wide text-red-500">
                    {errors?.password?.message}
                  </small>
                </label>
                <Input
                  register={register}
                  required={true}
                  pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/}
                  name="password"
                  className={`border text-[#42434d] ${
                    errors?.password?.message
                      ? "border-red-500"
                      : "border-[#e6e6e7]"
                  } rounded-lg p-2 outline-none  bg-inherit w-full `}
                  type={isShowPass ? "text" : "password"}
                  handleShowPass={() => setpass(!isShowPass)}
                />

                <div className="pt-5 grid lg:grid-cols-2  gap-2">
                  <Button
                    type="button"
                    label="Back"
                    onClick={() => router.back()}
                    className="bg-[#191919] text-white rounded-lg py-2 order-1 lg:order-none"
                  />
                  <Button
                    type="submit"
                    label="Login"
                    className="bg-[#00c28e] rounded-lg py-2 hover:shadow-lg hover:shadow-[#00c28e]/50 text-white transition-shadow duration-200"
                  />
                  <Button
                    type="button"
                    label="Continue with Google"
                    className="bg-gradient-to-r from-[#00c28e] via-indigo-500 to-blue-700 bg-clip-text text-transparent border rounded-lg py-2 hover:shadow-lg transition-shadow duration-200 col-span-2"
                  />
                  <span className="lg:col-span-2 py-2 text-center text-xs">
                    Dont&lsquo; have account ?{" "}
                    <span
                      onClick={() => router.push("/signUp")}
                      className="text-[#1152ee] cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
