import * as React from 'react';
import { useCallback, useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { useIsFocused } from '@react-navigation/core';
import { isEmpty } from 'lodash';

import Colors from '../../constants/Colors';
import { TStoreStackScreenProps } from '../../navigation/types';
import MaterialIconsHeaderButtons from '../../components/UI/MaterialIconsHeaderButtons';
import Loading from '../../components/UI/Loading';
import Fallback from '../../components/UI/Fallback';
import CategoryGrid from '../../components/CategoryGrid';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { getTutoringSessions } from '../../store/slices/tutoring';

export default function TStoreScreen({ navigation }: TStoreStackScreenProps<'Store'>) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((s) => s.tutoring.isLoading);
  const tutoringSessionsCategories = useAppSelector((s) => s.tutoring.tutoringSessionsCategories);

  useEffect(() => {
    dispatch(getTutoringSessions());
  }, []);

  const onPressHelp = useCallback(() => Alert.alert(
    'Help', `
    Here you can sign up for tutoring sessions.
    In doing so, the tutor will be notified and will have the option of accepting or withdrawing your enrollment.
    When accepted, the token transaction is performed.
    `, [{
      text: 'Got it!',
      style: 'default',
    }], {
      cancelable: true,
    },
  ), []);

  const isFocused = useIsFocused();
  useLayoutEffect(() => {
    if (isFocused) {
      navigation.getParent()!.setOptions({
        headerTitle: 'Tutoring Sessions Store',
        headerRight: () => (
          <MaterialIconsHeaderButtons>
            <Item
              title="help-outline"
              iconName="help-outline"
              color={Colors.white}
              onPress={onPressHelp}
            />
          </MaterialIconsHeaderButtons>
        ),
      });
    }
  }, [navigation, onPressHelp, isFocused]);

  return isLoading ? (
    <Loading />
  ) : isEmpty(tutoringSessionsCategories) ? (
    <Fallback message="There are no announced tutoring sessions yet." />
  ) : (
    <CategoryGrid
      categories={Object.keys(tutoringSessionsCategories)}
      searchPlaceholder="Search Tutoring Session Categories"
      onPress={(category) => navigation.navigate('CategoryStore', { category })}
      refreshing={isLoading}
      onRefresh={() => dispatch(getTutoringSessions())}
    />
  );
}
