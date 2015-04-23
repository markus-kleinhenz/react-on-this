/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Video = require('react-native-video');
var MOCKED_VIDEO_DATA = [
    {
        "videoId": "MOVIE_11584253",
        "formatName": "She Keeps Bees",
        "clipTitle": "Is What It Is",
        "source": "http://is.myvideo.de/movie23/95/11584253.mp4",
        "image": "http://is.myvideo.de/movie23/95/thumbs/11584253_1.jpg"
    },
    {
        "videoId": "MOVIE_11582975",
        "formatName": "Pato Siebenhaar",
        "clipTitle": "Fuld Af Løgn",
        "source": "http://is.myvideo.de/movie18/db/11582975.mp4",
        "image": "http://is.myvideo.de/movie18/db/thumbs/11582975_1.jpg"
    }];
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    ListView,
    View,
    TouchableHighlight
    } = React;

var YourVideoList = React.createClass({
    onLoad: function () {
        console.log('loaded');
    },
    getMockedVideos: function() {
        return MOCKED_VIDEO_DATA;
    },
    getCount: function() {
        return MOCKED_VIDEO_DATA.length;
    },
    fetchData: function() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.getMockedVideos()),
            loaded: true,
        });
    },
    componentDidMount: function() {
        this.fetchData();
    },
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderVideo}
                style={styles.listView}
                />
        );
    },
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading your videos...
                </Text>
            </View>
        );
    },

    renderVideo: function(video) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: video.image}}
                    style={styles.thumbnail}
                    />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{video.clipTitle}</Text>
                    <Text style={styles.year}>{video.formatName}</Text>
                </View>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'left',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = YourVideoList;