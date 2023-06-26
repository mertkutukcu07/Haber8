import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import SelectDropdown from 'react-native-select-dropdown';
import Fonts from '../constants/Fonts';
import NamazVaktiData from '../constants/data/NamazVaktiData';
const NamazVakti = () => {
  const sehir = [
    'Bursa',
    'Antalya',
    'Kahramanmaraş',
    'Bursa',
    'Bursa',
    'Bursa',
  ];

  const renderDropdownIcon = () => {
    return (
      <Entypo name="chevron-down" size={moderateScale(30)} color={'white'} />
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.haber8img.namazvaktibg}
        style={styles.bgi}>
        <View style={styles.bodyC}>
          <SelectDropdown
            data={sehir}
            buttonStyle={styles.button}
            renderDropdownIcon={renderDropdownIcon}
            defaultButtonText="Bursa"
            buttonTextStyle={styles.buttonTextStyle}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Text style={styles.timeText}>23 Haziran Cuma,2023</Text>
          <View style={styles.kalanzaman}>
            <Text style={styles.timeText2}>İkindiye Kalan Süre</Text>
            <Text style={styles.timeText3}>00:10:34</Text>
          </View>
          {NamazVaktiData.map((item, index) => (
            <View key={item.id}>
              <View style={styles.vakitlerC}>
                <Text style={[styles.catTxt, index === 2 && styles.greenText]}>
                  {item.category}
                </Text>
                <Text style={[styles.timeTxt, index === 2 && styles.greenText]}>
                  {item.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default NamazVakti;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgi: {
    flex: 1,
    resizeMode: 'contain',
  },
  bodyC: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },
  button: {
    backgroundColor: 'transparent',
    minWidth: moderateScale(220),
    height: moderateVerticalScale(30),
    borderRadius: 2,
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontFamily: Fonts.bold,
    alignItems: 'center',
    textAlign: 'center',
  },
  timeText: {
    color: 'white',
    fontFamily: Fonts.regular,
    textAlign: 'center',
    fontSize: moderateScale(15),
    marginTop: moderateScale(15),
  },
  timeText2: {
    color: 'black',
    fontFamily: Fonts.regular,
    textAlign: 'center',
    fontSize: moderateScale(15),
    marginTop: moderateScale(12),
  },
  timeText3: {
    color: 'black',
    fontFamily: Fonts.bold,
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginTop: moderateScale(12),
  },
  kalanzaman: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: moderateScale(200),
    height: moderateVerticalScale(80),
    marginTop: moderateVerticalScale(15),
  },
  vakitlerC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    backgroundColor: 'rgba(218, 218, 218, 0.1)',
    width: moderateScale(300),
    height: moderateVerticalScale(69),
    marginVertical: moderateVerticalScale(20),
  },
  catTxt: {
    fontFamily: Fonts.bold,
    color: '#F5F5F5',
    fontSize: moderateScale(17),
    textAlign: 'center',
  },
  timeTxt: {
    fontFamily: Fonts.bold,
    color: '#F5F5F5',
    fontSize: moderateScale(17),
    textAlign: 'center',
  },
  greenText: {
    color: '#18BC58',
  },
});
