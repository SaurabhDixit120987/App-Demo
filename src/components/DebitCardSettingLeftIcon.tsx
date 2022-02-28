import * as React from 'react';

import FreezeCardSvg from '../assets/FreezeCardSvg';
import NewCardSvg from '../assets/NewCardSvg';
import RestrictLargeSvg from '../assets/RestrictLargeSvg';
import SpeedMeterLargeSvg from '../assets/SpeedMeterLargeSvg';
import UploadSvg from '../assets/UploadSvg';
import {CardSettingOptionEnum} from '../core/enum/CardSettingOptionEnum';

const DebitCardSettingLeftIcon = ({code}: {code: number}) => {
  const LeftIcon = null;
  switch (code) {
    case CardSettingOptionEnum.topUp:
      return <UploadSvg />;
    case CardSettingOptionEnum.weekelySpending:
      return <SpeedMeterLargeSvg />;
    case CardSettingOptionEnum.freezeCard:
      return <FreezeCardSvg />;
    case CardSettingOptionEnum.getNewCard:
      return <NewCardSvg />;
    case CardSettingOptionEnum.deactivatedCard:
      return <RestrictLargeSvg />;
  }
  return LeftIcon;
};

export default DebitCardSettingLeftIcon;
