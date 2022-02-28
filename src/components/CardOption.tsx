import * as React from 'react';
import {List} from 'react-native-paper';

import {typography} from '../theme/typography';

interface CardOptionProps {
  title: string;
  description: string;
  left: (props: any) => React.ReactNode | React.ReactElement;
  right?: (props: any) => React.ReactNode | React.ReactElement | null;
}

const CardOption = ({left, right, title, description}: CardOptionProps) => {
  if (right) {
    return (
      <List.Item
        style={{
          alignItems: 'center',
          paddingHorizontal: 0,
        }}
        title={title}
        description={description}
        titleStyle={{
          ...typography.h3,
          ...typography.h3_c1,
        }}
        descriptionStyle={{
          ...typography.h4,
          ...typography.h4_c1,
        }}
        left={left}
        right={right}
      />
    );
  }
  return (
    <List.Item
      style={{
        alignItems: 'center',
        paddingHorizontal: 0,
      }}
      title={title}
      titleStyle={{
        ...typography.h3,
        ...typography.h3_c1,
      }}
      descriptionStyle={{
        ...typography.h4,
        ...typography.h4_c1,
      }}
      description={description}
      left={left}
    />
  );
};

export default CardOption;
