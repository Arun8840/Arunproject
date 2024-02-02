"use client"
import Button from "@/Utility/components/Button"
import Input from "@/Utility/components/Input"
import getSocialAppServices from "@/service/SocialAppService"
import { useRouter } from "next/navigation"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { handleLogin } from "@/app/action"

interface FormTypes {
  email: string
  password: string
}
function Cloningapp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>()
  const router = useRouter()
  const { loginUser } = getSocialAppServices()
  // todo handle login
  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    if (data) {
      let response = await loginUser(data)
      if (response?.data?.status) {
        let value = JSON.stringify(response?.data?.userData)
        handleLogin(value)
        await router.push(
          `/socialapp/?id=${response?.data?.userData?.id}&tab=Messages`
        )
      } else {
        alert(response?.data?.message)
      }
    }
  }
  return (
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
            Email or Username :{" "}
            <small className="capitalize tracking-wide text-pink-600">
              {errors?.email?.message}
            </small>
          </label>
          <Input
            register={register}
            required={true}
            pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            name="email"
            className="border rounded-lg p-2 outline-none border-[#27272a] bg-inherit w-full"
            type="text"
          />

          <label htmlFor="password" className="py-3 block">
            password :{" "}
            <small className="capitalize tracking-wide text-pink-600">
              {errors?.password?.message}
            </small>
          </label>
          <Input
            register={register}
            required={true}
            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/}
            name="password"
            className="border rounded-lg p-2 outline-none border-[#27272a] bg-inherit w-full"
            type="password"
          />

          <div className="pt-5 flex  gap-2">
            <Button
              type="button"
              label="back"
              handleAction={() => router.back()}
              className="bg-zinc-600 rounded-lg flex-1 py-2"
            />
            <Button
              type="submit"
              label="Login"
              className="bg-pink-600 rounded-lg flex-1 py-2 hover:shadow-lg hover:shadow-pink-600/40 transition-shadow duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cloningapp
