import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
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
import MagazinData from '../constants/data/MagazinData';

const Magazin = ({onPress, onPressNewsDetail}) => {
  const renderItem = ({item, index}) => (
    <View style={{}}>
      <View style={styles.newsc}>
        <TouchableOpacity onPress={() => onPressNewsDetail(item)}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image source={item.photo} style={styles.newsPhoto} />
            <View style={styles.contextC}>
              <Text style={styles.contextTxt}>{item.context}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Magazin</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={MagazinData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Magazin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  newsc: {
    width: moderateScale(160),
    marginTop: moderateVerticalScale(20),
  },
  contextC: {
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
    borderColor: Colors.bottombuttons.bottomdefault,
    shadowColor: Colors.bottombuttons.bottomdefault,
    justifyContent: 'center',
    width: '100%',
  },
  contextTxt: {
    color: Colors.text.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.medium,

    height: moderateScale(100),
    textAlign: 'center',
    maxWidth: moderateScale(200),
  },
  newsPhoto: {},
});
