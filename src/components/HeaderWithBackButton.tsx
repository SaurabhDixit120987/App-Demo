import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

import HomeSvg from '../assets/HomeSvg';
import {goBack} from '../core/services/navigation/navigation.service';
import {colors} from '../theme/colors';

interface HeaderWihtBackButtonProps {
  title?: string;
  subTitle?: string;
  handlePressRight?: () => void;
}

const HeaderWithBackButton = ({
  title,
  subTitle,
  handlePressRight,
}: HeaderWihtBackButtonProps) => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title || ''} subtitle={subTitle || ''} />
      <Appbar.Action
        icon={() => <HomeSvg color={colors.secondary} />}
        onPress={handlePressRight}
      />
    </Appbar.Header>
  );
};

export default HeaderWithBackButton;

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {height: 0, width: 0},
  },
});
