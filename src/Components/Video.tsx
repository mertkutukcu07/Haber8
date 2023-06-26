import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import NewsData from '../constants/data/NewsData';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import VideoData from '../constants/data/VideoData';
import VideoPlayer from 'react-native-video-player';
import Images from '../constants/Images';
const Video = ({onPress, onPressNewsDetail, onPressHeaderVideo}) => {
  //   const renderItem = ({item, index}) => (
  //     <View>
  //       <View style={styles.newsc}>
  //         <TouchableOpacity>
  //           <Image source={item.photo} style={styles.newsPhoto} />
  //           <View style={styles.contextC}>
  //             <Text style={styles.contextTxt}>{item.context}</Text>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  const item = {
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    photo: Images.haber8img.videoheader,
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Video</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.videoC}>
          <TouchableOpacity onPress={() => onPressHeaderVideo(item)}>
            <VideoPlayer
              video={{
                uri: item.video,
              }}
              autoplay={false}
              thumbnail={Images.haber8img.videoheader}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          </TouchableOpacity>
          {VideoData.map(item => (
            <TouchableOpacity onPress={() => onPressNewsDetail(item)}>
              <View style={styles.videoContainer}>
                <View style={styles.videoWrapper}>
                  <VideoPlayer
                    video={{uri: item.video}}
                    autoplay={false}
                    thumbnail={item.photo}
                  />
                </View>
                <View style={styles.contextWrapper}>
                  <Text style={styles.contextTxt}>{item.context}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  headerC: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: moderateVerticalScale(25),
  },
  headerTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(14),
  },
  allnewsTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12),
    borderWidth: 1,
    borderColor: 'white',
    textAlign: 'center',
    width: moderateScale(120),
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
    width: moderateScale(150),
    marginTop: moderateVerticalScale(15),
  },
  contextC: {
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
    borderColor: Colors.bottombuttons.bottomdefault,
    shadowColor: Colors.bottombuttons.bottomdefault,
  },
  contextTxt: {
    textAlign: 'left',
    color: Colors.text.white,
    fontFamily: Fonts.medium,
    marginLeft: moderateScale(15),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
  titleStyle: {
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    textAlign: 'left',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  videoC: {
    marginTop: moderateScale(15),
  },
  anavideo: {
    height: moderateScale(300),
    resizeMode: 'contain',
  },
  videoC: {
    marginTop: moderateScale(15),
  },
  videoContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(20),
    marginTop: moderateScale(20),
  },
  videoWrapper: {
    flex: 1,
  },
  video: {
    width: moderateScale(100),
    height: moderateVerticalScale(100),
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  },
  contextWrapper: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
