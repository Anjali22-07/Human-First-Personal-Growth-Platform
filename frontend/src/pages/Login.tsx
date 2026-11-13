
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Navbar from "../components/ui/NavBar";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F5F3E9]">

      <Navbar />

      <div className="flex min-h-[85vh] items-center justify-center px-4 py-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md"
        >

          <Card className="w-full rounded-3xl border border-[#C8D2BE] bg-transparent shadow-none">

            <CardHeader className="space-y-3 text-center">

              <a
                href="/"
                className="text-2xl font-bold tracking-tight text-[#365943]"
              >
                rooted.
              </a>

              <CardTitle className="text-3xl font-semibold text-[#365943]">
                Welcome back
              </CardTitle>

              <CardDescription className="text-[#718074]">
                Your journey continues, one step at a time.
              </CardDescription>

            </CardHeader>

            <CardContent>
              <form className="space-y-5">

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#365943]">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[#365943]">
                      Password
                    </Label>

                    <a
                      href="/forgot-password"
                      className="text-xs font-medium text-[#718074] transition hover:text-[#365943] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-[#C8D2BE] bg-white/40 text-[#365943] placeholder:text-[#9AA596] focus-visible:ring-[#91A98B]"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#426C52] py-6 text-white transition hover:bg-[#31563F]"
                >
                  Sign in →
                </Button>

              </form>
            </CardContent>

            <CardFooter className="justify-center">
              <p className="text-center text-sm text-[#718074]">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="font-semibold text-[#365943] hover:underline"
                >
                  Begin your journey
                </a>
              </p>
            </CardFooter>

          </Card>

        </motion.div>

      </div>
    </div>
  );
}
