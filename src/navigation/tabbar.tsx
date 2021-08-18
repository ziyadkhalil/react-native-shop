import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TypedNavigator} from '@react-navigation/native';

import {theme, colors} from '@src/theme';
import {HomeIcon, CatalogueIcon, HeartIcon, ProfileIcon} from '@src/assets';
import {Text, Header} from '@src/components';
import {Platform} from 'react-native';

const BaseTab = createBottomTabNavigator<TabsParamList>();

const tabBarStyle = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderTopWidth: 0,
  paddingTop: 5,
  paddingBottom: Platform.OS === 'android' ? 5 : 30,
  height: Platform.OS === 'ios' ? 86 : 60,
  ...theme.shadows()[4],
};

function Navigator(props: React.ComponentProps<TypedNavigator<TabsParamList, any, any, any, any>['Navigator']>) {
  return (
    <BaseTab.Navigator
      screenOptions={({route}) => ({
        headerShown: route.name !== 'CatalogueStack',
        header: Header,
        tabBarStyle,
        tabBarIcon: ({focused}) => {
          const iconProps: WithGradient<{}> = {
            ...(focused ? {gradient: colors.primaryGradient, gradientFill: true, gradientStroke: true} : {}),
          };
          switch (route.name) {
            case 'Home':
              return <HomeIcon {...iconProps} />;
            case 'CatalogueStack':
              return <CatalogueIcon {...iconProps} />;
            case 'Favorite':
              return <HeartIcon {...iconProps} />;
            case 'Profile':
              return <ProfileIcon {...iconProps} />;
            default:
              return null;
          }
        },
        tabBarLabel: ({focused}) => (
          <Text color={focused ? 'primary.700' : undefined} variant="tabbar">
            {route.name === 'CatalogueStack' ? 'Catalogue' : route.name}
          </Text>
        ),
      })}
      {...props}
    />
  );
}

export const Tab = {Screen: BaseTab.Screen, Navigator};
