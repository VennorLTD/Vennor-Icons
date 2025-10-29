import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';
import iconsData from './icons-data';

const VennorIcons = ({ name, size = 24, color = '#000000', ...props }) => {
  const iconSvg = iconsData[name];

  if (!iconSvg) {
    console.warn(`VennorIcons: Icon "${name}" not found`);
    return null;
  }

  // Process the SVG string to replace stroke/fill colors
  // Replace stroke colors (but keep stroke-width and stroke-linecap)
  let processedSvg = iconSvg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  // Replace fill colors (but keep fill="none" and fill="white")
  processedSvg = processedSvg.replace(/fill="(?!none|white)[^"]*"/g, `fill="${color}"`);

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
