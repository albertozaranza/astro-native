import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function LinkInternal({
  id = 'LinkInternalIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M15.6856 0C15.1333 0 14.6856 0.44772 14.6856 1C14.6856 1.55228 15.1333 2 15.6856 2H17.2714L12.9785 6.29289C12.5879 6.68342 12.5879 7.31658 12.9785 7.70711C13.369 8.0976 14.0022 8.0976 14.3927 7.70711L18.6856 3.41422V5.00001C18.6856 5.55229 19.1333 6 19.6856 6C20.2379 6 20.6856 5.55229 20.6856 5V1C20.6856 0.44772 20.2379 0 19.6856 0H15.6856ZM2.68555 16.5858V15C2.68555 14.4477 2.23784 14 1.68555 14C1.13327 14 0.685547 14.4477 0.685547 15L0.685557 19C0.685557 19.5523 1.13327 20 1.68555 20H5.68555C6.23784 20 6.68555 19.5523 6.68555 19C6.68555 18.4477 6.23784 18 5.68555 18H4.09976L8.39268 13.7071C8.78318 13.3166 8.78318 12.6834 8.39268 12.2929C8.00218 11.9024 7.36897 11.9024 6.97845 12.2929L2.68555 16.5858Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default LinkInternal;
