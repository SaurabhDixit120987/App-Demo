import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {credit, debitCard, home, payments, profile} from '../navigation/labels';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {View, Text, TouchableOpacity} from 'react-native';
import CreditSvg from '../assets/CreditSvg';
import DebitCardSvg from '../assets/DebitCardSvg';
import HomeSvg from '../assets/HomeSvg';
import LeftRightArrowSvg from '../assets/LeftRightArrowSvg';
import ProfileSvg from '../assets/ProfileSvg';

const MyTabBar = ({state, descriptors, navigation}) => {
  const tabBarIcon = (routeName: string, color: string) => {
    switch (routeName) {
      case home:
        return <HomeSvg color={color} />;
      case debitCard:
        return <DebitCardSvg color={color} />;
      case credit:
        return <CreditSvg color={color} />;
      case payments:
        return <LeftRightArrowSvg color={color} />;
      case profile:
        return <ProfileSvg color={color} />;
    }
  };
  return (
    <SafeAreaView
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: verticalScale(-10),
        },
      ]}>
      {state.routes.map((route, index) => {
        console.log('route', route);
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View>
              {tabBarIcon(route.name, isFocused ? colors.secondary : '#ddd')}
            </View>
            <Text
              style={[
                typography.h6,
                {
                  color: isFocused ? colors.secondary : '#ddd',
                  textAlign: 'center',
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default MyTabBar;
