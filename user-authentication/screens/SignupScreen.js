import { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandeler({email, password}){
    setIsAuthenticating (true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    }
    catch {
      Alert.alert('Registration failed!', 'Something went wrong')
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating){
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandeler} />;
}

export default SignupScreen;
