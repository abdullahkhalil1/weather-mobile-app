import { useEffect, useRef, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { classNames } from "../../utils/classNames"
import { SearchIcon } from "../../../assets/icons/search"

export const SearchInput = ({ setQuery, setSelectedLocation, locations }) => {
    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (showSearch) {
            inputRef.current?.focus();
        }
    }, [showSearch]);

    return (
        <View className="relative z-50 pt-4 px-2">
            <View className={classNames("flex-row justify-end items-center rounded-full ", showSearch ? 'bg-[#1a1b1d]' : 'bg-transparent')}>
                {showSearch && <TextInput ref={inputRef} placeholder="Search location" onChangeText={(value) => setQuery(value)} placeholderTextColor="white" className="px-6 h-10 flex-1 text-white" />}
                <TouchableOpacity onPress={() => setShowSearch(!showSearch)} className="bg-gray-200/50 rounded-full p-3 m-1">
                    <SearchIcon />
                </TouchableOpacity>
            </View>
            {showSearch && locations?.length > 0 && 
                <View className="absolute w-full bg-gray-200 top-16 mx-2 rounded-3xl">
                    {locations.map((location) => (
                        <TouchableOpacity key={location.value} onPress={() => (setSelectedLocation(location), setShowSearch(false), setQuery(''))} className="flex-row items-center px-3 py-2">
                            <Text>{location.name}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
            }
        </View>
    )
}