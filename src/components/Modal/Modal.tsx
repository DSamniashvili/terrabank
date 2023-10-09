import React, { forwardRef } from 'react';
import { Pressable } from 'react-native';
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
  const { modalRef, element, close } = useModal(ref);
  const styles = useStyles();

  return (
    <BottomSheetModal
      ref={modalRef}
      enableDynamicSizing
      backdropComponent={Backdrop}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView style={styles.container}>
        <Pressable onPress={close} style={styles.closeButton}>
          <Close />
        </Pressable>
        {element}
      </BottomSheetView>
    </BottomSheetModal>
  );
});
