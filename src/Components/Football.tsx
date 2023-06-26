import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import NewsData from '../constants/data/NewsData';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import LigData from '../constants/data/LigData';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import SelectDropdown from 'react-native-select-dropdown';
import Images from '../constants/Images';

const Football = ({onPress, onPressNewsDetail}) => {
  const renderItem = ({item, index}) => (
    <View
      style={{
        backgroundColor: 'white',
        height: moderateScale(40),
      }}>
      <View style={styles.newsc}>
        <ScrollView>
          <View style={styles.teamnameC}>
            <Text style={styles.teamTxt}>{item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                gap: moderateScale(20),
              }}>
              <Text style={styles.takimlarTxt}>{item.o}</Text>
              <Text style={styles.takimlarTxt}>{item.g}</Text>
              <Text style={styles.takimlarTxt}>{item.av}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
  const newsRender = ({item, index}) => (
    <View>
      <View style={styles.newsc1}>
        <TouchableOpacity onPress={() => onPressNewsDetail(item)}>
          <Image source={item.photo} style={styles.newsPhoto} />
          <View style={styles.contextC1}>
            <Text style={styles.contextTxt1}>{item.context}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  const lig = [
    'Süper Lig',
    'Bundesliga',
    'La Liga',
    'Süper Lig',
    'Bundesliga',
    'La Liga',
  ];
  const renderDropdownIcon = ({onPress}) => {
    return (
      <Entypo name="chevron-down" size={moderateScale(30)} color={'#015024'} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Spor</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: moderateScale(10),
          gap: moderateScale(15),
        }}>
        <View style={styles.sporC}>
          <View style={styles.sporheaderC}>
            <Icon name="football" size={moderateScale(30)} color={'#015024'} />
            <Text style={styles.puandurumuTxt}>PUAN DURUMU</Text>
          </View>
          <SelectDropdown
            data={lig}
            buttonStyle={styles.button}
            renderDropdownIcon={renderDropdownIcon}
            defaultButtonText="Süper Lig"
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
        </View>

        <View style={styles.ligC}>
          <Image
            source={Images.haber8img.sporline1}
            style={{
              width: '100%',
            }}
          />
          <View style={styles.takimlarC}>
            <Text style={styles.takimlarTxt}>TAKIMLAR</Text>
            <View style={styles.sonucC}>
              <Text style={styles.takimlarTxt}>O</Text>
              <Text style={styles.takimlarTxt}>G</Text>
              <Text style={styles.takimlarTxt}>AV</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={LigData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View
        style={{
          marginBottom: moderateScale(20),
        }}>
        <FlatList
          data={NewsData}
          keyExtractor={item => item.id}
          renderItem={newsRender}
          horizontal
        />
      </View>
    </View>
  );
};

export default Football;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  headerC: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: moderateVerticalScale(25),
  },
  headerTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(14),
  },
  allnewsTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(12),
    borderWidth: 1,
    borderColor: Colors.text.white,
    textAlign: 'center',
    width: moderateScale(120),
  },
  newsc: {},
  contextC1: {
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
    borderColor: Colors.bottombuttons.bottomdefault,
    shadowColor: Colors.bottombuttons.bottomdefault,
  },
  puandurumuTxt: {
    textAlign: 'center',
    color: '#015024',
    fontFamily: Fonts.bold,
    fontSize: moderateScale(15),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
  sporC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(15),
  },
  sporheaderC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    width: moderateScale(150),
    height: moderateVerticalScale(30),
    borderRadius: 2,
  },
  buttonTextStyle: {
    color: '#4F9D5A',
  },
  ligC: {
    paddingHorizontal: moderateScale(4),
    marginTop: moderateVerticalScale(0),
    height: moderateScale(30),
  },
  takimlarC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(6),
    paddingHorizontal: moderateScale(3),
  },
  sonucC: {
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  takimlarTxt: {
    fontFamily: Fonts.medium,
    color: '#333333',
  },
  teamnameC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
    marginTop: moderateScale(15),
  },
  teamTxt: {
    textAlign: 'left',
    color: '#333333',
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
  },
  contextTxt1: {
    textAlign: 'center',
    color: Colors.text.black,
    fontFamily: Fonts.medium,
  },
  newsc1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
    width: moderateScale(150),
    marginTop: moderateVerticalScale(15),
  },
});
