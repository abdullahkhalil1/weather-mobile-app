import { Text, View } from "react-native"
import { SmileySadIcon } from "../../../assets/icons/smileySad"

export const Error = ({ errorMessage }) => {
    return (
        <View className="w-full h-1/2 flex items-center justify-center">
            <View className="flex-col justify-center items-center gap-4">
                <SmileySadIcon fill="orange" size="45" />
                <Text className="text-3xl text-white">{errorMessage}</Text>
            </View>
        </View>
    )
}