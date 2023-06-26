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
import Antdesign from 'react-native-vector-icons/AntDesign';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import YorumData from '../../constants/data/YorumData';
import Fonts from '../../constants/Fonts';
const SettingsScreen = ({navigation}) => {
  const AyarlarData = [
    {
      id: 0,
      title: 'Bildirimler',
      screen: 'Bildirimler',
    },
    {
      id: 1,
      title: 'İletişim',
      screen: 'İletisim',
    },
    {
      id: 2,
      title: 'Künye Bilgileri',
      screen: 'KünyeBilgileri',
    },
    {
      id: 3,
      title: 'Haber İhbar',
      screen: 'Haberİhbar',
    },
  ];

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
          <Text style={styles.yorumTxt}>Ayarlar</Text>
        </View>
        <View style={styles.bodyC}>
          <View>
            {AyarlarData.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.itemContainer,
                  index % 2 === 0
                    ? styles.grayBackground
                    : styles.redBackground,
                ]}
                onPress={() => {
                  if (item.screen) {
                    navigation.navigate(item.screen);
                  }
                }}>
                <View style={styles.textiC}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Antdesign
                    name="right"
                    color={Colors.text.gray}
                    size={moderateScale(30)}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
  textiC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
