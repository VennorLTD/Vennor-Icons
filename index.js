const icons = {
  CalenderMediumOutline: require('./calender-medium-outline.svg'),
  CalenderMediumSolid: require('./calender-medium-solid.svg'),
  ClockMediumOutline: require('./clock-medium-outline.svg'),
  Giftbox: require('./giftbox.svg'),
  HouseMediumOutline: require('./house-medium-outline.svg'),
  HouseMediumSolid: require('./house-medium-solid.svg'),
  InboxMediumOutline: require('./inbox-medium-outline.svg'),
  InboxMediumSolid: require('./inbox-medium-solid.svg'),
  KeyMediumOutline: require('./key-medium-outlin.svg'),
  LockMediumSolid: require('./lock-medium-solid.svg'),
  PeopleMediumOutline: require('./people-medium-outline.svg'),
  PeopleMediumSolid: require('./people-medium-solid.svg'),
  PersonMediumOutline: require('./person-medium-outline.svg'),
  PersonMediumSolid: require('./person-medium-solid.svg'),
  PersonMinusMediumOutline: require('./person-minus-medium-outline.svg'),
  PersonPlusMediumOutline: require('./person-plus-medium-outline.svg'),
  PersonStarMediumOutline: require('./person-star-medium-outline.svg'),
  QrcodeMediumOutline: require('./qrcode-medium-outline.svg'),
  SearchMediumOutline: require('./search-medium-outline.svg'),
  SearchMediumSolid: require('./search-medium-solid.svg'),
  SettingsMediumOutline: require('./settings-medium-outline.svg'),
  WalletMediumOutline: require('./wallet-medium-outline.svg'),
};

module.exports = icons;

Object.keys(icons).forEach(key => {
  module.exports[key] = icons[key];
});
