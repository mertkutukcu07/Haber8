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
const Yorumlar = ({navigation}) => {
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
          <Text style={styles.yorumTxt}>
            Yorumlar ({`${YorumData.length}`})
          </Text>
        </View>

        <View style={styles.bodyC}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'rgba(0, 17, 60, 0.5)',
              height: moderateVerticalScale(50),
            }}>
            <View style={styles.inputC}>
              <TextInput placeholder="Yorum Yap..." style={styles.input} />
            </View>
            <TouchableOpacity
              style={{
                height: moderateVerticalScale(50),
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: moderateScale(10),
              }}>
              <Antdesign name="rightsquareo" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: moderateScale(25),
            }}>
            {YorumData.map(item => (
              <View
                style={{
                  gap: moderateScale(4),
                  backgroundColor: '#d1d5db',
                  marginVertical: moderateVerticalScale(10),
                  paddingVertical: moderateVerticalScale(10),
                  paddingHorizontal: moderateScale(10),
                }}
                key={item.id}>
                <Text
                  style={{
                    color: '#2F2F2F',
                    fontSize: moderateScale(15),
                    fontFamily: Fonts.bold,
                  }}>
                  {item.yazar}
                </Text>
                <Text
                  style={{
                    color: '#2F2F2F',
                    fontSize: moderateScale(12),
                    fontFamily: Fonts.regular,
                  }}>
                  {item.context}
                </Text>
                <Text
                  style={{
                    color: '#2F2F2F',
                    fontSize: moderateScale(12),
                    fontFamily: Fonts.regular,
                  }}>
                  {item.tarih}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Yorumlar;

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
  bodyC: {
    marginVertical: moderateVerticalScale(20),
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    marginLeft: moderateScale(10),
  },
  input: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.bold,
    color: Colors.button.authbutton,
    paddingLeft: moderateScale(10),
    height: moderateVerticalScale(50),
    width: moderateScale(300),
    display: 'flex',
  },
  inputC: {
    marginVertical: moderateVerticalScale(15),
  },
});
