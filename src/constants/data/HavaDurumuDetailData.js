import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import Colors from '../Colors';

export default [
  {
    id: 0,
    derece: '11°',
    durum: 'Hissedilen Sıcaklık',
    icon: (
      <Fontisto name="day-sunny" size={20} color={'rgba(218, 218, 218, 0.7)'} />
    ),
  },
  {
    id: 1,
    derece: '%50',
    durum: 'Nem',
    icon: <Entypo name="drop" size={20} color={'rgba(218, 218, 218, 0.7)'} />,
  },
  {
    id: 2,
    derece: 'KD',
    durum: 'Rüzgar Yönü',
    icon: <Feather name="wind" size={20} color={'rgba(218, 218, 218, 0.7)'} />,
  },
  {
    id: 3,
    derece: '15°',
    durum: '3.0 Km',
    icon: <Feather name="wind" size={20} color={'rgba(218, 218, 218, 0.7)'} />,
  },
  {
    id: 4,
    derece: '%20',
    durum: 'Yağış Olasılığı',
    icon: (
      <MaterialCommunityIcons
        name="weather-pouring"
        size={20}
        color={'rgba(218, 218, 218, 0.7)'}
      />
    ),
  },
];
