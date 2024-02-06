"use client";
import Button from "@/Utility/components/Button";
import Input from "@/Utility/components/Input";
import getSocialAppServices from "@/service/SocialAppService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleLogin } from "@/app/action";

interface FormTypes {
  email: string;
  password: string;
}
function Cloningapp() {
  const [isShowPass, setpass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: {
      password: "arun123$",
    },
  });
  const router = useRouter();
  const { loginUser } = getSocialAppServices();
  // todo handle login
  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    if (data) {
      let response = await loginUser(data);
      if (response?.data?.status) {
        console.log(response?.data?.user?._id);
        let value = JSON.stringify(response?.data?.user);
        await handleLogin(value);

        router.push(`/socialapp/?id=${response?.data?.user?._id}&tab=Messages`);
      } else {
        alert(response?.data?.message);
      }
    }
  };
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
              errors?.password?.message ? "border-red-500" : "border-[#27272a]"
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
  );
}

export default Cloningapp;
