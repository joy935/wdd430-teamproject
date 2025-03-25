"use client"

import { Button } from "./Button";
import Link from "next/link";

export default function RegisterForm() {

    return (
        <form className="w-full max-w-sm space-y-5 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-semibold text-center">Register</h1>
            <div className="flex-1 space-y-4">
                <div className="border border-gray-200 rounded-lg px-4 py-3">
                    <input className="w-full bg-transparent outline-none text-sm" id="name" type="text" name="name" placeholder="Name" required />
                </div>
            </div>
            <div className="flex-1 space-y-4">
                <div className="border border-gray-200 rounded-lg px-4 py-3">
                    <input className="w-full bg-transparent outline-none text-sm" id="email" type="email" name="email" placeholder="Email address" required />
                </div>
                <div className="border border-gray-200 rounded-lg px-4 py-3">
                    <input className="w-full bg-transparent outline-none text-sm" id="password" type="password" name="password" placeholder="Password" minLength={6} required />
                </div>
            </div>
            <div className="flex justify-center">
                <input type="hidden" name="redirectTo"/>
                <Button variant="register">Register</Button>
            </div>
        </form>
    );
}