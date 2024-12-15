import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Facebook, Mail } from "lucide-react";

export const SocialLogin = () => {
  const { toast } = useToast();

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      console.log(`Starting ${provider} login...`);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) {
        if (error.message.includes("not enabled")) {
          toast({
            title: `${provider.charAt(0).toUpperCase() + provider.slice(1)} login not available`,
            description: "This login method is not currently enabled. Please use email/password or contact support.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      }
    } catch (error: any) {
      console.error(`${provider} login error:`, error);
      toast({
        title: `Error signing in with ${provider}`,
        description: error.message || "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => handleSocialLogin('google')}
      >
        <Mail className="h-5 w-5" />
        Continue with Google
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => handleSocialLogin('facebook')}
      >
        <Facebook className="h-5 w-5" />
        Continue with Facebook
      </Button>
    </div>
  );
};