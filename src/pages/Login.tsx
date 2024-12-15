import { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { EmailForm } from "@/components/auth/EmailForm";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    
    checkUser();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">StockPred</h1>
          <p className="text-gray-600">
            {isSignUp 
              ? "Create an account to access your dashboard" 
              : "Enter your credentials to access your account"}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <SocialLogin />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <EmailForm 
            isSignUp={isSignUp} 
            onToggleMode={() => setIsSignUp(!isSignUp)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;