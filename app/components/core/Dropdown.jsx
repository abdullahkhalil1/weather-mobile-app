import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import { ArrowDownIcon } from '../../../assets/icons/arrowDown';
import { useLang } from '../../hooks/useLang';
import { classNames } from '../../utils/classNames';

export const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isArabic = useLang()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <View style={{ zIndex: 1 }}>
            <TouchableOpacity
                onPress={toggleDropdown}
                className={classNames("flex-row gap-2", isArabic && 'flex-row-reverse')}
            >
                <Text className="text-white">
                    {selectedOption ? selectedOption.name : 'Select an option'}
                </Text>
                <ArrowDownIcon fill="white" />
            </TouchableOpacity>

            <Modal visible={isOpen} transparent animationType="fade">
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                    onPress={() => setIsOpen(false)}
                >
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <FlatList
                            data={options}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleOptionClick(item)}
                                    style={{
                                        paddingVertical: 8,
                                        paddingHorizontal: 12,
                                    }}
                                >
                                    <Text style={{ color: 'gray', fontSize: 14 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};
