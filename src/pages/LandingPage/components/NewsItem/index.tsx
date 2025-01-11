import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { formatDate } from '../../../../utils/date_util';

interface NewsItemProps {
    title: string;
    description: string;
    author: string;
    imgUrl: string;
    publishedAt: string;
};

const NewsItem = ({
    title,
    description,
    author,
    imgUrl,
    publishedAt,
}: NewsItemProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                src={imgUrl} />
            <View style={styles.textContainer}>
                <Text style={styles.publishedAtText}>{formatDate(publishedAt)}</Text>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText} numberOfLines={2}>{description}</Text>
                <Text style={styles.authorText}>{author}</Text>
            </View>
        </View>
    );
};

export default React.memo(NewsItem);
