import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

import {colors} from '../theme/colors';
import {deviceHeight, deviceWidth} from '../theme/dimen';

interface LoaderAtomProps {}

const LoaderAtom = ({}: LoaderAtomProps) => {
  const loader = useSelector((state: any) => state.loaderReducer);
  if (!loader) {
    return null;
  }
  return (
    <View
      style={{
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: verticalScale(0),
        left: scale(0),
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default LoaderAtom;

const styles = StyleSheet.create({
  container: {},
});
