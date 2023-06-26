import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
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
import Images from '../constants/Images';
import YazarlarData from '../constants/data/YazarlarData';

const Yazarlar = ({onPress}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity>
      <ImageBackground
        source={Images.haber8img.yazarlarbg}
        style={styles.yazarbg}>
        <View style={styles.newsc}>
          <View style={styles.textC}>
            <Text style={styles.contextTxt}>{item.context}</Text>
            <Text style={styles.yazarTxt}>{item.yazar}</Text>
          </View>
          <View
            style={{
              marginLeft: moderateScale(250),
            }}>
            <Image source={item.photo} style={styles.yazarp} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Yazarlar</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={YazarlarData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default Yazarlar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  headerC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    marginTop: moderateVerticalScale(25),
  },
  headerTxt: {
    color: Colors.text.black,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(15),
  },
  allnewsTxt: {
    color: Colors.text.black,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12),
    borderWidth: 1,
    textAlign: 'center',
    width: moderateScale(120),
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(12),
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
    color: Colors.text.white,
    fontFamily: Fonts.medium,
    textAlign: 'left',
    fontSize: moderateScale(16),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
  yazarbg: {
    flex: 1,
    height: moderateScale(270),
    width: moderateScale(300),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  textC: {
    gap: moderateScale(10),
  },
  yazarTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(15),
  },
});
