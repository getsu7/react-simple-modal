import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Determines whether the modal is visible or not
   */
  isOpen: boolean;

  /**
   * Callback function called when the modal closes
   */
  onClose: () => void;

  /**
   * Content to display inside the modal
   */
  children: ReactNode;

  /**
   * Additional CSS classes for style customization
   */
  className?: string;

  /**
   * Allow closing the modal with Escape key
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Allow closing the modal by clicking on overlay
   * @default true
   */
  closeOnOverlayClick?: boolean;

  /**
   * Show or hide the close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * ARIA label for accessibility
   * @default 'Fenêtre modale'
   */
  ariaLabel?: string;
}

declare const Modal: React.FC<ModalProps>;

export default Modal;

