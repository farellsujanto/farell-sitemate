import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const SearchHistoryChipSeparator = () => {
    return (
        <View style={styles.separator} />
    );
};

export default React.memo(SearchHistoryChipSeparator);
