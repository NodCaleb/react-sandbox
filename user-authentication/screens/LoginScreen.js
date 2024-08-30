import { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      console.log(authCtx);
      authCtx.authenticate(token);
    }
    catch {
      Alert.alert('Authentication failed!', 'Invalid login or password')
      setIsAuthenticating(false);
    }    
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
