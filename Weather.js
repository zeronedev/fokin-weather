import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3a6186", "#89253e"]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#108dc7", "#ef8e38"]
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#c0392b", "#8e44ad"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#2980B9", "#6DD5FA"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#1F1C2C", "#928DAB"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#D3CCE3", "#E9E4F0"]
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#DBE6F6", "#C5796D"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fc4a1a", "#f7b733"],
    title: "쾌청한 날씨",
    subtitle: "구름이 거치고 날씨가 맑아졌어요!"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"]
  }
};

export default function Weather({ temp, condition }) {
  console.log(condition);
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text>{condition}</Text>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Mist",
    "Haze",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
