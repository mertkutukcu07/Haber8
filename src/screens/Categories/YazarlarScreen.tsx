import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import CategoryHeader from '../../Components/CategoryHeader';
import YazarlarData from '../../constants/data/YazarlarData';
import Images from '../../constants/Images';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
const YazarlarScreen = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity>
      <ImageBackground
        source={Images.haber8img.yazarlarbg2}
        style={styles.yazarbg}>
        <View style={styles.newsc}>
          <View style={styles.textC}>
            <Text
              style={[
                styles.yazarTxt,
                index % 2 === 0 ? {textAlign: 'right'} : null,
              ]}>
              {item.yazar}
            </Text>
            <View key={item.id}>
              <Text style={styles.contextTxt}>{item.context}</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: moderateScale(250),
            }}>
            <Image
              source={item.photo}
              style={[
                styles.yazarp,
                index % 2 === 0 ? {marginRight: moderateScale(400)} : null,
              ]}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <CategoryHeader
            onPress={() => navigation.goBack()}
            onPressSearch={() => navigation.navigate('Search')}
            onPressNoti={() => navigation.navigate('Bildirimler')}
          />
          <View>
            <FlatList
              data={YazarlarData}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YazarlarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: moderateVerticalScale(50),
    width: '100%',
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
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(12),

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
    color: Colors.button.authbutton,
    fontFamily: Fonts.regular,
    textAlign: 'left',
    fontSize: moderateScale(13),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
  yazarbg: {
    flex: 1,
    height: moderateScale(270),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  textC: {
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(50),
  },
  yazarTxt: {
    color: Colors.button.authbutton,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(25),
  },
  yazarp: {
    marginRight: moderateScale(90),
  },
});
