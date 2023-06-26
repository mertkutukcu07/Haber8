import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Scrolv,
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
import GuncelHaberlerData from '../constants/data/GuncelHaberlerData';
import Images from '../constants/Images';

const FotoGaleri = ({onPress, onPressNewsDetail, onPressheader}) => {
  const [columns, setColumns] = useState(2);
  const renderItem = ({item, index}) => (
    <View style={styles.newsc}>
      <TouchableOpacity onPress={() => onPressNewsDetail(item)}>
        <Image source={item.photo} style={styles.newsPhoto} />
        <View style={styles.contextC}>
          <Text style={styles.contextTxt}>{item.context}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const item = {
    context:
      'Erkek arkadaşı tarafından p vurularak öldürüldü! ..Erkek arkadaşı',
    photo: Images.haber8img.fotogaleriheader,
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Foto Galeri</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onPressheader(item)}>
        <View style={styles.fotogalerihC}>
          <Image source={item.photo} style={styles.headerImg} />
          <Text style={styles.contextTxt1}>{item.context}</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={GuncelHaberlerData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={columns}
        style={{flexDirection: 'row'}}
        scrollEnabled={false}
      />
    </View>
  );
};

export default FotoGaleri;

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
    borderColor: 'white',
    textAlign: 'center',
    width: moderateScale(120),
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
    width: moderateScale(150),
    marginTop: moderateVerticalScale(15),
    marginRight: moderateVerticalScale(10),
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
    textAlign: 'center',
    color: Colors.text.black,
    fontFamily: Fonts.medium,
  },
  contextTxt1: {
    textAlign: 'center',
    color: Colors.text.black,
    fontFamily: Fonts.medium,
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
    borderColor: Colors.bottombuttons.bottomdefault,
    shadowColor: Colors.bottombuttons.bottomdefault,
    width: moderateScale(350),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(150),
  },
  fotogalerihC: {
    marginTop: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    width: moderateScale(350),
  },
});
