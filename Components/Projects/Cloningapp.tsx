"use client"
import { SocialappStore } from "@/Store/SocialappStore"
import Button from "@/Utility/components/Button"
import Input from "@/Utility/components/Input"
import { UsersTypes } from "@/model/SocialAppTypes"
import { useRouter } from "next/navigation"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useSWR from "swr"

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
  const loadAllUserData = SocialappStore((state: any) => state.loadAllUsers)

  // todo loading all users
  const fetcher = async () => {
    let res: UsersTypes[] = await loadAllUserData()
    return res
  }
  const {
    data: AllUsers,
    error,
    isLoading,
  } = useSWR("/api/user", fetcher, {
    revalidateOnFocus: false,
  })
  // todo handle login
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    const foundUser = AllUsers?.find((user) => user?.email === data?.email)
    if (
      data &&
      foundUser?.email === data?.email &&
      data?.password === "arun123!"
    ) {
      router.push(`/socialapp/?id=${foundUser?._id}&tab=Messages`)
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