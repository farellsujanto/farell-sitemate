import React, { useCallback } from 'react';
import { Image, Linking, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { formatDate } from '../../../../utils/date_util';

interface NewsItemProps {
    title: string;
    description: string;
    author: string;
    imgUrl: string;
    publishedAt: string;
    sourceUrl: string;
};

const NewsItem = ({
    title,
    description,
    author,
    imgUrl,
    publishedAt,
    sourceUrl,
}: NewsItemProps) => {

    const onNewsItemPress = useCallback(() => {
        Linking.openURL(sourceUrl)
    }, [sourceUrl]);

    return (
        <Pressable onPress={onNewsItemPress}>
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
        </Pressable>
    );
};

export default React.memo(NewsItem);
