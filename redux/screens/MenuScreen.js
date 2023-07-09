import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable,
    Image,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { FontAwesome5 } from "@expo/vector-icons";
  import FoodItem from "../components/FoodItem";
  import Modal from "react-native-modal";
  import { useSelector } from "react-redux";
  
  const MenuScreen = () => {
    