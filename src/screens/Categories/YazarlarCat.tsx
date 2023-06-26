import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CategoryHeader from '../../Components/CategoryHeader';
import SlideCatData from '../../constants/data/SlideCatData';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import NewsData from '../../constants/data/NewsData';

const YazarlarCat = ({navigation}) => {
  const [currentIndex, setIndex] = useState(0);
  const [columns, setColumns] = useState(2);
  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen);
  };

  const renderItem = ({item, index}) => (
    <View>
      <View style={styles.newsc}>
        <TouchableOpacity>
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
      <CategoryHeader
        onPressSearch={() => navigation.navigate('Search')}
        onPress={() => navigation.goBack()}
        onPressNoti={() => navigation.navigate('Bildirimler')}
      />

      <View style={styles.bodyC}>
        <Text style={styles.headerTxt}>Yazarlar</Text>
        <FlatList
          data={NewsData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={columns}
          style={{flexDirection: 'row'}}
        />
      </View>
    </View>
  );
};

export default YazarlarCat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bodyC: {
    marginTop: moderateVerticalScale(120),
    height: '100%',
  },
  SlidecatC: {
    backgroundColor: Colors.button.authbutton,
    height: moderateScale(40),
  },
  catText: {
    color: Colors.text.white,
    opacity: 0.7,
    fontSize: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    fontFamily: Fonts.medium,
  },
  slidemapc: {
    justifyContent: 'center',
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
    width: moderateScale(150),
    marginTop: moderateVerticalScale(15),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
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
  headerTxt: {
    color: Colors.button.authbutton,
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(15),
  },
});
