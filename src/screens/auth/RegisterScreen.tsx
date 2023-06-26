import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../constants/Images';
const RegisterScreen = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [showpassword, setShowPassword] = useState(false);
  const loginData = [
    {
      id: 0,
      icon: <Icon name="facebook" size={moderateScale(20)} color="white" />,
    },
    {
      id: 1,
      icon: <Icon name="apple" size={moderateScale(20)} color="white" />,
    },
    {
      id: 2,
      icon: <Icon name="google" size={moderateScale(20)} color="white" />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.bodyC}>
          <Text style={styles.welcomeTxt}>Hoşgeldiniz!</Text>
          <Text style={styles.infoTxt}>
            Haberleri Okumaya Devam Etmek İçin Hesabınıza Kayıt Olun.
          </Text>
          <View style={styles.loginC}>
            {loginData.map(item => (
              <TouchableOpacity style={styles.loginBtn} key={item.id}>
                {item.icon}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.orC}>
            <Image source={Images.haber8img.authline} />
            <Text style={styles.orText}>ya da</Text>
            <Image source={Images.haber8img.authline} />
          </View>

          <View style={styles.inputsC}>
            <View style={styles.namesurname}>
              <Text>Ad Soyad</Text>
              <TextInput
                placeholder="Adınızı Giriniz"
                style={styles.input}
                placeholderStyle={styles.placeholder}
                value={mail}
                onChangeText={text => setMail(text)}
              />
            </View>
            <View style={styles.epostaC}>
              <Text>E-Posta Adresi</Text>
              <TextInput
                placeholder="E-Postanızı giriniz"
                style={styles.input}
                placeholderStyle={styles.placeholder}
                value={mail}
                onChangeText={text => setMail(text)}
              />
            </View>
            <View style={styles.passC}>
              <Text>Şifre</Text>
              <View style={styles.passeyeC}>
                <TextInput
                  placeholder="Şifrenizi giriniz"
                  style={styles.input}
                  secureTextEntry={!showpassword}
                  placeholderStyle={styles.placeholder}
                  value={pass}
                  onChangeText={text => setPass(text)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showpassword)}
                  style={styles.iconC}>
                  <AntDesign
                    color={Colors.text.gray}
                    size={20}
                    name={showpassword ? 'eyeo' : 'eye'}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgetpassTxt}>
                  Parolanızı mı unuttunuz?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <View style={styles.registerC}>
              <Text style={styles.noaccountTxt}>Hesabın varsa ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerTxt}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyC: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(30),
    marginVertical: moderateScale(30),
    gap: moderateScale(20),
  },
  loginC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(8),
  },
  inputsC: {
    gap: moderateScale(15),
  },
  input: {
    backgroundColor: Colors.input.white,
    shadowColor: Colors.input.authinput,
    width: moderateScale(317),
    height: moderateScale(40),
    borderRadius: 20,
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(12),
  },
  passeyeC: {
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20),
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
  registerC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(10),
  },
  welcomeTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.bold,
    fontWeight: '700',
    color: Colors.text.gray,
  },
  infoTxt: {
    fontSize: moderateScale(15),
    color: Colors.text.gray,
    fontFamily: Fonts.regular,
    fontWeight: '400',
  },
  loginBtn: {
    width: scale(80),
    height: verticalScale(35),
    backgroundColor: Colors.text.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(15),
    borderRadius: 30,
  },
  orText: {
    color: Colors.text.gray,
    opacity: 0.8,
  },
  forgetpassTxt: {
    textAlign: 'right',
    color: Colors.text.gray,
    opacity: 0.8,
    textDecorationLine: 'underline',
    marginTop: moderateScale(5),
  },
  noaccountTxt: {
    color: Colors.text.gray,
    opacity: 0.8,
  },
  registerTxt: {
    textDecorationLine: 'underline',
    color: Colors.text.gray,
  },
  placeholder: {
    paddingHorizontal: 20,
  },
  iconC: {
    position: 'absolute',
    marginLeft: moderateScale(285),
    marginTop: moderateVerticalScale(20),
  },
  namesurname: {},
});
