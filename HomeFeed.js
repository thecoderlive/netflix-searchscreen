import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
<Text style={styles.video_name}>{item.video_name}</Text>
<Image
    style={styles.play_pause}
    source={{uri: item.play_pause}}
   />
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '38vw',
        'height': '20vw',
        'marginTop': 5,
        'marginLeft': 10
    },
    'video_name': {
        'color': '#0b0a0a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'play_pause': {
        'width': '8vw',
        'height': '8vw',
        'margin': 10,
        'borderRadius': 50
    }
});