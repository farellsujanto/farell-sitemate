import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

const CircularProgressIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='small' color='#0000ff' />
        </View>
    );
};

export default React.memo(CircularProgressIndicator);
