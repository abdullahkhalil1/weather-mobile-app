import { ActivityIndicator, View } from "react-native";

export const Spinner = () => {
    return (
        <View style="w-full justify-center items-center bg-gray-100">
            <ActivityIndicator size="large" color="white" />
        </View>
    );
};