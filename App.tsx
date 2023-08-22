import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { useFonts, Roboto_400Regular , Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [loadedfonts] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent/>
      {loadedfonts ?  <Routes/> : <Loading/>}
    </ThemeProvider>
  );
}

