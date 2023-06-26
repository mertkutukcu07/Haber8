import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
const İletisim = ({navigation}) => {
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
          <Text style={styles.yorumTxt}>İletişim</Text>
        </View>
        <View style={styles.bodyC}>
          <View style={styles.headerC2}>
            <Text style={styles.headerTxt}>HABER8</Text>
            <Text>Test İletişim Adresi</Text>
            <View style={styles.iletisimC}>
              <Foundation name="telephone" size={25} color={'#4BB9D7'} />
              <Text style={styles.TelTxt}>0545 121 24 32</Text>
              <View style={styles.mailC}>
                <Foundation name="mail" size={25} color={'#4BB9D7'} />
                <Text style={styles.TelTxt}>info@haber8.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputC}>
            <TextInput placeholder="Ad Soyad" style={styles.input} />
            <TextInput placeholder="E-Posta" style={styles.input} />
            <TextInput
              placeholder="Telefon"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              placeholder="Mesajınız"
              style={styles.inputmsj}
              multiline
              textAlignVertical="top"
            />
          </View>
          <View style={styles.buttonC}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.button.authbutton,
                height: moderateVerticalScale(50),
                width: moderateScale(100),
                marginHorizontal: moderateScale(36),
                borderRadius: 10,
              }}>
              <Text style={styles.buttonTextStyle2}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default İletisim;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(30),
  },
  headerC2: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(30),
  },
  itemContainer: {
    height: moderateVerticalScale(60),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  bodyC: {
    marginVertical: moderateVerticalScale(20),
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    marginLeft: moderateScale(10),
  },
  iletisimC: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  TelTxt: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    color: Colors.text.black,
  },
  mailC: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  headerTxt: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
    color: Colors.text.black,
  },
  inputC: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
    gap: moderateVerticalScale(20),
  },
  input: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(300),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    minHeight: moderateVerticalScale(50),
    fontWeight: '900',

    borderRadius: 10,
  },
  inputmsj: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(300),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    minHeight: moderateVerticalScale(50),
    fontWeight: '900',
    height: moderateVerticalScale(200),
    borderRadius: 10,
  },
  buttonC: {
    marginTop: moderateScale(15),
  },
  buttonTextStyle2: {
    fontFamily: Fonts.medium,
    color: Colors.text.white,
    fontSize: moderateScale(14),
  },
});
