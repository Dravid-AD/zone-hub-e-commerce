import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [passStrength, setPassStrength] = useState(0);

  const checkStrength = (v: string) => {
    let s = 0;
    if (v.length >= 8) s++;
    if (/[A-Z]/.test(v)) s++;
    if (/[0-9]/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    setPassStrength(s);
  };

  const strengthColors = ["bg-destructive", "bg-destructive", "bg-accent", "bg-accent", "bg-green-500"];
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md mx-6">
          <div className="glass rounded-3xl p-8 shadow-brand">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Account</h1>
              <p className="text-sm text-muted-foreground">Join Zone Hub today</p>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Full name" className="w-full h-12 pl-11 pr-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="email" placeholder="Email address" className="w-full h-12 pl-11 pr-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  onChange={e => checkStrength(e.target.value)}
                  className="w-full h-12 pl-11 pr-11 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passStrength > 0 && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= passStrength ? strengthColors[passStrength] : "bg-muted"}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{strengthLabels[passStrength]}</p>
                </div>
              )}
              <button type="submit" className="w-full h-12 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                Create Account
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Signup;
