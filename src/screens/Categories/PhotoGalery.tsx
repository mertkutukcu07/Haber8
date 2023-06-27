import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Share,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import SlideCatData from '../../constants/data/SlideCatData';
import SlideVideoData from '../../constants/data/SlideVideoData';
import VideoGaleriData from '../../constants/data/VideoGaleriData';
import VideoPlayer from 'react-native-video-player';
import Images from '../../constants/Images';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gallery from 'react-native-image-gallery';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BannerData from '../../constants/data/BannerData';

const PhotoGalery = ({navigation}) => {
  const [currentIndex, setIndex] = useState(0);
  const navigateToScreen = screen => {
    navigation.navigate(screen);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('PhotoGaleryDetail', {item})}>
          <Image source={item.photo} style={styles.bannerPhoto} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderDots = (activeIndex, total) => {
    return (
      <View style={styles.dotContainer}>
        <FontAwesome name="photo" size={20} color="white" />
        <Text style={styles.dotText}>
          {activeIndex + 1}/{total}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerC}>
          <View style={styles.header2C}>
            <TouchableOpacity
              style={styles.backİcon}
              onPress={() => navigation.goBack()}>
              <IonIcons
                name="arrow-back"
                color={Colors.text.white}
                size={moderateScale(30)}
              />
            </TouchableOpacity>
            <Text style={styles.yorumTxt}>Foto Galeri</Text>
          </View>
          <View style={styles.SlidecatC}>
            <ScrollView horizontal>
              {SlideCatData.map(item => (
                <View style={styles.slidemapc} key={item.id}>
                  <TouchableOpacity
                    onPress={() => navigateToScreen(item.category)}
                    key={item.id}>
                    <Text
                      style={[
                        styles.catText,
                        item.id === 0
                          ? {color: Colors.text.white, opacity: 1}
                          : null,
                      ]}>
                      {item.category}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View>
          {VideoGaleriData.map((item, index) => (
            <View style={styles.videoC}>
              <View style={styles.textC}>
                <Image source={Images.haber8img.nokta} />
                <Text style={styles.catTxt2}>{item.category}</Text>
              </View>
              <View>
                <Carousel
                  keyExtractor={(item, index) => index.toString()}
                  data={VideoGaleriData}
                  renderItem={renderItem}
                  sliderWidth={moderateScale(390)} // sliderWidth'ü container'ın genişliğine eşitleyin
                  itemWidth={moderateScale(390)}
                  layoutCardOffset={20}
                  layout="default"
                  onSnapToItem={index => setIndex(index)}
                />
                <View
                  style={{
                    position: 'absolute',
                  }}>
                  <Pagination
                    dotsLength={VideoGaleriData.length}
                    containerStyle={styles.dotCont}
                    dotStyle={styles.dot}
                    activeDotIndex={currentIndex}
                    inactiveDotStyle={styles.inactivedot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    renderDots={(activeIndex, total) =>
                      renderDots(activeIndex, total)
                    }
                  />
                </View>
              </View>
              <View style={styles.iconC}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#d1d5db',
                    borderRadius: 20,
                    height: moderateScale(35),
                    width: moderateScale(35),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IonIcons
                    name="heart-outline"
                    color={Colors.text.black}
                    size={moderateScale(25)}
                  />
                </TouchableOpacity>
                <View style={styles.iconC2}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d1d5db',
                      borderRadius: 20,
                      height: moderateScale(35),
                      width: moderateScale(35),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Yorumlar')}>
                    <Fontisto
                      name="comment"
                      color={Colors.text.black}
                      size={moderateScale(20)}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d1d5db',
                      borderRadius: 20,
                      height: moderateScale(35),
                      width: moderateScale(35),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={onShare}>
                    <MaterialIcons
                      name="save-alt"
                      color={Colors.text.black}
                      size={moderateScale(25)}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d1d5db',
                      borderRadius: 20,
                      height: moderateScale(35),
                      width: moderateScale(35),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={onShare}>
                    <Fontisto
                      name="share-a"
                      color={Colors.text.black}
                      size={moderateScale(20)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.likeAC}>
                {(index === 0 || index === 3) && (
                  <View style={styles.likeC}>
                    <View style={styles.personC}>
                      <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={20}
                      />
                      <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={20}
                      />
                    </View>
                    <Text style={styles.likeTxt}>
                      Orkun Çaylar ve 1 kişi beğendi.
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.bodyC}>
                <Text style={styles.newsTxt}>{item.name}</Text>
                <Text style={styles.contextTxt}>{item.context}</Text>
                <Text style={styles.tarihTxt}>{item.tarih}</Text>
                <View style={styles.bottomC}>
                  <View style={styles.bottomC1}>
                    <MaterialCommunityIcons
                      name="account-circle-outline"
                      size={25}
                    />

                    <TextInput
                      placeholder="Yorum Ekle"
                      placeholderTextColor={Colors.button.authbutton}
                      style={styles.input}
                    />
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.buttonTxt}>Gönder</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotoGalery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerC: {
    flexDirection: 'column',

    gap: moderateScale(10),

    height: moderateVerticalScale(140),
    backgroundColor: Colors.button.authbutton,
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.text.white,
    marginLeft: moderateScale(10),
  },
  SlidecatC: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    height: moderateScale(40),
  },
  slidemapc: {
    justifyContent: 'center',
  },
  catText: {
    color: Colors.text.white,
    opacity: 0.7,
    fontSize: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    fontFamily: Fonts.medium,
  },
  header2C: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(40),
    alignItems: 'center',
    paddingHorizontal: moderateVerticalScale(15),
  },
  textC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateVerticalScale(15),
    gap: moderateScale(10),
    marginBottom: moderateVerticalScale(10),
  },
  videoC: {
    marginVertical: moderateVerticalScale(20),
  },
  iconC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(10),
  },
  iconC2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  bodyC: {
    paddingHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(10),
    gap: moderateScale(10),
  },
  newsTxt: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
  },
  contextTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.regular,
    color: Colors.text.gray,
  },
  tarihTxt: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.regular,
    color: Colors.text.gray,
  },
  nokta: {
    fontSize: moderateScale(50),
    fontFamily: Fonts.regular,
    color: Colors.text.gray,
    textAlign: 'center',
  },
  catTxt2: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    textAlign: 'center',
  },
  bottomC: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1d5db',
    height: moderateVerticalScale(50),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  bottomC1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingLeft: moderateScale(10),
    maxWidth: moderateScale(250),
  },
  buttonTxt: {
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
  },
  likeC: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  personC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeAC: {
    paddingHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(10),
  },
  likeTxt: {
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  dotText: {
    fontFamily: Fonts.bold,
    color: Colors.text.white,
  },
});
