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
import KünyeData from '../../constants/data/KünyeData';
const KünyeBilgileri = ({navigation}) => {
  const AyarlarData = [
    {
      id: 0,
      title: 'Bildirimler',
    },
    {
      id: 1,
      title: 'İletişim',
    },
    {
      id: 2,
      title: 'Künye Bilgileri',
    },
    {
      id: 3,
      title: 'Haber İhbar',
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
          <Text style={styles.yorumTxt}>Künye Bilgileri</Text>
        </View>
        <View style={styles.bodyC}>
          <View>
            {KünyeData.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.itemContainer,
                  index % 2 === 0
                    ? styles.grayBackground
                    : styles.redBackground,
                ]}>
                <View style={styles.textiC}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  {Array.isArray(item.person) ? (
                    item.person.map(person => (
                      <Text key={person.id} style={styles.personTxt}>
                        {person.name}
                      </Text>
                    ))
                  ) : (
                    <Text>{item.person}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KünyeBilgileri;

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
    minHeight: moderateVerticalScale(60),
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
    gap: moderateScale(5),
    marginTop: 10,
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
  personTxt: {
    color: Colors.text.gray,
    fontFamily: Fonts.medium,
  },
});
