import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md mx-6"
        >
          <div className="glass rounded-3xl p-8 shadow-brand">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Sign in to your Zone Hub account</p>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="email" placeholder="Email address" className="w-full h-12 pl-11 pr-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type={showPass ? "text" : "password"} placeholder="Password" className="w-full h-12 pl-11 pr-11 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <span className="text-accent cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <button type="submit" className="w-full h-12 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent hover:underline font-medium">Sign up</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Login;
