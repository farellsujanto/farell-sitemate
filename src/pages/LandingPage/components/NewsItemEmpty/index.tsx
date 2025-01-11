import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const NewsItemEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>News is empty, please start searching!</Text>
        </View>
    );
};

export default React.memo(NewsItemEmpty);
