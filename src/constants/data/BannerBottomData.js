import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../Colors';

export default [
  {
    id: 0,
    category: 'DOLAR',
    icon: <Icon name="dollar" size={20} color={Colors.button.authbutton} />,
    status: <Entypo name="triangle-up" size={15} color="green" />,
    price: '6.8191',
  },
  {
    id: 1,
    category: 'ALTIN',
    icon: (
      <MaterialCommunityIcons
        name="gold"
        size={20}
        color={Colors.button.authbutton}
      />
    ),
    status: <Entypo name="triangle-down" size={15} color="red" />,
    price: '6.8191',
  },
  {
    id: 2,
    category: 'EURO',
    icon: <Icon name="euro" size={20} color={Colors.button.authbutton} />,
    status: <Entypo name="triangle-up" size={15} color="green" />,
    price: '6.8191',
  },
  {
    id: 3,
    category: 'BIST 100',
    icon: <Fontisto name="world" size={20} color={Colors.button.authbutton} />,
    status: <Entypo name="triangle-down" size={15} color="red" />,
    price: '6.8191',
  },
];
