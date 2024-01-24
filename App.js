import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
StatusBar;
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
