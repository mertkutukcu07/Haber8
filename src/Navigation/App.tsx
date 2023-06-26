import React, {useState} from 'react';
import {Platform, Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/İntroScreen/IntroScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/base/HomeScreen';
import VehiclesScreen from '../screens/base/VehiclesScreen';
import SettingsScreen from '../screens/base/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import DrawerStyle from '../Components/DrawerStyle';
import GündemCat from '../screens/Categories/GündemCat';
import SporCat from '../screens/Categories/SporCat';
import MagazinCat from '../screens/Categories/MagazinCat';
import TeknolojiCat from '../screens/Categories/TeknolojiCat';
import SağlıkCat from '../screens/Categories/SağlıkCat';
import OneCikanHaberlerCat from '../screens/Categories/OneCikanHaberlerCat';
import YazarlarCat from '../screens/Categories/YazarlarCat';
import VideoGaleriCat from '../screens/Categories/VideoGaleriCat';
import FotoGaleriCat from '../screens/Categories/FotoGaleriCat';
import YerelHaberlerCat from '../screens/Categories/YerelHaberlerCat';
import MagazinHomeCat from '../screens/Categories/MagazinHomeCat';
import DunyadanHaberlerCat from '../screens/Categories/DunyadanHaberlerCat';
import SporCatHome from '../screens/Categories/SporCatHome';
import GüncelHaberlerCat from '../screens/Categories/GüncelHaberlerCat';
import Search from '../screens/Other/Search';
import Header from '../Components/Header';
import CategoryHeader from '../Components/CategoryHeader';
import NewsDetail from '../screens/Other/NewsDetail';
import Yorumlar from '../screens/Other/Yorumlar';
import Bildirimler from '../screens/Other/Bildirimler';
import İletisim from '../screens/Other/İletisim';
import KünyeBilgileri from '../screens/Other/KünyeBilgileri';
import Haberİhbar from '../screens/Other/Haberİhbar';
import VideoGaleri from '../screens/Categories/VideoGaleri';
import PhotoGalery from '../screens/Categories/PhotoGalery';
import PhotoGaleryDetail from '../screens/Categories/PhotoGaleryDetail';
import YazarlarScreen from '../screens/Categories/YazarlarScreen';
import Otomobil from '../screens/Categories/Otomobil';
import Ekonomi from '../screens/Categories/Ekonomi';
import HavaDurumuScreen from '../screens/Categories/HavaDurumuScreen';
import OnBesGunlukHava from '../screens/Categories/OnBesGunlukHava';
import NamazVakti from '../Components/NamazVakti';
import NamazVaktiScreen from '../screens/Categories/NamazVaktiScreen';
import NamazVaktiScreenYedi from '../screens/Categories/NamazVaktiScreenYedi';
import Astroloji from '../screens/Categories/Astroloji';
import AstrolojiDetails from '../screens/Categories/AstrolojiDetails';
import VideoGaleryDetail from '../screens/Categories/VideoGaleryDetail';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainTab() {
  const [selectedItem, setSelectedItem] = useState('');
  const handleItemClick = itemName => {
    setSelectedItem(itemName);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.button.authbutton,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 0,
            height: Platform.select({
              ios: moderateScale(49),
              android: moderateScale(49),
            }),
          },
          tabBarLabelStyle: {
            fontSize: moderateScale(15),
            borderTopWidth: 0,
          },
          tabBarIcon: ({color, size}) => {
            let iconComponent; // İkon bileşenini tutmak için bir değişken

            if (route.name === 'Anasayfa') {
              iconComponent = (
                <Ionicons
                  name="home"
                  size={25}
                  color={'rgba(245, 245, 245, 0.7)'}
                />
              );
            } else if (route.name === 'Araçlar') {
              iconComponent = (
                <MaterialCommunityIcons
                  name="comment-plus"
                  size={25}
                  color={'rgba(245, 245, 245, 0.7)'}
                />
              );
            } else if (route.name === 'Ayarlar') {
              iconComponent = (
                <AntDesign
                  name="setting"
                  size={25}
                  color={'rgba(245, 245, 245, 0.7)'}
                />
              );
            } else if (route.name === 'Giriş Yap') {
              iconComponent = (
                <Ionicons
                  name="log-in"
                  size={25}
                  color={'rgba(245, 245, 245, 0.7)'}
                />
              );
            }

            return iconComponent;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.text.white,
          inactiveTintColor: 'rgba(245, 245, 245, 0.7)',
          activeBackgroundColor: Colors.button.authbutton,
          inactiveBackgroundColor: Colors.button.authbutton,
        }}>
        <Tab.Screen name="Anasayfa" component={HomeScreen} />
        <Tab.Screen name="Araçlar" component={VehiclesScreen} options={{}} />
        <Tab.Screen name="Ayarlar" component={SettingsScreen} />
        <Tab.Screen name="Giriş Yap" component={LoginScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerStyle />}>
      <Drawer.Screen
        name="Home"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={MainDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Gündem"
          component={GündemCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Spor"
          component={SporCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Magazin"
          component={MagazinCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Teknoloji"
          component={TeknolojiCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sağlık"
          component={SağlıkCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ÖneCikanCat"
          component={OneCikanHaberlerCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GündemCat"
          component={GündemCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YazarlarCat"
          component={YazarlarCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SporCat"
          component={SporCatHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoCat"
          component={VideoGaleriCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FotoCat"
          component={FotoGaleriCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GüncelHaberlerCat"
          component={GüncelHaberlerCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YerelHaberlerCat"
          component={YerelHaberlerCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MagazinCat"
          component={MagazinHomeCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DünyadanCat"
          component={DunyadanHaberlerCat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Yorumlar"
          component={Yorumlar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bildirimler"
          component={Bildirimler}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="İletisim"
          component={İletisim}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="KünyeBilgileri"
          component={KünyeBilgileri}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Haberİhbar"
          component={Haberİhbar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoGaleri"
          component={VideoGaleri}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhotoGalery"
          component={PhotoGalery}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhotoGaleryDetail"
          component={PhotoGaleryDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="YazarlarScreen"
          component={YazarlarScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Otomobil"
          component={Otomobil}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Ekonomi"
          component={Ekonomi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HavaDurumuScreen"
          component={HavaDurumuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnBesGunluk"
          component={OnBesGunlukHava}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NamazVakti"
          component={NamazVaktiScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NamazVaktiYedi"
          component={NamazVaktiScreenYedi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Astroloji"
          component={Astroloji}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AstrolojiDetails"
          component={AstrolojiDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoGaleryDetail"
          component={VideoGaleryDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
