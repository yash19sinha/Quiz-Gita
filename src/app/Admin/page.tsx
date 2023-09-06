"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react'

export default function Admin() {
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
      <div className="   max-w-4xl bg-white shadow-2xl w-4/5 rounded-2xl">
        <div className="p-4 md:p-5 justify-center items-center">
          <div className="p-6 md:p-10">
            <h2 className="mb-1 text-2xl font-bold md:text-3xl text-darkViolet md:mb-2 justify-center items-center">
              Add Questions
            </h2>
            <div className="inline-block  mb-2 border-b-2 md:w-20 bg-darkViolet border-darkViolet"></div>
            <form
              className="flex flex-col  mb-1 md:mb-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div>
                  <div className="flex items-center w-full p-4 mb-3 bg-gray-100  ">
                   
                    <input
                      type="text"
                      id="questions"
                      {...register("questions" as const, {
                        required: "*questions required",
                      })}
                      placeholder="Type your questions here"
                      className="flex-1 text-lg font-normal bg-gray-100 outline-none"
                      value={values.questions}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="m-3 text-xs text-red-600 text-start">
                    {errors.questions?.message}
                  </p>
                </div>
              
                <div>
                  <div className="flex items-center w-56 p-3 mb-3 bg-gray-100 md:w-64 ">
                    
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
                  <div className="flex items-center w-56 p-3 mb-3 bg-gray-100 md:w-64 ">
                   
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
                  <div className="flex items-center w-56 p-3 mb-3 bg-gray-100 md:w-64 ">
                    
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
                  <div className="flex items-center w-56 p-3 mb-3 bg-gray-100 md:w-64 ">
                  
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
