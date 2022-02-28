import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CardOption from '../../../../components/CardOption';
import DebitCardSettingLeftIcon from '../../../../components/DebitCardSettingLeftIcon';
import Switch from '../../../../components/Switch';
import {CardSettingOptionEnum} from '../../../../core/enum/CardSettingOptionEnum';
import {
  DebitCardOptionsSettingInterface,
  Store,
} from '../../../../core/interfaces';
import {CardSettingOptions} from '../../../../core/mock/CardOption';
import {navigate} from '../../../../core/services/navigation/navigation.service';
import {setCardDetails} from '../../../../store/actions';
import {spendingLimit} from '../../../../navigation/labels';

const SettingsList = () => {
  const {cardDetails} = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {CardSettingOptions.map(
        (item: DebitCardOptionsSettingInterface, index: number) => {
          const {id, description, title, rightIcon, leftIcon} = item;
          const onPressRightIcon = () => {
            if (leftIcon === CardSettingOptionEnum.weekelySpending) {
              if (parseInt(cardDetails.usage?.usageLimit) > 0) {
                dispatch(
                  setCardDetails({
                    ...cardDetails,
                    usage: {
                      ...cardDetails.usage,
                      usageLimit: '0',
                    },
                  }),
                );
              } else {
                navigate(spendingLimit);
              }
            }
          };
          return (
            <CardOption
              key={id}
              title={title}
              description={description}
              right={
                rightIcon
                  ? () => (
                      <TouchableOpacity
                        onPress={onPressRightIcon}
                        activeOpacity={0.1}>
                        <Switch
                          value={
                            parseInt(cardDetails.usage?.usageLimit) > 0 &&
                            leftIcon === CardSettingOptionEnum.weekelySpending
                          }
                        />
                      </TouchableOpacity>
                    )
                  : null
              }
              left={() => <DebitCardSettingLeftIcon code={leftIcon} />}
            />
          );
        },
      )}
    </React.Fragment>
  );
};

export default SettingsList;
