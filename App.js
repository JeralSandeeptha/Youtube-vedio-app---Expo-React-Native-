import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import {useState, useCallback, useRef} from "react";

export default function App() {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

      return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.a}></View>
            <YoutubePlayer
                height={300}
                width={'100%'}
                play={playing}
                videoId={"cNgL40UfhbA"}
                onChangeState={onStateChange}
            />
            {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  a: {
    marginTop: 29
  }
});
