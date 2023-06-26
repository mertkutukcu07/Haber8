import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import AstrolojiData from '../../constants/data/AstrolojiData';

const Astroloji = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <ImageBackground source={item.photo} style={styles.yazarbg}>
      <View style={styles.headertextC}>
        <Text style={styles.headerTxt}>Günlük Burç Yorumları</Text>
        <Text style={styles.headerTxt2}>(27 Haziran 2023)</Text>
      </View>
      <View style={styles.newsc}>
        <View style={styles.textC}>
          <View key={item.id} style={styles.contextC}>
            <View style={styles.contextContainer}>
              <Text style={styles.contextTxt}>
                {item.context.split(' ').slice(0, 38).join(' ')}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AstrolojiDetails', {item})
                  }>
                  <Text style={styles.contextTxt2}>devamı...</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: moderateScale(250),
          }}></View>
      </View>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerC}>
          <TouchableOpacity
            style={styles.backİcon}
            onPress={() => navigation.goBack()}>
            <IonIcons
              name="arrow-back"
              color={Colors.text.white}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
          <Text style={styles.yorumTxt}>Astroloji</Text>
        </View>
        <View>
          <FlatList
            data={AstrolojiData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Astroloji;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.button.authbutton,
  },
  headerC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(30),
  },
  yorumTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.bold,
    color: Colors.button.white,
    marginLeft: moderateScale(10),
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(20),

    marginTop: moderateVerticalScale(15),
  },
  contextTxt: {
    color: Colors.button.white,
    fontFamily: Fonts.regular,
    textAlign: 'left',
    fontSize: moderateScale(13),
  },
  contextTxt2: {
    color: Colors.button.white,
    fontFamily: Fonts.bold,
    textAlign: 'left',
    fontSize: moderateScale(13),
    marginLeft: moderateScale(5),
    top: moderateVerticalScale(3.5),
  },
  yazarbg: {
    flex: 1,
    height: moderateScale(270),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  contextC: {},
  textC: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(30),
  },
  contextContainer: {},
  headertextC: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(27),
  },
  headerTxt: {
    color: Colors.button.white,
    fontFamily: Fonts.bold,
    textAlign: 'left',
    fontSize: moderateScale(22),
  },
  headerTxt2: {
    color: '#DADADA',
    fontFamily: Fonts.medium,
    textAlign: 'left',
    fontSize: moderateScale(15),
  },
});
