import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Intro12 from './intro12';
import Intro3 from './intro3';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const IntroScreen = ({navigation}) => {
  const slides = [
    {
      key: 'screen1',
      component: Intro12,
    },
    {
      key: 'screen2',
      component: Intro12,
    },
    {
      key: 'screen3',
      component: Intro3,
    },
  ];

  const renderItem = ({item, index}) => {
    const SlideComponent = item.component;

    return (
      <View style={styles.slide}>
        <SlideComponent />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Şimdi Başla</Text>
        </View>
      </View>
    );
  };

  const handleDone = () => {
    navigation.navigate('Login');
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={handleDone}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderDoneButton}
      bottomButton={true}
    />
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  activeDot: {
    backgroundColor: Colors.text.gray,
  },
  dot: {
    backgroundColor: '#00113C',
    opacity: 0.19,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.button.authbutton,
    borderRadius: 20,
    width: scale(200),
    height: verticalScale(40),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: moderateScale(15),
    color: Colors.text.white,
    textAlign: 'center',
    fontFamily: Fonts.medium,
  },
});
