import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import NewsData from '../../constants/data/NewsData';
const Bildirimler = ({navigation}) => {
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
          <Text style={styles.yorumTxt}>Bildirimler</Text>
        </View>
        <View style={styles.bodyC}>
          <View>
            {NewsData.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetail', {item})}
                key={item.id}
                style={[
                  styles.itemContainer,
                  index % 2 === 0
                    ? styles.grayBackground
                    : styles.redBackground,
                ]}>
                <View style={styles.textiC}>
                  <Text style={styles.itemTitle}>{item.context}</Text>
                  <Text style={styles.tarihTxt}>{item.tarih}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bildirimler;

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
  itemContainer: {
    height: moderateVerticalScale(70),
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
  textiC: {
    flexDirection: 'column',
  },
  grayBackground: {
    backgroundColor: '#ECECEC',
  },
  redBackground: {
    backgroundColor: '#F5F5F5',
  },
  itemTitle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Colors.text.gray,
  },
  tarihTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.regular,
  },
});
