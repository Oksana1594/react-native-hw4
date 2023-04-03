import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./route";

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
