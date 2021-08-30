import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function FaceId({
  id = 'FaceIdIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.84615 8.80769C5.84615 7.17208 7.17208 5.84615 8.80769 5.84615H10.9231C11.1567 5.84615 11.3462 5.65674 11.3462 5.42308C11.3462 5.18942 11.1567 5 10.9231 5H8.80769C6.70476 5 5 6.70476 5 8.80769V10.9231C5 11.1567 5.18942 11.3462 5.42308 11.3462C5.65674 11.3462 5.84615 11.1567 5.84615 10.9231V8.80769ZM26.1538 8.80769C26.1538 7.17208 24.8279 5.84615 23.1923 5.84615H21.0769C20.8433 5.84615 20.6538 5.65674 20.6538 5.42308C20.6538 5.18942 20.8433 5 21.0769 5H23.1923C25.2952 5 27 6.70476 27 8.80769V10.9231C27 11.1567 26.8106 11.3462 26.5769 11.3462C26.3433 11.3462 26.1538 11.1567 26.1538 10.9231V8.80769ZM8.80769 26.1538C7.17208 26.1538 5.84615 24.8279 5.84615 23.1923V21.0769C5.84615 20.8433 5.65674 20.6538 5.42308 20.6538C5.18942 20.6538 5 20.8433 5 21.0769V23.1923C5 25.2952 6.70476 27 8.80769 27H10.9231C11.1567 27 11.3462 26.8106 11.3462 26.5769C11.3462 26.3433 11.1567 26.1538 10.9231 26.1538H8.80769ZM26.1538 23.1923C26.1538 24.8279 24.8279 26.1538 23.1923 26.1538H21.0769C20.8433 26.1538 20.6538 26.3433 20.6538 26.5769C20.6538 26.8106 20.8433 27 21.0769 27H23.1923C25.2952 27 27 25.2952 27 23.1923V21.0769C27 20.8433 26.8106 20.6538 26.5769 20.6538C26.3433 20.6538 26.1538 20.8433 26.1538 21.0769V23.1923Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 8.80769C4.5 6.42862 6.42862 4.5 8.80769 4.5H10.9231C11.4329 4.5 11.8462 4.91328 11.8462 5.42308C11.8462 5.93288 11.4329 6.34615 10.9231 6.34615H8.80769C7.44822 6.34615 6.34615 7.44822 6.34615 8.80769V10.9231C6.34615 11.4329 5.93288 11.8462 5.42308 11.8462C4.91328 11.8462 4.5 11.4329 4.5 10.9231V8.80769ZM20.1538 5.42308C20.1538 4.91328 20.5671 4.5 21.0769 4.5H23.1923C25.5714 4.5 27.5 6.42862 27.5 8.80769V10.9231C27.5 11.4329 27.0867 11.8462 26.5769 11.8462C26.0671 11.8462 25.6538 11.4329 25.6538 10.9231V8.80769C25.6538 7.44822 24.5518 6.34615 23.1923 6.34615H21.0769C20.5671 6.34615 20.1538 5.93288 20.1538 5.42308ZM4.5 21.0769C4.5 20.5671 4.91328 20.1538 5.42308 20.1538C5.93288 20.1538 6.34615 20.5671 6.34615 21.0769V23.1923C6.34615 24.5518 7.44822 25.6538 8.80769 25.6538H10.9231C11.4329 25.6538 11.8462 26.0671 11.8462 26.5769C11.8462 27.0867 11.4329 27.5 10.9231 27.5H8.80769C6.42862 27.5 4.5 25.5714 4.5 23.1923V21.0769ZM25.6538 21.0769C25.6538 20.5671 26.0671 20.1538 26.5769 20.1538C27.0867 20.1538 27.5 20.5671 27.5 21.0769V23.1923C27.5 25.5714 25.5714 27.5 23.1923 27.5H21.0769C20.5671 27.5 20.1538 27.0867 20.1538 26.5769C20.1538 26.0671 20.5671 25.6538 21.0769 25.6538H23.1923C24.5518 25.6538 25.6538 24.5518 25.6538 23.1923V21.0769Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6154 11.6154C13.1677 11.6154 13.6154 12.0631 13.6154 12.6154V14.7307C13.6154 15.283 13.1677 15.7307 12.6154 15.7307C12.0631 15.7307 11.6154 15.283 11.6154 14.7307V12.6154C11.6154 12.0631 12.0631 11.6154 12.6154 11.6154ZM17.6923 11.6154C18.2446 11.6154 18.6923 12.0631 18.6923 12.6154V15.6923C18.6923 17.3491 17.3492 18.6923 15.6923 18.6923H15.5769C15.0246 18.6923 14.5769 18.2446 14.5769 17.6923C14.5769 17.14 15.0246 16.6923 15.5769 16.6923H15.6923C16.2446 16.6923 16.6923 16.2446 16.6923 15.6923V12.6154C16.6923 12.0631 17.14 11.6154 17.6923 11.6154ZM21.0769 11.6154C21.6292 11.6154 22.0769 12.0631 22.0769 12.6154V14.7307C22.0769 15.283 21.6292 15.7307 21.0769 15.7307C20.5246 15.7307 20.0769 15.283 20.0769 14.7307V12.6154C20.0769 12.0631 20.5246 11.6154 21.0769 11.6154ZM12.8615 19.0077C13.3034 18.6763 13.9302 18.7658 14.2615 19.2077C14.3771 19.3617 14.6165 19.571 14.8919 19.6571C15.1074 19.7246 15.4069 19.7429 15.8231 19.4307C16.2649 19.0994 16.8917 19.1889 17.2231 19.6307C17.5545 20.0726 17.4649 20.6994 17.0231 21.0307C16.0854 21.734 15.1157 21.8228 14.2946 21.5659C13.5335 21.3277 12.9691 20.8177 12.6615 20.4077C12.3302 19.9658 12.4197 19.339 12.8615 19.0077Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default FaceId;
