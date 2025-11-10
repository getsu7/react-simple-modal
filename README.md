# react-simple-modal

[![npm version](https://img.shields.io/npm/v/@hrnet/react-simple-modal.svg)](https://www.npmjs.com/package/@hrnet/react-simple-modal)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Simple, performant and accessible React Modal component. Migration from jQuery Modal plugin to React.

## 🎯 Why this component?

- ⚡ **Performance**: Lightweight component (~5KB)
- ♿ **Accessibility**: ARIA support, focus and keyboard management
- 🎨 **Customizable**: Easily modifiable CSS styles
- 📦 **No dependencies**: Only React as peer dependency
- 🔧 **Simple**: Intuitive and easy-to-use API

## 📦 Installation

```bash
npm install react-simple-modal
```

or with yarn:

```bash
yarn add react-simple-modal
```

## 🚀 Basic Usage

```jsx
import { useState } from 'react';
import Modal from '@hrnet/react-simple-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <h2>Modal Title</h2>
        <p>Your modal content here.</p>
        <button onClick={() => setIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}
```

## 📖 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Controls the modal visibility |
| `onClose` | `function` | **required** | Callback called on close |
| `children` | `ReactNode` | **required** | Modal content |
| `className` | `string` | `''` | Additional CSS class |
| `closeOnEscape` | `boolean` | `true` | Close with Escape key |
| `closeOnOverlayClick` | `boolean` | `true` | Close by clicking on overlay |
| `showCloseButton` | `boolean` | `true` | Show close button (×) |
| `ariaLabel` | `string` | `'Fenêtre modale'` | ARIA label for accessibility |

## 🎨 Usage Examples

### Confirmation Modal

```jsx
<Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
  <h3>Confirm Action?</h3>
  <p>Are you sure you want to continue?</p>
  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
    <button onClick={handleConfirm}>Confirm</button>
    <button onClick={() => setShowConfirm(false)}>Cancel</button>
  </div>
</Modal>
```

### Modal without Close Button

```jsx
<Modal 
  isOpen={isProcessing} 
  onClose={() => {}}
  showCloseButton={false}
  closeOnEscape={false}
  closeOnOverlayClick={false}
>
  <div style={{ textAlign: 'center' }}>
    <div className="spinner" />
    <p>Processing...</p>
  </div>
</Modal>
```

### Modal with Custom Style

```jsx
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  className="custom-modal"
>
  <h2>Custom Modal</h2>
  <p>Content with custom style</p>
</Modal>
```

Add your custom CSS:

```css
.custom-modal {
  max-width: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

## ♿ Accessibility

The component follows accessibility best practices:

- **ARIA**: Uses `role="dialog"` and `aria-modal="true"`
- **Focus**: Automatically manages focus (focus trap)
- **Keyboard**: Escape key support to close
- **Screen readers**: Customizable ARIA labels

## 🛠️ Development

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or a pull request.

## 🔗 Links

- [GitHub Repository](https://github.com/getsu7/react-simple-modal)
- [NPM Package](https://www.npmjs.com/package/react-simple-modal)

---

Created by getsu7

