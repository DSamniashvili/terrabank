import { StyleSheet } from 'react-native';
import { useTheme } from 'hooks';
import { config } from 'utils/config';

const { mobileWidth } = config;
const CARD_WIDTH = 300;

const useStyles = () => {
  const { Colors, Layout } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    card: {
      width: CARD_WIDTH,
      borderRadius: 16,
      padding: 16,
      marginTop: 30,
      flexDirection: 'row',
    },
    text: {
      color: '#fff',
      fontWeight: '600',
    },
    wrapper: {
      flexDirection: 'row',
    },
    balanceContainer: {
      top: 30,
      left: 16,
      height: 120,
      position: 'absolute',
      justifyContent: 'space-evenly',
    },
    availableBalance: {
      gap: 10,
      paddingRight: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionButtonContainer: {
      gap: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    actionButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: Colors.inputBlack50,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeEye: {
      ...Layout.absolute,
    },
    balance: {
      top: -5,
    },
    dotContainer: {
      marginTop: 25,
      alignSelf: 'center',
      flexDirection: 'row',
      gap: 10,
    },
    dots: {
      position: 'absolute',
      top: 55,
    },
    dot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: 'grey',
    },
    terabytes: {
      gap: 8,
      width: 130,
      padding: 8,
      borderRadius: 63,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingLeft: 80,
    },
    closeButton: {
      width: mobileWidth - 20 - CARD_WIDTH,
      alignItems: 'center',
      marginTop: 100,
    },
  });
};
export default useStyles;
