import { Text, View } from "react-native";
import { Spinner } from "./Spinner";

export const Loader = () => {
    return (
        <View className="fixed top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <Spinner />
            <Text className="text-white">Loading...</Text>
        </View>
    );
};
