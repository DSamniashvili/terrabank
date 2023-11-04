import Biometrics from 'react-native-biometrics';
import { activateBiometricsAuth } from 'utils/keychain';
import { useNavigation, useRoute } from '@react-navigation/core';

const useSetFingerprint = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const onActivatePress = async () => {
    try {
      const { available, biometryType } = await Biometrics.isSensorAvailable();
      if (available) {
        const simplePromptConfig = {
          promptMessage: 'biometric message',
          cancelButtonText: 'close',
        };

        switch (biometryType) {
          case Biometrics.Biometrics:
            simplePromptConfig.promptMessage = 'biometric message';
            break;
          case Biometrics.FaceID:
            simplePromptConfig.promptMessage = 'biometric message';
            break;
        }
        const { success } = await Biometrics.simplePrompt(simplePromptConfig);

        if (success) {
          await activateBiometricsAuth();
          //alert here
          (params as any)?.onSuccess();
          goBack();
        }
      } else {
        //alert here
      }
    } catch (e) {}
  };

  return {
    onActivatePress,
  };
};

export default useSetFingerprint;
