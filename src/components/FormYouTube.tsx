import React from "react";
import { useForm } from 'react-hook-form'
// impoort dev tool component
import { DevTool } from '@hookform/devtools'

let renderCount = 0;

const FormYouTube: React.FC = () => {
    const form = useForm();     // this obj of form
    const { register, control,handleSubmit } = form;    // this is destructure of the form component
    // const {name,ref, onChange,onBlur} = register("username") // this line use for way1 for start tracking data on form
    const OnSubmit = (data:FormValues) => {
        console.log('Form submitted',data)
    }

    // increment renderCount if the form hook is rerender
    renderCount++;
    
    // define all type of prop in form
    type FormValues = {
        username:string,
        email:string,
        channel:string
    }

    return (
        <div className="p-8">
            {/* onSubmit=prop of form, handleSummit = destructure of use form, OnSubmit = function after define */}
            <form onSubmit={handleSubmit(OnSubmit)}>
                <div className="flex items-center justify-center">
                    <div className="grid gap-y-3 w-1/2 h-auto bg-slate-600 items-start p-8 rounded-lg shadow-xl shadow-gray-300">
                        <div className="flex flex-row justify-center items-center text-2xl text-black">
                            <h1>Form YouTube ({renderCount/2})</h1>
                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="username" className="mr-3">Username</label>
                            <input
                                type="text"
                                id="name"
                                // way 001 (name, ref, onChange, onBlur we call input props) ==> use for tracking react-hook-form
                                // name={name}
                                // ref={ref}
                                // onChange={onChange}
                                // onBlur={onBlur}

                                // way002 ==> use for tracking react-hook-form with 
                                {...register("username", { required: true })}   // spread operator (everthing will be abstract, if u use spread operator)
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="email" className="mr-3">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor="channel" className="mr-3">Channel</label>
                            <input
                                type="text"
                                id="channel"
                                {...register("channel")}
                                className="rounded-xl border-2 p-2 bg-gray-300"
                                placeholder="Enter your channel"
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
            {/* Noted : dev most be use at the of the form */}
            <DevTool control={control} />
        </div>
    );
}

export default FormYouTube;