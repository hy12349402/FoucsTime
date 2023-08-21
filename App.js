import * as React from "react";
import { colors } from "./src/utils/colors";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";
import { Focus } from "./src/features/Focus";
import { useState } from "react";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";
export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState();
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
