import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import type { Color } from '@magnetis/astro-tokens';

import { getLineHeight } from './utils';
import { ButtonSize } from './types';
import { poppinsSemiBold } from '@tokens/fonts';
import { getFontSize } from '@tokens/utils';

interface BaseButtonTextProps extends TextProps {
  size?: ButtonSize;
  color: Color;
  children: string;
}

function BaseButtonText({ size = 'medium', color, children }: BaseButtonTextProps) {
  const textStyles = {
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(size),
    color,
  };
  return <Text style={[styles.text, textStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: poppinsSemiBold,
    alignItems: 'center',
  },
});

export default BaseButtonText;
