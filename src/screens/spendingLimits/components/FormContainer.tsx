import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import SpeedMeterSvg from '../../../assets/SpeedMeterSvg';
import {
  Amount,
  CustomButton,
  Input,
  KeyboardAvoidingViewAtom,
} from '../../../components';
import {Store} from '../../../core/interfaces';
import {chunks} from '../../../core/mock/amountChunks';
import {goBack} from '../../../core/services/navigation/navigation.service';
import {setCardDetails} from '../../../store/actions';
import {gutter} from '../../../theme/spacing';
import {typography} from '../../../theme/typography';

const FormContainer = () => {
  const {cardDetails} = useSelector((state: Store) => state);
  const [limit, setLimit] = React.useState<string>('');
  const dispatch = useDispatch();
  const onPressSave = () => {
    dispatch(
      setCardDetails({
        ...cardDetails,
        usage: {
          ...cardDetails.usage,
          usageLimit: limit,
        },
      }),
    );
    goBack();
  };
  return (
    <React.Fragment>
      <KeyboardAvoidingViewAtom>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <View style={[styles.limitIntro]}>
              <SpeedMeterSvg />
              <Text
                style={[
                  typography.h3,
                  typography.h3_c2,
                  {marginLeft: scale(12)},
                ]}>
                Set a weekly debit card spending limit
              </Text>
            </View>
            <Input
              value={limit}
              onChangeText={setLimit}
              returnKeyType={'done'}
              containerStyle={{
                marginVertical: verticalScale(12),
              }}
            />
            <Text style={[typography.h4, typography.h4_c1]}>
              Here weekly means the last 7 days - not the calendar week
            </Text>
            <View style={styles.chunksContainer}>
              {chunks.map((item: string, index: number) => {
                const onPressItem = () => setLimit(item);
                return (
                  <Amount
                    key={index}
                    amount={item}
                    container={{marginRight: scale(12)}}
                    onPress={onPressItem}
                  />
                );
              })}
            </View>
          </View>
          <CustomButton
            title={'Save'}
            onPress={onPressSave}
            containerStyle={styles.buttonContainer}
            disabled={!limit}
          />
        </ScrollView>
      </KeyboardAvoidingViewAtom>
    </React.Fragment>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingHorizontal: gutter.paddingLargeHorizontal,
  },
  chunksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(32),
  },
  limitIntro: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: verticalScale(24),
    marginHorizontal: scale(24),
  },
});
