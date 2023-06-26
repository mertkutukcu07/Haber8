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

const Gundem = ({onPress, onPressNewsDetail}) => {
  const [columns, setColumns] = useState(2);
  const renderItem = ({item, index}) => (
    <View>
      <View style={styles.newsc}>
        <TouchableOpacity onPress={() => onPressNewsDetail(item)}>
          <Image source={item.photo} style={styles.newsPhoto} />
          <View style={styles.contextC}>
            <Text style={styles.contextTxt}>{item.context}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <Text style={styles.headerTxt}>Gündem</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.allnewsTxt}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={NewsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={columns}
        style={{flexDirection: 'row'}}
      />
    </View>
  );
};

export default Gundem;

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
    fontFamily: Fonts.bold,
    fontSize: moderateScale(14),
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
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
    textAlign: 'center',
    color: Colors.text.black,
    fontFamily: Fonts.medium,
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
});
