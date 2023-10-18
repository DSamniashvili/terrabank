import React, { forwardRef } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView } from 'react-native';
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import useModal from './useModal';
import { ModalHandler } from './Modal.types';
import { useStyles } from './Modal.styles';
import { Close } from 'assets/SVGs';

const Backdrop = (props: BottomSheetBackdropProps) => {
  return <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />;
};

export const Modal = forwardRef<ModalHandler>((_, ref) => {
  const { modalRef, element, close, title } = useModal(ref);
  const styles = useStyles();

  return (
    <BottomSheetModal
      ref={modalRef}
      enableDynamicSizing
      backdropComponent={Backdrop}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <KeyboardAvoidingView behavior="padding">
        <BottomSheetView style={styles.container}>
          <View style={title ? styles.titleContainer : null}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Pressable onPress={close} style={styles.closeButton}>
              <Close />
            </Pressable>
          </View>
          {element}
        </BottomSheetView>
      </KeyboardAvoidingView>
    </BottomSheetModal>
  );
});
