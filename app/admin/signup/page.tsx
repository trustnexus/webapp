"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreate } from "@/hooks/useCreate";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SignupForm } from "@/types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAxiosError } from "axios";
import Link from "next/link";

export default function AdminSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>();

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const signupMutation = useCreate<SignupForm>("/auth/register", "register");

  const onSubmit = async (data: SignupForm) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "admin",
      };

      signupMutation.mutate(payload, {
        onSuccess: () => {
          toast.success("Signup successful!");
          router.push("/admin/panel/dashboard");
        },
        onError: (error: unknown) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data?.error || "Signup failed");
          } else {
            toast.error("Something went wrong.");
          }
        },
      });
    } catch (error) {
      toast.error("Unexpected error occurred.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Signup
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin@trustnexus.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            placeholder="••••••••"
          />
          <div
            className="absolute top-9 right-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Hidden Role Field */}
        <input type="hidden" value="admin" {...register("role")} />

        <button
          type="submit"
          disabled={isSubmitting || signupMutation.isPending}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSubmitting || signupMutation.isPending
            ? "Signing up..."
            : "Signup"}
        </button>
        <div className="my-2 text-sm text-center">
          Already have an account{" "}
          <Link className="text-sm" href="/admin/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
