import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface PrimaryInputProps {
    placeholder?: string;
    onChangeText: (text: string) => void;
};

const PrimaryInput = ({
    placeholder,
    onChangeText,
}: PrimaryInputProps) => {

    return (
        <TextInput
            style={styles.primaryInput}
            placeholder={placeholder}
            onChangeText={onChangeText} />
    );
};

export default React.memo(PrimaryInput);
