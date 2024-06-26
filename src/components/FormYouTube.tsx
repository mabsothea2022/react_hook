import React from "react";
import {useForm} from 'react-hook-form'

const FormYouTube: React.FC = () => {
    // const form = useForm();
    useForm();
    return (
        <div className="container">
            <div>
                <h1 className="text-xl">Youtube Form</h1>
                <hr className="m-2" />
                <form action="">
                    <div className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-2 gap-y-0">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" className="border-2 p-1 rounded-md" />
                        </div>
                        <div className="grid grid-cols-2 gap-y-0">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="border-2 p-1 rounded-md" />
                        </div>
                        <div className="grid grid-cols-2 gap-y-0">
                            <label htmlFor="channel">Channel</label>
                            <input type="text" id="channel" name="channel" className="border-2 p-1 rounded-md" />
                        </div>
                        <div className="flex justify-cente gap-y-0">
                            <button className="bg-blue-500 py-1 px-8 hover:bg-blue-600">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormYouTube;