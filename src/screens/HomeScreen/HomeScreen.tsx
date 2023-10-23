import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useStyles } from './HomeScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { LanguageSwitcher, Text, Button } from 'components';
import { openModal } from 'utils/modal';
import { openToast } from 'utils/toast';

export const HomeScreen = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();

  useEffect(() => {
    openToast('test', 'error');
  }, []);

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  const handleModalPress = () => {
    openModal({
      element: <Text children="welcome:description" />,
    });
  };

  return (
    <View style={styles.container}>
      <LanguageSwitcher />
      <Button.Primary
        text="Primary button - large"
        size="large"
        // fullWidth
        // disabled
      />
      <Button.Primary
        text="Primary button - full width"
        size="large"
        fullWidth
        // disabled
      />
      <Button.Primary
        text="Primary button - medium"
        size="medium"
        // fullWidth
        // disabled
      />
      <Button.Secondary
        text="Secondary button"
        size="large"
        fullWidth
        // disabled
      />
      <Button.Text
        text="Text button"
        size="large"
        fullWidth
        // disabled
      />
      <Text style={[Fonts.textSmall]} children="Home main Screen" />
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <Pressable onPress={handleModalPress}>
        <Text style={[Fonts.textSmall]} children="Open modal" />
      </Pressable>
    </View>
  );
};
