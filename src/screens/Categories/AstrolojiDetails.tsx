import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Share,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import Fonts from '../../constants/Fonts';
import YorumData from '../../constants/data/YorumData';
import BannerData from '../../constants/data/BannerData';

const AstrolojiDetails = ({route, navigation}) => {
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
  const [currentIndex, setIndex] = useState(0);
  const {item} = route.params;
  console.log(item);
  console.log(item);
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('AstrolojiDetails', {item})}>
          <Image source={item.photo} style={styles.bannerPhoto} />
          <View style={styles.contextC}>
            <Text style={styles.contextTxt2}>
              20-26 MART HAFTASINDA BURCUNUZU NELER BEKLİYOR?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerC}>
          <TouchableOpacity
            style={styles.backİcon}
            onPress={() => navigation.goBack()}>
            <IonIcons
              name="arrow-back"
              color={Colors.text.gray}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
          <Text style={styles.yorumTxt}>Astroloji</Text>
        </View>

        <View style={styles.bodyc}>
          <ImageBackground source={item.photo} style={styles.image}>
            <Text style={styles.headerTxt}>
              20 MART 2023 GÜNLÜK BURÇ YORUMLARI
            </Text>
          </ImageBackground>
          <View style={styles.bodyC2}>
            <Text style={styles.contextTxt}>{item.baslik}</Text>
            <Text style={styles.detayTxt}>{item.context}</Text>
            <Text style={styles.tarihTxt}>{item.yazar}</Text>
            <Text style={styles.tarihTxt}>
              Astroloji / 27 Haziran Salı 00:39
            </Text>
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
            <View style={styles.commentC}>
              <Text style={styles.yorumTxt}>
                Yorumlar ({`${YorumData.length}`})
              </Text>
            </View>
            <View>
              {YorumData.slice(0, 3).map(item => (
                <View
                  style={{
                    gap: moderateScale(4),
                    backgroundColor: '#d1d5db',
                    marginVertical: moderateVerticalScale(10),
                    paddingVertical: moderateVerticalScale(10),
                    paddingHorizontal: moderateScale(10),
                  }}
                  key={item.id}>
                  <Text
                    style={{
                      color: '#2F2F2F',
                      fontSize: moderateScale(15),
                      fontFamily: Fonts.bold,
                    }}>
                    {item.yazar}
                  </Text>
                  <Text
                    style={{
                      color: '#2F2F2F',
                      fontSize: moderateScale(12),
                      fontFamily: Fonts.regular,
                    }}>
                    {item.context}
                  </Text>
                  <Text
                    style={{
                      color: '#2F2F2F',
                      fontSize: moderateScale(12),
                      fontFamily: Fonts.regular,
                    }}>
                    {item.tarih}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.commentC}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#d1d5db',
                  height: moderateVerticalScale(40),
                  justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('Yorumlar')}>
                <Text style={styles.yorumTxt2}>Tüm Yorumları Göster</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: moderateScale(8),
              }}>
              <Text style={styles.yorumTxt2}>İlginizi Çekebilir</Text>
              <MaterialCommunityIcons
                name="shopping-search"
                color={Colors.text.black}
                size={moderateScale(20)}
              />
            </View>
          </View>

          <View style={styles.bannerC}>
            <Carousel
              keyExtractor={(item, index) => index.toString()}
              data={BannerData}
              renderItem={renderItem}
              sliderWidth={moderateScale(390)} // sliderWidth'ü container'ın genişliğine eşitleyin
              itemWidth={moderateScale(390)}
              layoutCardOffset={20}
              layout="default"
              onSnapToItem={index => setIndex(index)}
            />
            <Pagination
              dotsLength={BannerData.length}
              containerStyle={styles.dotCont}
              dotStyle={styles.dot}
              activeDotIndex={currentIndex}
              inactiveDotStyle={styles.inactivedot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <View>
            <View style={styles.pleaseC}>
              <Foundation
                name="info"
                color={Colors.text.black}
                size={moderateScale(20)}
              />
              <Text style={styles.yorumTxt3}>
                Lütfen beğeni ve yorumlar için giriş yapınız.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AstrolojiDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: moderateVerticalScale(200),
    resizeMode: 'cover',
  },
  headerC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(30),
  },
  bodyc: {
    flexDirection: 'column',
    justifyContent: 'center',

    marginTop: moderateVerticalScale(15),
  },
  backİcon: {},
  contextTxt: {
    fontSize: moderateScale(18),
    width: '100%',
    color: Colors.text.gray,
    fontFamily: Fonts.bold,
    marginTop: moderateVerticalScale(10),
  },
  bodyC2: {
    paddingHorizontal: moderateScale(20),
    gap: moderateVerticalScale(20),
  },
  detayTxt: {
    fontSize: moderateScale(15),
    color: Colors.text.gray,
    fontFamily: Fonts.medium,
  },
  tarihTxt: {
    color: Colors.button.authbutton,
    fontFamily: Fonts.bold,
  },
  iconC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconC2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  commentC: {
    height: moderateVerticalScale(40),
    justifyContent: 'center',
  },
  commentC2: {
    backgroundColor: '#d1d5db',
    height: moderateVerticalScale(40),
    paddingHorizontal: moderateScale(50),
    width: moderateScale(365),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
    borderRadius: 25,
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    marginLeft: moderateScale(10),
  },
  yorumTxt2: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    marginLeft: moderateScale(10),
  },
  yorumTxt3: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.regular,
    textAlign: 'center',
    color: Colors.button.authbutton,
  },
  bannerPhoto: {
    height: moderateVerticalScale(300),
  },
  contextC: {
    position: 'absolute',
    color: Colors.text.white,
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(230),
    gap: moderateScale(10),
  },
  contextTxt2: {
    color: Colors.text.white,
    fontFamily: Fonts.medium,
    width: moderateScale(350),
  },
  bannerC: {
    marginTop: moderateVerticalScale(20),
  },
  pleaseC: {
    backgroundColor: '#d1d5db',
    marginHorizontal: moderateScale(40),
    width: moderateScale(300),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: moderateVerticalScale(30),
    marginBottom: moderateVerticalScale(15),
    gap: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
  },
  headerTxt: {
    fontSize: moderateScale(18),
    paddingHorizontal: moderateScale(20),

    width: '70%',
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    marginTop: moderateVerticalScale(140),
  },
});
