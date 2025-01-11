import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import debounce from 'lodash/debounce';
import styles from './styles';
import PrimaryInput from '../../components/inputs/PrimaryInput';
import NewsItem from './components/NewsItem';
import { Articles, fetchNews } from './services/news_service';
import NewsItemSeparator from './components/NewsItemSeparator';
import SearchHistoryChip from './components/SearchHistoryChip';
import SearchHistoryChipSeparator from './components/SearchHistoryChipSeparator';

const LandingPage = () => {

    const [articles, setArticles] = useState<Articles[]>();
    const [searchHistories, setSearchHistories] = useState<string[]>([]);

    const updateSearchHistories = useCallback((newSearchText: string) => {
        if (searchHistories.includes(newSearchText)) {
            return;
        }
        setSearchHistories([...searchHistories, newSearchText]);
    }
    , [searchHistories]);

    const handleSearch = useCallback(debounce(async (newSearchText: string, ) => {
        try {
            const newArticles = await fetchNews(newSearchText);
            updateSearchHistories(newSearchText);
            setArticles(newArticles);
        } catch (error) {
            // TODO: Handle error
        }
    }, 250), [updateSearchHistories]);

    const renderNewsItem = useCallback(({ item }: { item: Articles }) => {
        return (
            <NewsItem
                title={item.title}
                description={item.description}
                author={item.author}
                imgUrl={item.urlToImage}
                publishedAt={item.publishedAt} />
        );
    }, []);
    const NewsItemSeparatorComponent = useMemo(() => NewsItemSeparator, []);

    const renderSearchHistoryChip = useCallback(({ item }: { item: string }) => {
        return (
            <SearchHistoryChip
                searchText={item}
                onPress={handleSearch} />
        );
    }, [handleSearch]);
    const SearchHistoryChipSeparatorComponent = useMemo(() => SearchHistoryChipSeparator, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <PrimaryInput
                    placeholder='Search news'
                    onChangeText={handleSearch} />
            </View>

            <FlatList
                horizontal
                data={searchHistories}
                style={styles.searchHistoryChipsContainer}
                renderItem={renderSearchHistoryChip}
                ItemSeparatorComponent={SearchHistoryChipSeparatorComponent}
                keyExtractor={(_, index) => `history-${index}`} />
        
            <FlatList
                data={articles}
                style={styles.newsItemContainer}
                renderItem={renderNewsItem}
                ItemSeparatorComponent={NewsItemSeparatorComponent}
                keyExtractor={(_, index) => `article-${index}`} />
        </View>
    );
};

export default React.memo(LandingPage);