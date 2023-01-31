import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const auth = getAuth()
  const email = "email@gmail.com"
const password = "123"
createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
  const user = userCredential.user
  console.log(user)
})



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
