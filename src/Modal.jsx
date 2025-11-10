import { useEffect } from 'react';
import './Modal.css';

/**
 * Modal Component - An accessible and customizable modal window
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isOpen - Determines whether the modal is visible or not
 * @param {Function} props.onClose - Callback function called when the modal closes
 * @param {React.ReactNode} props.children - Content to display inside the modal
 * @param {string} props.className - Additional CSS classes for style customization
 * @param {boolean} props.closeOnEscape - Allow closing the modal with Escape key (default: true)
 * @param {boolean} props.closeOnOverlayClick - Allow closing the modal by clicking on overlay (default: true)
 * @param {boolean} props.showCloseButton - Show or hide the close button (default: true)
 * @param {string} props.ariaLabel - ARIA label for accessibility (default: 'Fenêtre modale')
 * @returns {React.ReactElement|null} The Modal component or null if closed
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  closeOnEscape = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  ariaLabel = 'Fenêtre modale'
}) => {

  /**
   * Effect Hook - Handle closing with Escape key
   * Adds a keyboard event listener to close the modal with Escape
   * Cleans up the listener on unmount or when the modal closes
   */
  useEffect(() => {
    // Do nothing if feature is disabled or modal is closed
    if (!closeOnEscape || !isOpen) return;

    // Event handler for Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleEscape);

    // Clean up listener on unmount
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  /**
   * Effect Hook - Page scroll management
   * Prevents body scroll when the modal is open
   * Preserves scroll position and restores it on close
   */
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Retrieve saved scroll position
      const scrollY = document.body.style.top;

      // Restore body styles
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup: Restore default styles on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  /**
   * Effect Hook - Focus management for accessibility
   * Moves focus to the modal on open
   * Restores focus to previous element on close
   */
  useEffect(() => {
    if (!isOpen) return;

    // Save the element that had focus before opening
    const previousActiveElement = document.activeElement;

    // Move focus to modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.focus();
    }

    // Restore focus to previous element on close
    return () => {
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen]);

  // Render nothing if modal is closed
  if (!isOpen) return null;

  /**
   * Overlay click handler
   * Closes the modal if closeOnOverlayClick option is enabled
   */
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    // Overlay - Dark background that covers the page
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* Modal content - Stops click propagation to prevent closing the modal */}
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Close button - Conditionally displayed */}
        {showCloseButton && (
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Fermer la modale"
            type="button"
          >
            ×
          </button>
        )}
        {/* Custom modal content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

