import React from "react";
import LottieView from "lottie-react-native";
import loadingLottie from "../../lotties/loading.json";

export default function Loading(){
    return <Loading source={loadingLottie} autoPlay loop />;
}