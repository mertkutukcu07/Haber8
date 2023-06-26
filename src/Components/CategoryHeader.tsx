import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Images from '../constants/Images';

const CategoryHeader = ({onPress, onPressSearch, onPressNoti}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyC}>
        <TouchableOpacity onPress={onPress}>
          <IonIcons
            name="arrow-back"
            color={Colors.text.white}
            size={moderateScale(30)}
          />
        </TouchableOpacity>
        <Image source={Images.haber8img.haber8logo} style={styles.logo} />
        <View style={styles.rightC}>
          <TouchableOpacity onPress={onPressSearch}>
            <Feather
              name="search"
              color={Colors.text.white}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNoti}>
            <IonIcons
              name="md-notifications-outline"
              color={Colors.text.white}
              size={moderateScale(30)}
            />
            <Image source={Images.haber8img.notidot} style={styles.notidot} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    top: 0,
    right: 0,
    left: 0,
    flex: 1,
  },
  bodyC: {
    height: moderateScale(110),
    backgroundColor: Colors.button.authbutton,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(50),
    alignItems: 'center',
  },
  logo: {
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightC: {
    flexDirection: 'row',
    gap: moderateScale(10),
    justifyContent: 'center',
  },
  notidot: {
    position: 'absolute',
    marginLeft: moderateScale(20),
    marginTop: moderateVerticalScale(6),
  },
});
