import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Text } from "./src/infrastructure/components/typography/Text";
import { Wrapper } from "./src/infrastructure/components/wrappper/wrapper";
import { SafeArea } from "./src/infrastructure/components/utility/safe-area.component";

export default function App() {
  const [poppinsLoaded] = usePoppins({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
  });

  if (!poppinsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SafeArea>
        <Text family="regular" variant="h2" color="secondary1" >
          hello
        </Text>
        <StatusBar style="auto" />
        </SafeArea>
      </Wrapper>
      
    </ThemeProvider>
  );
}
