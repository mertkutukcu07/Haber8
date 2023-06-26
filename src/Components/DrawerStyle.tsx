import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
const DrawerStyle = ({}) => {
  const navigation = useNavigation();
  const haber8data = [
    {
      id: 0,
      title: 'Anasayfa',
      screen: 'Home',
    },
    {
      id: 1,
      title: 'Son Dakika',
      screen: 'Home',
    },
    {
      id: 2,
      title: 'Bugünden Özet',
      screen: 'Home',
    },
    {
      id: 3,
      title: 'Hava Durumu',
      screen: 'HavaDurumuScreen',
    },
    {
      id: 4,
      title: 'Video Galeri',
      screen: 'VideoGaleri',
    },
    {
      id: 5,
      title: 'Yazarlar',
      screen: 'YazarlarScreen',
    },
  ];
  const catData = [
    {
      id: 0,
      title: 'Spor',
      screen: 'SporCat',
    },
    {
      id: 1,
      title: 'Magazin',
      screen: 'MagazinCat',
    },
    {
      id: 2,
      title: 'Teknoloji',
      screen: 'Teknoloji',
    },
    {
      id: 3,
      title: 'Sağlık',
      screen: 'Sağlık',
    },
    {
      id: 4,
      title: 'Otomobil',
      screen: 'Otomobil',
    },
    {
      id: 5,
      title: 'Ekonomi',
      screen: 'Ekonomi',
    },
  ];
  const settingsData = [
    {
      id: 0,
      title: 'Haber8 Astroloji',
      screen: 'Astroloji',
    },

    {
      id: 1,
      title: 'Ayarlar',
      screen: 'Ayarlar',
    },
    {
      id: 2,
      title: 'İletişim',
      screen: 'İletisim',
    },
    {
      id: 3,
      title: 'Haber İhbar',
      screen: 'Haberİhbar',
    },
    {
      id: 4,
      title: 'Künye Bilgileri',
      screen: 'KünyeBilgileri',
    },
  ];
  const bottomData = [
    {
      id: 0,
      title: 'Uygulamayı Paylaş',
    },
    {
      id: 1,
      title: 'Uygulamaya Yorum Yap',
    },
    {
      id: 2,
      title: 'Şikayet ve Görüş Bildir',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={Images.haber8img.drawerheader}
          style={styles.drawerheaderImg}>
          <View style={styles.LogoC}>
            <Image
              source={Images.haber8img.haber8logo}
              style={styles.haber8Logo}
            />
          </View>
        </ImageBackground>
        <View style={styles.bodyC}>
          <View style={styles.body1C}>
            <TouchableOpacity
              style={styles.body1C}
              onPress={() => navigation.navigate('Login')}>
              <Ionicons name="person-circle" size={30} />
              <Text style={styles.authtext}>Üye Girişi Yap/Üye Ol</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.catC}>
            <Text style={styles.headerTxt}>Haber 8</Text>
            <View
              style={{
                marginTop: moderateScale(6),
              }}>
              {haber8data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.screen) {
                      navigation.navigate(item.screen);
                    }
                  }}
                  style={styles.catsC}>
                  <Text
                    style={[styles.cattxt, index === 1 && styles.sondakikaTxt]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                borderWidth: 1,
                color: '#00113C',
                opacity: 0.2,
                marginTop: moderateScale(10),
              }}></View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <Text style={styles.headerTxt}>Kategoriler</Text>
              <View
                style={{
                  marginTop: moderateScale(6),
                }}>
                {catData.map((item, index) => (
                  <TouchableOpacity
                    style={styles.catsC}
                    onPress={() => {
                      if (item.screen) {
                        navigation.navigate(item.screen);
                      }
                    }}>
                    <Text style={styles.cattxt}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  borderWidth: 1,
                  color: '#00113C',
                  opacity: 0.2,
                  marginTop: moderateScale(10),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  marginTop: moderateScale(6),
                }}>
                {settingsData.map((item, index) => (
                  <TouchableOpacity
                    style={styles.catsC}
                    onPress={() => {
                      if (item.screen) {
                        navigation.navigate(item.screen);
                      }
                    }}>
                    <Text style={styles.cattxt}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  borderWidth: 1,
                  color: '#00113C',
                  opacity: 0.2,
                  marginTop: moderateScale(10),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  marginTop: moderateScale(6),
                }}>
                {bottomData.map((item, index) => (
                  <TouchableOpacity style={styles.catsC}>
                    <Text style={styles.cattxt}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerStyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerheaderImg: {
    width: '100%',
    height: moderateVerticalScale(100),
    bottom: 0,
  },
  LogoC: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(28),
  },
  body1C: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3ECCF3',
    paddingHorizontal: moderateScale(10),
    gap: moderateScale(5),
    height: moderateScale(50),
  },
  catC: {
    marginTop: moderateScale(8),
  },
  catsC: {
    paddingVertical: moderateScale(7),
    marginTop: moderateScale(2),
  },
  authtext: {
    color: Colors.button.authbutton,
    fontSize: moderateScale(14),
    fontFamily: Fonts.bold,
  },
  headerTxt: {
    color: Colors.button.authbutton,
    fontFamily: Fonts.bold,
    paddingHorizontal: moderateScale(10),
  },
  cattxt: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.regular,
    color: Colors.button.authbutton,
    paddingHorizontal: moderateScale(20),
    fontWeight: '500',
  },
  sondakikaTxt: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.regular,
    color: 'red',
    paddingHorizontal: moderateScale(20),
    fontWeight: '500',
  },
});
