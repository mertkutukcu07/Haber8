import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Materialİcons from 'react-native-vector-icons/MaterialIcons';
import VideoPlayer from 'react-native-video-player';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
const VideoGaleryDetail = ({route, navigation}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerC}>
          <TouchableOpacity
            style={styles.backİcon}
            onPress={() => navigation.goBack()}>
            <IonIcons
              name="arrow-back"
              color={Colors.text.white}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Materialİcons
              name="save-alt"
              color={Colors.text.white}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyC}>
          <Text style={styles.yorumTxt2}>{item.name}</Text>
          <TouchableOpacity>
            <VideoPlayer
              video={{
                uri: item.video,
              }}
              autoplay={false}
              thumbnail={item.photo}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          </TouchableOpacity>
          <View style={styles.textC}>
            <Text style={styles.yorumTxt}>{item.name}</Text>
            <Text style={styles.yorumTxt3}>{item.context}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoGaleryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.button.authbutton,
  },
  headerC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(30),
    justifyContent: 'space-between',
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.white,
    marginLeft: moderateScale(10),
  },
  yorumTxt2: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
    color: Colors.button.white,
    marginLeft: moderateScale(10),
    textAlign: 'center',
  },
  yorumTxt3: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.regular,
    color: Colors.button.white,
    marginLeft: moderateScale(10),
  },
  bodyC: {
    flexDirection: 'column',
    justifyContent: 'center',

    marginTop: moderateVerticalScale(10),
  },
  photo: {
    marginTop: moderateVerticalScale(35),
    width: '100%',
    resizeMode: 'cover',
  },
  textC: {
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(20),
    marginTop: moderateScale(20),
  },
});
