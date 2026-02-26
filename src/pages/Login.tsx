import { CheckCircle2, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const EyeIcon = showPassword ? EyeOff : Eye;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    mode: "onSubmit",
  });
  const passwordValue = watch("password");

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md py-8 px-5 sm:p-8 border border-donezo-border">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="text-donezo-primary">
            <CheckCircle2 size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-donezo-text">Donezo</h1>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-donezo-text mb-2">
            Welcome back
          </h2>
          <p className="text-donezo-text-muted text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-donezo-text mb-1.5"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail
                  className={`h-5 w-5 ${
                    errors.email ? "text-red-500" : "text-donezo-text-muted"
                  }`}
                />
              </div>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`block w-full pl-10 pr-3 py-2.5 bg-donezo-bg border rounded-xl sm:text-sm transition-colors outline-none focus:ring-2
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-donezo-border focus:ring-donezo-primary focus:border-donezo-primary"
                  }`}
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-sm font-medium text-donezo-text mb-1.5"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock
                  className={`h-5 w-5 ${
                    errors.password ? "text-red-500" : "text-donezo-text-muted"
                  }`}
                />
              </div>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password must be at most 30 characters",
                  },
                })}
                className={`block w-full pl-10 pr-10 py-2.5 bg-donezo-bg border rounded-xl sm:text-sm transition-colors outline-none focus:ring-2
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-donezo-border focus:ring-donezo-primary focus:border-donezo-primary"
                  }`}
              />
              {passwordValue && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                  <EyeIcon
                    className={`h-5 w-5 cursor-pointer ${
                      showPassword
                        ? "text-donezo-primary"
                        : "text-donezo-text-muted"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              )}
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 rounded-xl shadow-sm text-sm font-medium text-white 
              bg-donezo-primary hover:bg-donezo-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-donezo-primary transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-donezo-text-muted">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-medium text-donezo-primary hover:text-donezo-primary-hover transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
