import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function EyeClosed({
  id = 'EyeClosedIcon',
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
        d="M25.8243 12.7149C26.3789 11.9435 26.6912 11.3738 26.731 11.296C26.9584 10.8651 26.7938 10.3308 26.3613 10.1026C25.9313 9.87438 25.3961 10.0398 25.167 10.4706C25.1361 10.5299 21.9789 16.3586 16.5093 16.3692C10.7991 16.3692 7.65429 10.5317 7.62333 10.4733C7.3951 10.0416 6.86256 9.87615 6.42821 10.1017C5.99652 10.3291 5.83021 10.8625 6.05579 11.2951C6.09825 11.3765 6.43617 11.9983 7.04744 12.829L5.29237 14.4098C4.92967 14.7371 4.90048 15.2962 5.22691 15.6589C5.40117 15.8535 5.64267 15.9517 5.88417 15.9517C6.09471 15.9517 6.30702 15.8765 6.47598 15.7243L8.17444 14.1957C8.7981 14.8698 9.56594 15.566 10.4629 16.187L9.45448 18.4498C9.25633 18.8957 9.45625 19.4185 9.90298 19.6175C10.0198 19.6697 10.1418 19.6945 10.2613 19.6945C10.6009 19.6945 10.9238 19.499 11.0698 19.169L11.9942 17.0928C13.0602 17.6112 14.2756 17.9713 15.6264 18.0863V20.4305C15.6264 20.9188 16.0219 21.3151 16.5111 21.3151C16.9994 21.3151 17.3957 20.9188 17.3957 20.4305V18.0818C18.7368 17.9562 19.9416 17.5652 21.0014 17.0194L21.9453 19.1416C22.0912 19.4716 22.415 19.6662 22.7538 19.6662C22.8741 19.6662 22.9962 19.6423 23.1129 19.5892C23.5597 19.3911 23.7596 18.8683 23.5606 18.4224L22.5203 16.0853C23.381 15.459 24.1126 14.7619 24.7123 14.0949L26.5231 15.7243C26.693 15.8765 26.9044 15.9517 27.1149 15.9517C27.3564 15.9517 27.5979 15.8535 27.7722 15.6589C28.0986 15.2962 28.0694 14.7371 27.7068 14.4098L25.8243 12.7149Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EyeClosed;
