import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Switch,
  Platform,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import HavadurumuNamazHeader from '../../Components/HavaDurumuNamazHeader';
import Images from '../../constants/Images';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Antdesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../constants/Fonts';
import SelectDropdown from 'react-native-select-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import HavaDurumuDetail from '../../Components/HavaDurumuDetail';
import NamazVakti from '../../Components/NamazVakti';

const NamazVaktiScreen = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const sehir = [
    'Bursa',
    'Antalya',
    'Kahramanmaraş',
    'Bursa',
    'Bursa',
    'Bursa',
  ];

  const renderDropdownIcon = () => {
    return (
      <Entypo name="chevron-down" size={moderateScale(30)} color={'white'} />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.bodyC}>
          <HavadurumuNamazHeader
            onPress={() => navigation.goBack()}
            onPressShare={onShare}
          />
          <ImageBackground style={styles.bg} source={Images.haber8img.hdnvbg}>
            <View style={styles.bgC}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: moderateScale(10),
                }}>
                <Antdesign name="clockcircleo" color="white" size={22} />
                <Text style={styles.havadurumuTxt}>Namaz Vakti</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: moderateScale(10),
                }}>
                <Text style={styles.havadurumuTxt}>Sabitle</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.tabbarC}>
            <View style={styles.bugünC}>
              <TouchableOpacity>
                <Text style={styles.havadurumuTxt2}>Bugün</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('NamazVaktiYedi')}>
                <Text style={styles.havadurumuTxt}>7 Günlük</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.screenC}>
            <NamazVakti />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NamazVaktiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.button.authbutton,
  },
  bg: {
    width: '100%',
    height: moderateVerticalScale(40),
  },
  bgC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    marginTop: moderateVerticalScale(5),
  },
  havadurumuTxt: {
    color: Colors.text.white,
    fontFamily: Fonts.medium,
  },
  havadurumuTxt2: {
    color: Colors.text.white,
    fontFamily: Fonts.medium,
  },
  bodyC: {
    position: 'absolute',
    width: '100%',
    gap: moderateScale(-3),
  },
  underlineStyle: {
    backgroundColor: 'white',
  },
  tabbarC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateVerticalScale(50),
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    padding: moderateScale(0),
  },
  bugünC: {
    borderBottomWidth: 2,
    borderColor: 'white',
    padding: moderateScale(10),
  },
  screenC: {
    marginTop: moderateScale(20),
    minHeight: moderateVerticalScale(1100),
  },
  scrollViewContent: {
    flexGrow: 1,
    minHeight: moderateVerticalScale(1040),
  },
  havadurumubg: {
    width: '100%',
  },
});
