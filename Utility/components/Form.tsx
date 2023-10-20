import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
};
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="border border-[#27272a] bg-[#27272a]/20 w-full h-full rounded-lg flex flex-col">
      <h1 className="p-2">SignUp</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 flex-1 p-2"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="email" className="text-sm">
          Email :
          <i className="px-2 text-red-600 text-sm">{errors?.email?.message}</i>
        </label>
        <input
          autoComplete="off"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          className="border border-[#27272a] bg-inherit p-1 rounded-lg outline-none "
        />
        <label htmlFor="password" className="text-sm">
          Password :
          <i className="px-2 text-red-600 text-sm">
            {errors.email && "required !"}
          </i>
        </label>
        <input
          autoComplete="off"
          type="password"
          {...register("password", { required: true })}
          className="border border-[#27272a] bg-inherit p-1 rounded-lg outline-none "
        />

        <div className="text-sm flex justify-end gap-2">
          <button className="rounded-lg bg-white/20 p-2">cancel</button>
          <button
            type="submit"
            className="rounded-lg bg-white text-slate-800 p-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
