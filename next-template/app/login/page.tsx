"use client";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { redirect } from "next/navigation"

export default function Component() {
    const [authState, setAuthState] = useState<"authenticated" | "not-authenticated">();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [isChecked, setIsChecked] = useState<boolean>(!true);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const { toast } = useToast()
    useEffect(() => {
        fetch(`${backendUrl}/status`, {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies) in CORS requests
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                if (data.email) {
                    setAuthState("authenticated");
                } else {
                    setAuthState("not-authenticated");
                }
            })
            .catch((error) => {
                console.error(error);
                setAuthState("not-authenticated");
            });
    }, []);

    useEffect(() => {
        console.log(authState);
        if (authState == "authenticated") {
            //move to main dashboard
            toast({
                title: "Authenticated",
                description: "Moving to main dashboard",
            })
            redirect('/')

        }
    }, [authState]);

    useEffect(() => {
        if (error != undefined) {
            toast({
                title: "Error Happened",
                description: error,
                variant: "destructive"
            })
        }
    }, [error]);


    const onSubmit = async () => {
        try {
            const response = await fetch(`${backendUrl}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            await response.json();
            setError(undefined);
            setAuthState("authenticated");
        } catch (error) {
            // console.error('Error:', error);
            setError((error as any).toString());
        }
    }

    return (
        <main className="w-full h-full flex flex-row  ">
            <div className="hidden w-1/2 p-8 md:block">
                <img src="/signup.png" alt="Illustration" className=" w-full h-full" />
            </div>
            <div className="flex flex-grow items-center justify-center ">

                <div className="flex flex-col items-center justify-center  w-1/2">
                    <h2 className="mb-8 text-3xl font-bold text-center text-[#183B56]">Welcome back.</h2>
                    <Button onClick={(e) => {
                        setError("Google Oauth is not implemented, please use email and password auth");
                    }} className="w-full px-1.5 py-6 mb-4 bg-[#1565D8] flex flex-row hover:bg-blue-500 text-white">
                        <div className="w-9 h-9 bg-white p-1.5 rounded">
                            <img src="./google.png" />
                        </div>
                        <span className="flex-grow font-semibold">Sign in with Google</span>
                    </Button>
                    <div className="flex items-center justify-center w-full mb-4">
                        <span className="flex-grow h-px bg-[#E5EAF4]" />
                        <span className="px-4 text-sm text-[#183B56] font-medium">Or, sign in with your email</span>
                        <span className="flex-grow h-px bg-[#E5EAF4]" />
                    </div>
                    <div className="w-full mb-4 space-y-1.5">
                        <Label htmlFor="email" className="text-[#5A7184]">Email address*</Label>
                        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" className="w-full text-[#183B56] font-medium" />
                    </div>
                    <div className="w-full mb-4 space-y-1.5">
                        <Label htmlFor="password" className="text-[#5A7184]">Password*</Label>
                        <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" className="w-full text-[#183B56] font-medium" />
                    </div>
                    <div className="flex items-center justify-between w-full mb-6">
                        <div className="flex items-center">
                            <Checkbox id="keep-me-signin" className="" checked={isChecked} onCheckedChange={(e) => setIsChecked(e != "indeterminate" && e)} />
                            <Label htmlFor="keep-me-signin" className="ml-2 text-sm">
                                Keep Me Sign in
                            </Label>
                        </div>
                    </div>
                    <Button className="w-full py-6 bg-[#1565D8] hover:bg-blue-500 font-semibold text-white" disabled={!isChecked} onClick={onSubmit}>Sign in</Button>
                    <div className="mt-6 text-center w-full">
                        <span className="text-sm text-gray-500">Don't have an account? </span>
                        <Link href="/signup" className="text-sm text-blue-600" prefetch={false}>
                            Signup now
                        </Link>
                    </div>
                </div>
            </div>

        </main>

    )
}


