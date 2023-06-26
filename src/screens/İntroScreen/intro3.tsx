import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import Images from '../../constants/Images';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const intro3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyC}>
        <Image source={Images.haber8img.introheader} style={styles.headerImg} />
        <View style={styles.textC}>
          <Text style={styles.infotext1}>
            Tek Bir Uygulama İle Haberleri Okuyun Ve Gündemden Haberdar Olun !
          </Text>
          <Text style={styles.infotext2}>
            Son Dakika Haberlerini Anında Okumak İçin Uygulamayı İndirin.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default intro3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyC: {
    flexDirection: 'column',
  },
  headerImg: {
    width: '100%',
    height: moderateScale(420),
  },
  infotext1: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
  },
  infotext2: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    fontFamily: Fonts.regular,
    color: Colors.text.gray,
    opacity: 0.8,
  },
  textC: {
    justifyContent: 'center',

    marginTop: verticalScale(15),
    gap: verticalScale(10),
    paddingHorizontal: moderateScale(30),
  },
});
