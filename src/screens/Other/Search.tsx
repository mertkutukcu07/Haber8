import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import NewsData from '../../constants/data/NewsData';
import Fonts from '../../constants/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Search = ({navigation}) => {
  const [columns, setColumns] = useState(2);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = NewsData.filter(item =>
      item.context.toLowerCase().includes(searchText.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchText]);
  const renderItem = ({item, index}) => (
    <View>
      <View style={styles.newsc}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetail', {item})}>
          <Image source={item.photo} style={styles.newsPhoto} />
          <View style={styles.contextC}>
            <Text style={styles.contextTxt}>{item.context}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bodyC}>
          <TouchableOpacity
            style={styles.backİcon}
            onPress={() => navigation.goBack()}>
            <IonIcons
              name="arrow-back"
              color={Colors.text.gray}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
          <KeyboardAwareScrollView>
            <TextInput
              style={styles.input}
              placeholder="Haber8 de Ara..."
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
              }}
            />
          </KeyboardAwareScrollView>
          <View style={styles.flatListContainer}>
            <FlatList
              data={searchResults}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              numColumns={columns}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  {searchText.length > 0 ? (
                    <Text style={styles.emptyText}>Haber8'de bulunamadı.</Text>
                  ) : null}
                </View>
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyC: {
    flexDirection: 'column',
    paddingHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  backİcon: {},
  input: {
    backgroundColor: '#d1d5db',
    height: moderateVerticalScale(40),
    borderRadius: moderateScale(30),
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  newsc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
    width: moderateScale(150),
    marginTop: moderateVerticalScale(15),
  },
  newsPhoto: {
    width: moderateScale(150),
    height: moderateVerticalScale(90),
    resizeMode: 'contain',
  },
  contextC: {
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
    borderColor: Colors.bottombuttons.bottomdefault,
    shadowColor: Colors.bottombuttons.bottomdefault,
  },
  contextTxt: {
    textAlign: 'center',
    color: Colors.text.black,
    fontFamily: Fonts.medium,
  },
  headerTxt: {
    color: Colors.button.authbutton,
    fontSize: moderateScale(15),
    fontFamily: Fonts.medium,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(15),
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: moderateScale(15),
  },
  flatListContainer: {
    flex: 1,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(250),
  },
});
