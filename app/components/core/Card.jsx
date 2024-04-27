import { Text, View } from "react-native"
import { classNames } from "../../utils/classNames"
import { useLang } from "../../hooks/useLang"

export const Card = ({ title, otherOptions, transparent, children }) => {
    const isArabic = useLang()
    return (
        <View className={classNames("rounded-2xl p-3", !transparent && 'bg-black/40')}>
            <View className={classNames('flex-row justify-between gap-2 items-center', isArabic && 'flex-row-reverse')}>
                <View className='font-medium text-xs py-1 px-2 rounded-full'>
                    <Text className="text-white font-medium">{title}</Text>
                </View>
                {otherOptions && otherOptions}
            </View>
            {children}
        </View>
    )
}