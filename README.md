# react-simple-modal

[![npm version](https://img.shields.io/npm/v/@hrnet/react-simple-modal.svg)](https://www.npmjs.com/package/@hrnet/react-simple-modal)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Composant Modal React simple, performant et accessible. Migration du plugin jQuery Modal vers React.

## 🎯 Pourquoi ce composant ?

- ⚡ **Performance** : Composant léger (~5KB)
- ♿ **Accessibilité** : Support ARIA, gestion du focus et du clavier
- 🎨 **Personnalisable** : Styles CSS facilement modifiables
- 📦 **Sans dépendance** : Seulement React en peer dependency
- 🔧 **Simple** : API intuitive et facile à utiliser

## 📦 Installation

```bash
npm install react-simple-modal
```

ou avec yarn :

```bash
yarn add react-simple-modal
```

## 🚀 Utilisation de base

```jsx
import { useState } from 'react';
import Modal from '@hrnet/react-simple-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <h2>Titre de la modale</h2>
        <p>Contenu de votre modale ici.</p>
        <button onClick={() => setIsOpen(false)}>
          Fermer
        </button>
      </Modal>
    </div>
  );
}
```

## 📖 Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `isOpen` | `boolean` | **requis** | Contrôle l'affichage de la modale |
| `onClose` | `function` | **requis** | Callback appelé à la fermeture |
| `children` | `ReactNode` | **requis** | Contenu de la modale |
| `className` | `string` | `''` | Classe CSS additionnelle |
| `closeOnEscape` | `boolean` | `true` | Fermer avec la touche Escape |
| `closeOnOverlayClick` | `boolean` | `true` | Fermer en cliquant sur l'overlay |
| `showCloseButton` | `boolean` | `true` | Afficher le bouton de fermeture (×) |
| `ariaLabel` | `string` | `'Fenêtre modale'` | Label ARIA pour l'accessibilité |

## 🎨 Exemples d'utilisation

### Modale de confirmation

```jsx
<Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
  <h3>Confirmer l'action ?</h3>
  <p>Êtes-vous sûr de vouloir continuer ?</p>
  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
    <button onClick={handleConfirm}>Confirmer</button>
    <button onClick={() => setShowConfirm(false)}>Annuler</button>
  </div>
</Modal>
```

### Modale sans bouton de fermeture

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
    <p>Traitement en cours...</p>
  </div>
</Modal>
```

### Modale avec style personnalisé

```jsx
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  className="custom-modal"
>
  <h2>Modale personnalisée</h2>
  <p>Contenu avec style custom</p>
</Modal>
```

Ajoutez votre CSS personnalisé :

```css
.custom-modal {
  max-width: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

## ♿ Accessibilité

Le composant suit les bonnes pratiques d'accessibilité :

- **ARIA** : Utilise `role="dialog"` et `aria-modal="true"`
- **Focus** : Gère automatiquement le focus (piège à focus)
- **Clavier** : Support de la touche Escape pour fermer
- **Screen readers** : Labels ARIA personnalisables

## 🛠️ Développement

### Build

```bash
npm run build
```

### Mode développement

```bash
npm run dev
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 🔗 Liens

- [Repository GitHub](https://github.com/getsu7/react-simple-modal)
- [NPM Package](https://www.npmjs.com/package/react-simple-modal)

---

Créé par getsu7

