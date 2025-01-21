"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("Incorrect password. Please try again.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-4">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="h-5 w-5 mr-1" />
                            Back to Home
                        </Link>
                        <div className="flex items-center space-x-2">
                            <Brain className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-bold">
                                MemoryGuard
                            </span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl text-center mt-4">
                        Welcome back
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your email to sign in to your account
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        {error && (
                            <div className="text-sm text-destructive">
                                {error}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                        <div className="text-sm text-center text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/signup"
                                className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
