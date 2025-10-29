import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

export interface VennorIconsProps extends Omit<SvgProps, 'width' | 'height'> {
  name: IconName;
  size?: number;
  color?: string;
}

export type IconName =
  | 'calender-medium-outline'
  | 'calender-medium-solid'
  | 'clock-medium-outline'
  | 'giftbox'
  | 'house-medium-outline'
  | 'house-medium-solid'
  | 'inbox-medium-outline'
  | 'inbox-medium-solid'
  | 'key-medium-outline'
  | 'lock-medium-solid'
  | 'people-medium-outline'
  | 'people-medium-solid'
  | 'person-medium-outline'
  | 'person-medium-solid'
  | 'person-minus-medium-outline'
  | 'person-plus-medium-outline'
  | 'person-star-medium-outline'
  | 'qrcode-medium-outline'
  | 'search-medium-outline'
  | 'search-medium-solid'
  | 'settings-medium-outline'
  | 'wallet-medium-outline';

// Main component export
declare const VennorIcons: ComponentType<VennorIconsProps>;
export default VennorIcons;

// Individual icon exports for backward compatibility
export interface IconModule {
  default: any;
}

export const CalenderMediumOutline: IconModule;
export const CalenderMediumSolid: IconModule;
export const ClockMediumOutline: IconModule;
export const Giftbox: IconModule;
export const HouseMediumOutline: IconModule;
export const HouseMediumSolid: IconModule;
export const InboxMediumOutline: IconModule;
export const InboxMediumSolid: IconModule;
export const KeyMediumOutline: IconModule;
export const LockMediumSolid: IconModule;
export const PeopleMediumOutline: IconModule;
export const PeopleMediumSolid: IconModule;
export const PersonMediumOutline: IconModule;
export const PersonMediumSolid: IconModule;
export const PersonMinusMediumOutline: IconModule;
export const PersonPlusMediumOutline: IconModule;
export const PersonStarMediumOutline: IconModule;
export const QrcodeMediumOutline: IconModule;
export const SearchMediumOutline: IconModule;
export const SearchMediumSolid: IconModule;
export const SettingsMediumOutline: IconModule;
export const WalletMediumOutline: IconModule;

export const allIcons: {
  CalenderMediumOutline: IconModule;
  CalenderMediumSolid: IconModule;
  ClockMediumOutline: IconModule;
  Giftbox: IconModule;
  HouseMediumOutline: IconModule;
  HouseMediumSolid: IconModule;
  InboxMediumOutline: IconModule;
  InboxMediumSolid: IconModule;
  KeyMediumOutline: IconModule;
  LockMediumSolid: IconModule;
  PeopleMediumOutline: IconModule;
  PeopleMediumSolid: IconModule;
  PersonMediumOutline: IconModule;
  PersonMediumSolid: IconModule;
  PersonMinusMediumOutline: IconModule;
  PersonPlusMediumOutline: IconModule;
  PersonStarMediumOutline: IconModule;
  QrcodeMediumOutline: IconModule;
  SearchMediumOutline: IconModule;
  SearchMediumSolid: IconModule;
  SettingsMediumOutline: IconModule;
  WalletMediumOutline: IconModule;
};
