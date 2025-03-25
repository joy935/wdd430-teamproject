import { Suspense } from "react";
import LoginForm from "@/components/ui/login-form";

export default function Login() {
    return (
    <main className="flex items-center justify-center md:h-screen py-6">
        <Suspense>
          <LoginForm />
        </Suspense>

    </main>
    );
}