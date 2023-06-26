import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import SelectDropdown from 'react-native-select-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Haberİhbar = ({navigation}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const sehir = ['Bursa', 'Antalya', 'Bursa', 'Bursa', 'Bursa'];

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // İzin verilen dosya türleri
      });

      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Dosya seçme iptal edildi
      } else {
        // Hata oluştu
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
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
          <Text style={styles.yorumTxt}>Haber İhbar</Text>
        </View>
        <View style={styles.bodyC}>
          <View style={styles.headerTxtC}>
            <Text style={styles.headerTxt}>
              İhbarda bulunacağınız haber içeriğini WhatsApp veya aşağıdaki form
              üzerinden bize ulaştırabilirsiniz. Gerek duyduğumuz taktirde
              sizinle iletişime geçebilmemiz için lütfen tüm bilgileri eksiksiz
              olarak doldurunuz. Kimlik bilgileriniz gizli tutulacaktır.
            </Text>
          </View>
          <View style={styles.inputC}>
            <View style={styles.adSoyadC}>
              <TextInput placeholder="Ad" style={styles.input} />
              <TextInput placeholder="Soyad" style={styles.input} />
            </View>
            <View style={styles.selectedC}>
              <SelectDropdown
                data={sehir}
                buttonStyle={styles.button}
                defaultButtonText="Şehir Seçiniz"
                buttonTextStyle={styles.buttonTextStyle}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
              <SelectDropdown
                data={sehir}
                buttonStyle={styles.button}
                defaultButtonText="İlçe Seçiniz"
                buttonTextStyle={styles.buttonTextStyle}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.epostaTelC}>
              <TextInput placeholder="E-posta" style={styles.input} />
              <TextInput
                placeholder="Telefon"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.AdresC}>
              <TextInput
                placeholder="Semt ve Açık Adres"
                style={styles.inputsemt}
              />
            </View>
            <View style={styles.haberKonuC}>
              <TextInput
                placeholder="Haber Konusu"
                style={styles.inputhaber}
                multiline={true}
                textAlignVertical="top"
              />
            </View>
            <View style={styles.bottomC}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'rgba(218, 218, 218, 5)',
                    paddingHorizontal: moderateScale(25),
                    width: moderateScale(150),
                    marginRight: moderateScale(80),
                  }}>
                  <TextInput
                    style={styles.bottomTxt}
                    placeholder="Dosya Seçiniz"
                    editable={false}
                    value={selectedFile}></TextInput>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#ECECEC',
                      minWidth: moderateScale(75),
                      height: moderateVerticalScale(50),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={pickFile}>
                    <Text style={styles.bottomTxt}>Yükle</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonC}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: Colors.button.authbutton,
                      height: moderateVerticalScale(50),
                      width: moderateScale(100),
                      borderRadius: 10,
                    }}>
                    <Text style={styles.buttonTextStyle2}>Kaydet</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Haberİhbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  headerTxtC: {
    paddingHorizontal: moderateScale(20),
  },
  headerTxt: {
    fontFamily: Fonts.regular,
  },
  inputC: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
  },
  adSoyadC: {
    flexDirection: 'row',
    gap: moderateScale(15),
  },
  input: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(150),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    minHeight: moderateVerticalScale(50),
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 10,
  },
  selectedC: {
    flexDirection: 'row',
    gap: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },

  button: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(150),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    minHeight: moderateVerticalScale(50),
    backgroundColor: 'white',
  },
  epostaTelC: {
    flexDirection: 'row',
    gap: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  buttonTextStyle: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
  },
  buttonTextStyle2: {
    fontFamily: Fonts.medium,
    color: Colors.text.white,
    fontSize: moderateScale(14),
  },
  inputsemt: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(315),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    minHeight: moderateVerticalScale(50),
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 10,
  },
  AdresC: {
    marginTop: moderateVerticalScale(15),
  },
  haberKonuC: {
    marginTop: moderateVerticalScale(15),
  },
  inputhaber: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(14),
    width: moderateScale(315),
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 5)',
    paddingHorizontal: moderateScale(10),
    height: moderateVerticalScale(200),
    fontWeight: '900',
    borderRadius: 10,
  },
  bottomC: {
    flexDirection: 'row',
    marginTop: moderateScale(15),

    paddingHorizontal: moderateScale(10),

    height: moderateVerticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottomTxt: {
    fontFamily: Fonts.medium,
    color: Colors.text.gray,
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  buttonC: {
    marginRight: moderateScale(10),
  },
});
