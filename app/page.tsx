"use client";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
            <div className="container mx-auto px-4 py-16 w-10/12">
                <nav className="flex justify-between items-center mb-16">
                    <div className="flex items-center space-x-2">
                        <Brain className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold">MemoryGuard</span>
                    </div>
                    <Button variant="outline" asChild size={"lg"}>
                        <Link href="/login">Login</Link>
                    </Button>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Early Detection for
                            <span className="text-primary block">
                                Better Protection
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Take our scientifically-backed cognitive assessment
                            to understand your memory health. Early detection of
                            Alzheimer&apos;s symptoms can make a significant
                            difference in managing the condition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="text-lg"
                                onClick={() => router.push("/login")}>
                                Start Free Assessment
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold">98%</h3>
                                <p className="text-muted-foreground">
                                    Accuracy Rate
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">5min</h3>
                                <p className="text-muted-foreground">
                                    Quick Test
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">24/7</h3>
                                <p className="text-muted-foreground">Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:mt-20">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1661576816126-44fa86c4daef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Senior couple looking at tablet"
                            className="rounded-lg shadow-2xl"
                            width={500} // specify the width
                            height={300} // specify the height
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
