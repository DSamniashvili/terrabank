import { ReactNode, Ref, useImperativeHandle, useRef, useState } from 'react';
import { ConfigureModal, ModalHandler } from './Modal.types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const useModal = (ref: Ref<ModalHandler>) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [element, setElement] = useState<ReactNode>(null);

  const open = (options: ConfigureModal) => {
    setElement(options.element);
    modalRef?.current?.present();
  };

  const close = () => {
    setElement(null);
    modalRef?.current?.close();
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return {
    modalRef,
    element,
    close,
  };
};

export default useModal;
