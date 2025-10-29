import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

const iconMap = {
  'calender-medium-outline': require('./calender-medium-outline.svg'),
  'calender-medium-solid': require('./calender-medium-solid.svg'),
  'clock-medium-outline': require('./clock-medium-outline.svg'),
  'giftbox': require('./giftbox.svg'),
  'house-medium-outline': require('./house-medium-outline.svg'),
  'house-medium-solid': require('./house-medium-solid.svg'),
  'inbox-medium-outline': require('./inbox-medium-outline.svg'),
  'inbox-medium-solid': require('./inbox-medium-solid.svg'),
  'key-medium-outline': require('./key-medium-outlin.svg'),
  'lock-medium-solid': require('./lock-medium-solid.svg'),
  'people-medium-outline': require('./people-medium-outline.svg'),
  'people-medium-solid': require('./people-medium-solid.svg'),
  'person-medium-outline': require('./person-medium-outline.svg'),
  'person-medium-solid': require('./person-medium-solid.svg'),
  'person-minus-medium-outline': require('./person-minus-medium-outline.svg'),
  'person-plus-medium-outline': require('./person-plus-medium-outline.svg'),
  'person-star-medium-outline': require('./person-star-medium-outline.svg'),
  'qrcode-medium-outline': require('./qrcode-medium-outline.svg'),
  'search-medium-outline': require('./search-medium-outline.svg'),
  'search-medium-solid': require('./search-medium-solid.svg'),
  'settings-medium-outline': require('./settings-medium-outline.svg'),
  'wallet-medium-outline': require('./wallet-medium-outline.svg'),
};

const VennorIcons = ({ name, size = 24, color = '#000000', ...props }) => {
  const iconSvg = iconMap[name];

  if (!iconSvg) {
    console.warn(`VennorIcons: Icon "${name}" not found`);
    return null;
  }

  // Process the SVG string to replace stroke/fill colors
  let processedSvg = iconSvg;

  if (typeof iconSvg === 'string') {
    // Replace stroke colors (but keep stroke-width)
    processedSvg = iconSvg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    // Replace fill colors (but keep fill="none")
    processedSvg = processedSvg.replace(/fill="(?!none)[^"]*"/g, `fill="${color}"`);
  }

  return (
    <SvgXml
      xml={processedSvg}
      width={size}
      height={size}
      {...props}
    />
  );
};

VennorIcons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default VennorIcons;
