"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Bot, ArrowLeft } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

            <Card className="w-full max-w-md p-8 glass-card border-white/10 relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                        <Bot className="text-white w-7 h-7" />
                    </div>
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to Acordlayer</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input placeholder="name@company.com" className="bg-white/5 border-white/10" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" placeholder="••••••••" className="bg-white/5 border-white/10" />
                    </div>
                    <Link href="/dashboard">
                        <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
                            Sign In
                        </Button>
                    </Link>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </Card>
        </div>
    )
}
