import React from "react";
import { useForm } from 'react-hook-form'


const FormYouTube: React.FC = () => {
    const form = useForm();
    const {register} = form;
    const {name,ref, onChange,onBlur} = register("username")
    // useForm();
    const OnSubmit = () => {
        alert()

    }
    return (

        <div className="p-8">
            <form action="" className="">
                <div className="flex items-center justify-center">
                    <div className="grid gap-y-3 w-1/2 h-auto bg-slate-600 items-start p-8 rounded-lg shadow-xl shadow-gray-300">
                        <div className="flex flex-row justify-center items-center text-2xl text-black">
                            <h1>Form YouTube</h1>
                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="username" className="mr-3">Username</label>
                            <input
                                type="text"
                                id="username"
                                // way 001
                                // name={name}
                                // ref={ref}
                                // onChange={onChange}
                                // onBlur={onBlur}

                                // way002
                                {...register("username")}
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="email" className="mr-3">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="channel" className="mr-3">Channel</label>
                            <input
                                type="text"
                                id="channel"
                                {...register("channel")}
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <button
                                onClick={OnSubmit}
                                className="bg-indigo-500 py-18 px-12 p-2 font-bold text-white"
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormYouTube;