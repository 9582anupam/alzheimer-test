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
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide, { SlideProps } from '@mui/material/Slide';


export default function SignupPage() {
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("This email is already registered. Please sign in instead.");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4 relative">
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
                        Create an account
                    </CardTitle>
                    <CardDescription className="text-center">
                        Start your cognitive health journey today
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>
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
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                            />
                        </div>
                        {error && (
                            <div className="text-sm text-destructive">
                                {error}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                        <div className="text-sm text-center text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>

            <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={50000}
                style={{ maxWidth: "400px" }}
                color="error"
                TransitionComponent={(props) => (
                    <Slide {...props} direction="left" />
                )}
                message="90% of people with Alzheimer’s forget their password—or forget they’ve ever registered on a website!"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    );
}
