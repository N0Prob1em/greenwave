import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nwybeuabycyiazyoohqr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eWJldWFieWN5aWF6eW9vaHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NTE0MTEsImV4cCI6MjAwMjIyNzQxMX0.VEsMUtl2MJ4G807SKs7VquQJjOjSGpjhEJYajQLcFLk';



const LoginButton = () => {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) {
          console.error('Login error:', error.message);
        }
    };
      
      // Render the login button
    return (
    <>
        <button onClick={handleLogin}>Login with Google</button>
    </>
    )

}

export default LoginButton;




