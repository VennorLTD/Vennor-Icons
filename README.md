<div align="center">
  <img src="./assets/vennor-nobg-icon.svg" alt="Vennor Icons" width="120" height="120">
  <h1>Vennor Icons</h1>
  <p>A beautiful, open-source collection of SVG icons for React Native and Expo applications</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![npm version](https://img.shields.io/npm/v/vennor-icons.svg)](https://www.npmjs.com/package/@vennor-technologies/vennor-icons)
</div>

---

## Features

- **23+ carefully crafted icons** designed for modern mobile applications
- **Outline and Solid variants** for flexible design systems
- **React Native & Expo optimized** with full TypeScript support
- **Lightweight** - Pure SVG with no dependencies
- **Tree-shakeable** - Import only what you need
- **MIT Licensed** - Free for personal and commercial use

## Installation

### For Expo Projects (Recommended)

```bash
npx expo install @vennor-technologies/vennor-icons react-native-svg
```

### For React Native Projects

```bash
# npm
npm install @vennor-technologies/vennor-icons react-native-svg

# yarn
yarn add @vennor-technologies/vennor-icons react-native-svg

# pnpm
pnpm add @vennor-technologies/vennor-icons react-native-svg
```

### Peer Dependencies

This package requires the following peer dependencies:
- `react` >= 16.8.0
- `react-native` >= 0.59.0
- `react-native-svg` >= 12.0.0

## Usage

### Basic Usage (Recommended)

The simplest way to use Vennor Icons is with the component syntax, similar to Ionicons:

```javascript
import VennorIcons from '@vennor-technologies/vennor-icons';

function MyComponent() {
  return (
    <View>
      <VennorIcons name="house-medium-outline" size={24} color="#000000" />
      <VennorIcons name="search-medium-solid" size={24} color="#FF5733" />
    </View>
  );
}
```

### Component Props

The `VennorIcons` component accepts the following props:

- `name` (required): The icon name (see Available Icons below)
- `size` (optional): Icon size in pixels (default: 24)
- `color` (optional): Icon color (default: "#000000")
- Additional props from `react-native-svg`'s `SvgProps` are also supported

```javascript
import VennorIcons from '@vennor-technologies/vennor-icons';

function ProfileIcon() {
  return (
    <VennorIcons
      name="person-medium-outline"
      size={32}
      color="#4A90E2"
      style={{ margin: 10 }}
    />
  );
}
```

### TypeScript Support

Full TypeScript definitions with autocomplete for icon names:

```typescript
import VennorIcons, { IconName, VennorIconsProps } from '@vennor-technologies/vennor-icons';

function MyComponent() {
  const iconName: IconName = "house-medium-outline";

  return <VennorIcons name={iconName} size={24} color="#000" />;
}
```

### Advanced Usage (Legacy)

You can also import individual icon SVG strings directly:

```javascript
import { HouseMediumOutline, SearchMediumSolid } from '@vennor-technologies/vennor-icons';
import { SvgXml } from 'react-native-svg';

function MyComponent() {
  return (
    <View>
      <SvgXml xml={HouseMediumOutline} width="24" height="24" />
      <SvgXml xml={SearchMediumSolid} width="24" height="24" />
    </View>
  );
}
```

### Import All Icons

```javascript
import { allIcons } from '@vennor-technologies/vennor-icons';

// Access any icon SVG string
const homeIcon = allIcons.HouseMediumOutline;
const searchIcon = allIcons.SearchMediumSolid;
```

## Available Icons

All icons are available in the `name` prop using kebab-case format:

### Navigation & UI
| Icon | Name | Example |
|------|------|---------|
| 🏠 | House | `<VennorIcons name="house-medium-outline" />` `<VennorIcons name="house-medium-solid" />` |
| 🔍 | Search | `<VennorIcons name="search-medium-outline" />` `<VennorIcons name="search-medium-solid" />` |
| ⚙️ | Settings | `<VennorIcons name="settings-medium-outline" />` |
| 📥 | Inbox | `<VennorIcons name="inbox-medium-outline" />` `<VennorIcons name="inbox-medium-solid" />` |

### User & People
| Icon | Name | Example |
|------|------|---------|
| 👤 | Person | `<VennorIcons name="person-medium-outline" />` `<VennorIcons name="person-medium-solid" />` |
| 👥 | People | `<VennorIcons name="people-medium-outline" />` `<VennorIcons name="people-medium-solid" />` |
| ➕ | Person Plus | `<VennorIcons name="person-plus-medium-outline" />` |
| ➖ | Person Minus | `<VennorIcons name="person-minus-medium-outline" />` |
| ⭐ | Person Star | `<VennorIcons name="person-star-medium-outline" />` |

### Time & Calendar
| Icon | Name | Example |
|------|------|---------|
| 📅 | Calendar | `<VennorIcons name="calender-medium-outline" />` `<VennorIcons name="calender-medium-solid" />` |
| 🕐 | Clock | `<VennorIcons name="clock-medium-outline" />` |

### Security & Access
| Icon | Name | Example |
|------|------|---------|
| 🔒 | Lock | `<VennorIcons name="lock-medium-solid" />` |
| 🔑 | Key | `<VennorIcons name="key-medium-outline" />` |
| 📱 | QR Code | `<VennorIcons name="qrcode-medium-outline" />` |

### Other
| Icon | Name | Example |
|------|------|---------|
| 💳 | Wallet | `<VennorIcons name="wallet-medium-outline" />` |
| 🎁 | Gift Box | `<VennorIcons name="giftbox" />` |

## Icon Naming Convention

Icons follow a consistent naming pattern:

```
[name]-[size]-[variant]
```

- **name**: Descriptive name (e.g., `house`, `person`, `search`)
- **size**: Currently all icons are `medium` sized
- **variant**: `outline` or `solid` (some icons have only one variant)

For legacy exports (PascalCase), the pattern is `[Name][Size][Variant]`

## Styling Icons

### Changing Size

```javascript
<VennorIcons name="house-medium-outline" size={32} />
```

### Changing Color

All icons can be recolored by passing the `color` prop:

```javascript
<VennorIcons name="person-medium-outline" size={24} color="#FF5733" />
```

### Dynamic Styling

```javascript
import { View, StyleSheet } from 'react-native';
import VennorIcons from '@vennor-technologies/vennor-icons';

function ThemedIcon({ isDarkMode }) {
  return (
    <VennorIcons
      name="search-medium-solid"
      size={24}
      color={isDarkMode ? '#FFFFFF' : '#000000'}
    />
  );
}
```

### Adding Custom Styles

```javascript
import { View, StyleSheet } from 'react-native';
import VennorIcons from '@vennor-technologies/vennor-icons';

function IconButton() {
  return (
    <View style={styles.iconContainer}>
      <VennorIcons name="settings-medium-outline" size={24} color="#4A90E2" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});
```

## Contributing

We welcome contributions! Here's how you can help:

### Adding New Icons

1. **Fork the repository**
2. **Create your icon** following these guidelines:
   - SVG format
   - Clean, optimized paths
   - Consistent sizing (preferably 24x24 or 32x32 viewBox)
   - Follow the naming convention: `icon-name-size-variant.svg`
3. **Add to `index.js`**:
   ```javascript
   YourIconName: require('./your-icon-name.svg'),
   ```
4. **Add TypeScript definition** in `index.d.ts`
5. **Update README** with your new icon
6. **Submit a pull request**

### Icon Design Guidelines

- Use a consistent stroke width (2px recommended)
- Maintain clean, simple designs
- Provide both outline and solid variants when possible
- Optimize SVG code (remove unnecessary attributes)
- Test on both iOS and Android

### Bug Reports

Found a bug? Please open an issue with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Development

```bash
# Clone the repository
git clone https://github.com/VennorLTD/Vennor-Icons.git

# Navigate to directory
cd Vennor-Icons

# Install dependencies
npm install

# Make your changes and test
```

## License

MIT License - feel free to use this in personal and commercial projects.

See [LICENSE](LICENSE) for more information.

## Support

- **Website**: [vennor.co.za](https://vennor.co.za)
- **Issues**: [GitHub Issues](https://github.com/VennorLTD/Vennor-Icons/issues)
- **Discussions**: [GitHub Discussions](https://github.com/VennorLTD/Vennor-Icons/discussions)

## Roadmap

- [ ] Add more icon variants (Small, Large sizes)
- [ ] Animated icon components
- [ ] React web support
- [ ] Icon preview gallery
- [ ] Figma design file
- [ ] Dark mode optimized variants

## Acknowledgments

Created with care for the React Native and Expo community.

---

<div align="center">
  Made with ❤️ by the Vennor Icons team
  <br />
  <sub>Star this repo if you find it useful!</sub>
</div>
