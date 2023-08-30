import { useState, useCallback } from 'react';

export default function useModalModel() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => setOpen(false), []);

  const handleOpenModal = useCallback(() => setOpen(true), []);

  return { isOpen, handleCloseModal, handleOpenModal };
}
