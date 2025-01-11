import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import NewsItem from './components/NewsItem';
import debounce from 'lodash/debounce';
import { Articles, fetchNews } from './services/news_service';
import NewsItemSeparator from './components/NewsItemSeparator';

const LandingPage = () => {

    const [articles, setArticles] = useState<Articles[]>();


    const handleSearch = useCallback(debounce(async (newSearchText: string) => {
        try {
            const newArticles = await fetchNews(newSearchText);
            setArticles(newArticles);
        } catch (error) {
            // TODO: Handle error
        }
    }, 250), []);

    const renderItem = useCallback(({ item }: { item: Articles }) => {
        return (
            <NewsItem
                title={item.title}
                description={item.description}
                author={item.author}
                imgUrl={item.urlToImage}
                publishedAt={item.publishedAt} />
        );
    }, []);
    const ItemSeparatorComponent = useMemo(() => NewsItemSeparator, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <PrimaryInput
                    placeholder='Search news'
                    onChangeText={handleSearch} />
            </View>
        
            <FlatList
                data={articles}
                style={styles.newsItemContainer}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                keyExtractor={(_, index) => `article-${index}`} />
        </View>
    );
};

export default React.memo(LandingPage);