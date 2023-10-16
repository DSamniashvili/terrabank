import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Alert, Pressable, Text, View, ViewStyle } from 'react-native';

import { useStyleTheme } from './CustomHeader.styles';
import { CustomHeaderOptions, ElementsType } from './CustomHeader.types';
import { Back, Notification, Search, Chat } from 'assets/SVGs';
import { useTranslation } from 'react-i18next';
import { SvgProps } from 'react-native-svg';

export const CustomHeader: FC<Partial<CustomHeaderOptions>> = ({
  isInitialScreen = false,
  searchElement,
  notificationsElement,
  messagesElement,
  backElement,
  title,
  titlePosition = 'center',
}) => {
  const { t } = useTranslation();
  const styles = useStyleTheme();
  const { goBack } = useNavigation();

  const getComponentByElement = (
    handler?: () => void,
    IconComponent?: (props: SvgProps) => React.JSX.Element,
    native?: boolean,
  ) => (
    <Pressable
      onPress={handler}
      style={[styles.iconCommonStyles, !native && styles.iconRoundedStyles]}
    >
      {IconComponent && <IconComponent width={16} height={16} />}
    </Pressable>
  );

  const handleSearch = () => {
    Alert.alert('search!!!');
  };

  const handleNotificationPress = () => {
    Alert.alert('handleNotificationPress!!!');
  };

  const handleMessagesPress = () => {
    Alert.alert('handleMessagesPress!!!');
  };

  const handleGoBack = () => {
    goBack();
  };

  const elements: ElementsType[] = [
    { ...searchElement, handler: handleSearch, icon: Search },
    { ...messagesElement, handler: handleMessagesPress, icon: Chat },
    { ...notificationsElement, handler: handleNotificationPress, icon: Notification },
    { ...backElement, handler: handleGoBack, icon: Back, native: true },
  ];

  const renderContent = (position: 'left' | 'center' | 'right') => {
    const components = elements
      .filter(element => element && element.position === position)
      .map(({ handler, icon, native }) => getComponentByElement(handler, icon, native));

    const containerStyle = `${position}Container` as keyof typeof styles;

    return (
      <View style={styles[containerStyle] as ViewStyle}>
        {position === titlePosition && (
          <Text style={[styles.text, isInitialScreen && styles.isInitialScreenText]}>
            {t(title)}
          </Text>
        )}
        {components.length > 0 && (
          <View style={styles.componentsWrapper}>
            {components.map((comp, index) => (
              <React.Fragment key={index}>{comp}</React.Fragment>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, isInitialScreen && styles.initialContainer]}>
      {renderContent('left')}
      {renderContent('center')}
      {renderContent('right')}
    </View>
  );
};