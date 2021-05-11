import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Coin({
  id = 'CoinIcon',
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
        d="M16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29ZM16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27ZM18.6988 12.0276C18.5978 11.8223 18.4531 11.6402 18.2297 11.4685C17.9825 11.2781 17.6098 11.111 17.1246 10.9971V14.9604L17.1377 14.9638L17.1379 14.9638C17.1442 14.9654 17.1504 14.9669 17.1568 14.9687C17.9412 15.1875 18.7493 15.4596 19.4717 15.9798C19.8812 16.2766 20.2577 16.6656 20.5286 17.1512C20.8401 17.7051 21.0008 18.3684 20.9992 19.0939C20.9992 19.791 20.8492 20.44 20.5447 20.9932C20.2416 21.5478 19.7909 21.9878 19.2819 22.3003C18.6299 22.696 17.8953 22.9007 17.1246 23.0086V23.8698C17.1246 24.4941 16.6096 25 15.9752 25C15.34 25 14.8257 24.4941 14.8257 23.8698V23.0423C13.8668 22.9074 13.0212 22.5619 12.3615 22.0125C11.4906 21.296 10.9924 20.2227 11.0001 19.0924C11.0001 18.5108 11.4799 18.0379 12.073 18.0379C12.6646 18.0379 13.1444 18.5108 13.1444 19.0924C13.1521 19.6538 13.3487 20.0608 13.7482 20.4018C13.9977 20.6109 14.3627 20.7818 14.825 20.8882V16.5599C14.0635 16.359 13.286 16.1244 12.575 15.6695C12.1656 15.4041 11.7791 15.0534 11.496 14.5962C11.1684 14.076 10.997 13.436 11.0001 12.7487C11.0001 12.0861 11.1769 11.3636 11.6039 10.6935C12.0271 10.025 12.7174 9.42913 13.6411 9.08736C14.0015 8.9517 14.3987 8.85876 14.8257 8.8003V8.13025C14.8257 7.50591 15.34 7 15.9752 7C16.6096 7 17.1246 7.50591 17.1246 8.13025V8.84452C17.7277 8.94046 18.2817 9.09635 18.7715 9.33095C19.6057 9.72743 20.2653 10.3518 20.6342 11.117C20.8814 11.6252 21 12.1843 21 12.7479C21 13.331 20.5186 13.8032 19.9271 13.8032C19.334 13.8032 18.8542 13.331 18.8542 12.7479C18.8542 12.4669 18.7991 12.2323 18.6988 12.0276ZM18.6972 17.9761C18.521 17.7309 18.2528 17.5188 17.8429 17.3189C17.6038 17.1999 17.3125 17.0963 17 17V21C17.2506 20.9522 17.4861 20.898 17.6853 20.8276C18.2572 20.6228 18.5741 20.3752 18.7725 20.0441C18.9044 19.8183 18.9982 19.5204 19 19.0753C18.9965 18.533 18.8716 18.2238 18.6972 17.9761ZM14.1384 13.766C13.7086 13.6188 13.4362 13.463 13.2741 13.3032C13.1166 13.1415 13.0073 12.9595 13 12.5855C13 12.2436 13.1758 11.8282 13.5993 11.5173C13.8142 11.3596 14.0956 11.2163 14.4982 11.1039C14.6448 11.0631 14.8169 11.0296 15 11V14C14.6812 13.9284 14.3843 13.8521 14.1384 13.766Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Coin;
