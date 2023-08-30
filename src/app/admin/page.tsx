"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import { MdLockOutline } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
export default function admin() {
  type Inputs = {
    questions: string;
    option1: string;
    option2: string,
    option3: string,
    option4: string,
  };
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      questions: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    },
  });
  const [values, setValues] = useState({
    questions: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const handleChange = (e: any) => {
    trigger()
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex">
    <div className="flex items-center justify-center w-full h-screen text-center bg-orange-200">
      <div className="flex items-center  max-w-4xl bg-white shadow-2xl w-4/5 rounded-2xl justify-center">
        <div className="p-4 md:p-5">
          <div className="p-6 md:p-10">
            <h2 className="mb-1 text-2xl font-bold md:text-3xl text-darkViolet md:mb-2 ">
              Add Questions
            </h2>
            <div className="inline-block w-12 mb-2 border-b-2 md:w-20 bg-darkViolet border-darkViolet"></div>
            <form
              className="flex flex-col items-center mb-1 md:mb-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div>
                  <div className="flex items-center w-3/5 p-1 mb-3 bg-gray-100 md:w-64 md:p-2">
                    <FaRegEnvelope className="m-2 text-gray-400" />
                    <input
                      type="text"
                      id="questions"
                      {...register("questions" as const, {
                        required: "*questions required",
                      })}
                      placeholder="questions"
                      className="flex-1 text-sm font-medium bg-gray-100 outline-none"
                      value={values.questions}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.questions?.message}
                  </p>
                </div>

                <div>
                  <div className="flex items-center w-56 p-1 mb-3 bg-gray-100 md:w-64 md:p-2">
                    <MdLockOutline className="m-2 text-gray-400" />
                    <input
                      type="text"
                      id="option1"
                      {...register("option1" as const, {
                        required: "*option1 required"
                      })}
                      placeholder="option1"
                      className="flex-1 text-sm font-medium bg-gray-100 outline-none"
                      value={values.option1}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.option1?.message}
                  </p>
                </div>
              </div>
              <div>
                  <div className="flex items-center w-56 p-1 mb-3 bg-gray-100 md:w-64 md:p-2">
                    <MdLockOutline className="m-2 text-gray-400" />
                    <input
                      type="text"
                      id="option2"
                      {...register("option2" as const, {
                        required: "*option2 required"
                      })}
                      placeholder="option2"
                      className="flex-1 text-sm font-medium bg-gray-100 outline-none"
                      value={values.option2}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.option2?.message}
                  </p>
                </div>
                <div>
                  <div className="flex items-center w-56 p-1 mb-3 bg-gray-100 md:w-64 md:p-2">
                    <MdLockOutline className="m-2 text-gray-400" />
                    <input
                      type="text"
                      id="option3"
                      {...register("option3" as const, {
                        required: "*option3 required"
                      })}
                      placeholder="option3"
                      className="flex-1 text-sm font-medium bg-gray-100 outline-none"
                      value={values.option3}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.option3?.message}
                  </p>
                </div>
                <div>
                  <div className="flex items-center w-56 p-1 mb-3 bg-gray-100 md:w-64 md:p-2">
                    <MdLockOutline className="m-2 text-gray-400" />
                    <input
                      type="option4"
                      id="option4"
                      {...register("option4" as const, {
                        required: "*option4 required"
                      })}
                      placeholder="option4"
                      className="flex-1 text-sm font-medium bg-gray-100 outline-none"
                      value={values.option4}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.option4?.message}
                  </p>
                </div>
              
             
              
              

              <button
                type="submit"
                className="inline-block px-8 py-1 font-semibold border-2 rounded-full border-darkViolet text-darkViolet md:px-12 md:py-2 hover:bg-darkViolet hover:text-white"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
