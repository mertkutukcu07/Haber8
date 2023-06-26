import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import SlideCatData from '../../constants/data/SlideCatData';
import Fonts from '../../constants/Fonts';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BannerData from '../../constants/data/BannerData';
import Images from '../../constants/Images';
import BannerBottomData from '../../constants/data/BannerBottomData';
import OneCikanHaberler from '../../Components/OneCikanHaberler';
import Gundem from '../../Components/Gundem';
import Yazarlar from '../../Components/Yazarlar';
import Football from '../../Components/Football';
import Video from '../../Components/Video';
import GüncelHaberler from '../../Components/GüncelHaberler';
import FotoGaleri from '../../Components/FotoGaleri';
import NamazVakti from '../../Components/NamazVakti';
import YerelHaberler from '../../Components/YerelHaberler';
import HavaDurumu from '../../Components/HavaDurumu';
import Magazin from '../../Components/Magazin';
import DünyadanHaberler from '../../Components/DünyadanHaberler';
import Loading from '../../Components/Loading';

const HomeScreen = ({navigation}) => {
  const [currentIndex, setIndex] = useState(0);
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const navigateToScreen = screen => {
    navigation.navigate(screen);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('NewsDetail', {item})}>
          <Image source={item.photo} style={styles.bannerPhoto} />
          <View style={styles.contextC}>
            <Text style={styles.sondakikaTxt}>SON DAKİKA</Text>
            <Text style={styles.contextTxt}>{item.context}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerC}>
          <Header
            onPress={openDrawer}
            onPressSearch={() => navigation.navigate('Search')}
            onPressNoti={() => navigation.navigate('Bildirimler')}
          />
        </View>
        <View style={styles.bodyC}>
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
              autoplay
              loop
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
          <View style={styles.adebC}>
            {BannerBottomData.map((item, index) => (
              <View>
                <View style={styles.adebBody}>
                  {item.icon}
                  <View style={styles.priceandcatC}>
                    <Text style={styles.catTxt}>{item.category}</Text>
                    <Text style={styles.priceTxt}>{item.price}</Text>
                  </View>
                  {item.status}
                  {index !== BannerBottomData.length - 1 && (
                    <Image source={Images.haber8img.dolarsline} />
                  )}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.newsC}>
            <View style={styles.onecikanC}>
              <OneCikanHaberler
                onPress={() => navigation.navigate('ÖneCikanCat')}
                onPressNewsDetail={item =>
                  navigation.navigate('NewsDetail', {item})
                }
              />
            </View>
            <View>
              <Gundem
                onPressNewsDetail={item =>
                  navigation.navigate('NewsDetail', {item})
                }
                onPress={() => navigation.navigate('Gündem')}
              />
            </View>
            <View>
              <Yazarlar onPress={() => navigation.navigate('YazarlarScreen')} />
            </View>
            <View
              style={{
                backgroundColor: '#66AB1E',
                minHeight: moderateScale(750),
              }}>
              <Football
                onPressNewsDetail={item =>
                  navigation.navigate('NewsDetail', {item})
                }
                onPress={() => navigation.navigate('SporCat')}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.button.authbutton,
                minHeight: moderateScale(750),
              }}>
              <Video
                onPressNewsDetail={item =>
                  navigation.navigate('VideoGaleryDetail', {item})
                }
                onPress={() => navigation.navigate('VideoGaleri')}
                onPressHeaderVideo={item =>
                  navigation.navigate('VideoGaleryDetail', {item})
                }
              />
            </View>
            <View>
              <GüncelHaberler
                onPressNewsDetail={item =>
                  navigation.navigate('NewsDetail', {item})
                }
                onPress={() => navigation.navigate('GüncelHaberlerCat')}
              />
            </View>
            <View
              style={{
                backgroundColor: '#EE2625',
                minHeight: moderateScale(750),
              }}>
              <FotoGaleri
                onPressNewsDetail={item =>
                  navigation.navigate('PhotoGaleryDetail', {item})
                }
                onPress={() => navigation.navigate('PhotoGalery')}
                onPressheader={item =>
                  navigation.navigate('PhotoGaleryDetail', {item})
                }
              />
            </View>
            <View
              style={{
                minHeight: moderateScale(750),
              }}>
              <NamazVakti />
            </View>
            <View>
              <YerelHaberler
                onPressNewsDetail={item =>
                  navigation.navigate('NewsDetail', {item})
                }
                onPress={() => navigation.navigate('YerelHaberlerCat')}
              />
            </View>
          </View>
          <View
            style={{
              minHeight: moderateScale(600),
            }}>
            <HavaDurumu />
          </View>
          <View
            style={{
              backgroundColor: '#A90098',
              minHeight: moderateScale(600),
            }}>
            <Magazin
              onPressNewsDetail={item =>
                navigation.navigate('NewsDetail', {item})
              }
              onPress={() => navigation.navigate('MagazinCat')}
            />
          </View>
          <View
            style={{
              minHeight: moderateScale(550),
            }}>
            <DünyadanHaberler
              onPress={() => navigation.navigate('DünyadanCat')}
              onPressNewsDetail={item =>
                navigation.navigate('NewsDetail', {item})
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyC: {
    flex: 1,
  },
  headerC: {},
  SlidecatC: {
    backgroundColor: Colors.button.authbutton,
    height: moderateScale(40),
  },
  catText: {
    color: Colors.text.white,
    opacity: 0.7,
    fontSize: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    fontFamily: Fonts.medium,
  },
  slidemapc: {
    justifyContent: 'center',
  },
  bannerC: {
    justifyContent: 'center',
    height: moderateScale(250),
    gap: moderateScale(-10),
  },
  bannerPhoto: {
    resizeMode: 'cover',
    width: '100%',
  },
  contextC: {
    position: 'absolute',
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(100),
    gap: moderateScale(10),
  },
  sondakikaTxt: {
    color: Colors.text.white,
    backgroundColor: 'red',
    width: moderateScale(100),
    textAlign: 'center',
    fontFamily: Fonts.bold,
  },
  contextTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.medium,
    width: moderateScale(350),
  },
  dotCont: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.button.authbutton,
    height: moderateScale(60),
  },
  dot: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(10),
    width: moderateScale(10),
    borderRadius: 50,
  },
  inactivedot: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  adebC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(12),
    backgroundColor: Colors.bottombuttons.bottomdefault,
    shadowOpacity: 1,
    width: '100%',
  },
  priceandcatC: {
    marginHorizontal: moderateScale(5),
  },
  adebBody: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  catTxt: {
    color: Colors.button.authbutton,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(10),
  },
  priceTxt: {
    color: Colors.button.authbutton,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12),
  },
  onecikanC: {
    height: moderateVerticalScale(220),
  },
});
