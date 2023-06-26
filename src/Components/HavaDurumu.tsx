import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
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
import Fontisto from 'react-native-vector-icons/Fontisto';

import NamazVaktiData from '../constants/data/NamazVaktiData';
import Colors from '../constants/Colors';
import HavaDurumuSaatData from '../constants/data/HavaDurumuSaatData';
import {ScreenContainer} from 'react-native-screens';
import HavaDurumuDataBes from '../constants/data/HavaDurumuDataBes';
const HavaDurumu = () => {
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
      <ImageBackground source={Images.haber8img.havadurumu} style={styles.bgi}>
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
          <View style={styles.weatherheaderC}>
            <Text style={styles.weatherTxt}>15 °</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="day-sunny" size={30} color={'yellow'} />
              <Text style={styles.weatherTxt2}>Güneşli</Text>
            </View>
          </View>
          <View style={styles.weatherBodyC}>
            <View>
              <Text style={styles.weatherBodyTxt}>Basınç</Text>
              <Text style={styles.weatherBodyTxt2}>3000 Mb</Text>
            </View>
            <View>
              <Text style={styles.weatherBodyTxt}>Nem</Text>
              <Text style={styles.weatherBodyTxt2}>%50</Text>
            </View>
            <View>
              <Text style={styles.weatherBodyTxt}>Rüzgar</Text>
              <Text style={styles.weatherBodyTxt2}>3.0 Km</Text>
            </View>
          </View>
          <ScrollView horizontal>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {HavaDurumuSaatData.map((item, index) => (
                <View key={item.id} style={styles.havabesC}>
                  <View style={styles.saatC}>
                    <Text style={styles.saatTxt}>{item.saat}</Text>
                    <Text style={styles.saatdereceTxt}>{item.saatderece}</Text>
                    {item.icon}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.bottomweatherC}>
            <Text style={styles.saatTxth}>5 Günlük Hava Tahmini</Text>
            {HavaDurumuDataBes.map(item => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    paddingVertical: moderateVerticalScale(15),
                    marginLeft: moderateScale(5),
                  }}>
                  <Text style={styles.saatTxt2}>{item.tarih}</Text>
                </View>
                <View
                  style={{
                    paddingVertical: moderateVerticalScale(15),
                    position: 'absolute',
                    marginLeft: moderateScale(165),
                  }}>
                  <Text style={styles.saatTxt}>{item.derece}</Text>
                </View>
                <View
                  style={{
                    paddingVertical: moderateVerticalScale(15),
                    position: 'absolute',
                    marginLeft: moderateScale(215),
                  }}>
                  {item.icon}
                </View>
                <View
                  style={{
                    paddingVertical: moderateVerticalScale(15),
                    position: 'absolute',
                    marginLeft: moderateScale(250),
                  }}>
                  <Text style={styles.saatTxt3}>{item.durum}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HavaDurumu;

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
  havabesC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(218, 218, 218, 0.1)',
    marginHorizontal: moderateScale(10),
    width: moderateScale(70),
    height: moderateVerticalScale(100),
    marginTop: moderateScale(10),
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
  weatherheaderC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(20),
    gap: moderateScale(15),
  },
  weatherBodyC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(50),
  },
  weatherTxt: {
    color: '#DADADA',
    fontSize: moderateScale(30),
    fontFamily: Fonts.medium,
  },
  weatherTxt2: {
    color: '#DADADA',
    fontSize: moderateScale(15),
    fontFamily: Fonts.regular,
  },
  weatherBodyTxt: {
    color: '#DADADA',
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
  },
  weatherBodyTxt2: {
    color: '#DADADA',
    fontSize: moderateScale(12),
    fontFamily: Fonts.regular,
    marginVertical: moderateVerticalScale(10),
  },
  saatC: {
    gap: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  saatTxt: {
    color: '#F5F5F5',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
  },
  saatTxt2: {
    color: '#F5F5F5',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12),
  },
  saatTxt3: {
    color: '#F5F5F5',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(11.2),
  },
  saatTxth: {
    color: '#F5F5F5',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(18),
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  saatdereceTxt: {
    color: '#F5F5F5',
    fontFamily: Fonts.regular,
    fontSize: moderateScale(15),
  },
  bottomweatherC: {
    backgroundColor: 'rgba(218, 218, 218, 0.1)',
    marginHorizontal: moderateScale(10),
    width: moderateScale(350),
    height: moderateVerticalScale(300),
    marginTop: moderateScale(10),
  },
});
