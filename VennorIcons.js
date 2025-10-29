import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';
import iconsData from './icons-data';

const VennorIcons = ({ name, size = 24, color = "#000", ...props }) => {
  const iconSvg = iconsData[name];

  if (!iconSvg) {
    console.warn(`VennorIcons: Icon "${name}" not found`);
    return null;
  }

  let processedSvg = iconSvg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
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
