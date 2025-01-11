import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface SearchHistoryChipProps {
    searchText: string;
    onPress: (searchText: string) => void;
};

const SearchHistoryChip = ({
    searchText,
    onPress,
}: SearchHistoryChipProps): JSX.Element => {

    const handlePress = useCallback(() => {
        onPress(searchText);
    }, [searchText]);

    return (
        <Pressable
            style={styles.container}
            onPress={handlePress}>
            <Text style={styles.historyText}>{searchText}</Text>
        </Pressable>
    );
};

export default React.memo(SearchHistoryChip);
