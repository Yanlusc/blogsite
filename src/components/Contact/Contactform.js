"use client"

import React from 'react';
import {useForm} from 'react-hook-form';

export default function Contactform() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className='mt-12 text-xl font-medium leading-relaxed font-in'>
            Hello my name is
            <input type="text"
                   placeholder="name" {...register}
                   className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center
                    placeholder:text-lg border-gray focus:border-gray bg-transparent"/>
            and I want to discuss a potential project, you can email me at
            <input type="email" className="outline-none border-0 p-0 mx-2 focus:ring-0
            placeholder:text-center placeholder:text-lg border-gray focus:border-gray
            bg-transparent" placeholder="email" {...register("email", {})} />
            or reach out on
            <input className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center
            placeholder:text-lg border-gray focus:border-gray bg-transparent" type="tel"
                   placeholder="phone number" {...register("phone" +
                " number", {})} />
            Here are some details about my project
            <input className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center
            placeholder:text-lg border-gray focus:border-gray bg-transparent" type="text"
                   placeholder="project detail" {...register("project detail", {})} />

            <input type="submit"/>
        </form>
    );
}