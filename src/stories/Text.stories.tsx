import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import {
  PrimaryTextVerySmall,
  PrimaryTextSmall,
  PrimaryTextMedium,
  PrimaryTextLarge,
  SecondaryTextVerySmall,
  SecondaryTextSmall,
  SecondaryTextMedium,
  SecondaryTextLarge,
} from '../components/Text';
import StoryDecorator from '../../storybook/StoryDecorator';
import { colorOptions } from './options';
import { colors } from '@magnetis/astro-galaxy-tokens';

storiesOf('Primary Text', module)
  .add('Large', () => (
    <PrimaryTextLarge
      color={select('color', colorOptions, colors.moon900)}
      bold={boolean('bold', false)}
      semiBold={boolean('semiBold', false)}
    >
      The quick brown fox jumps over the lazy dog
    </PrimaryTextLarge>
  ))
  .add('Medium', () => (
    <PrimaryTextMedium
      color={select('color', colorOptions, colors.moon900)}
      bold={boolean('bold', false)}
      semiBold={boolean('semiBold', false)}
    >
      The quick brown fox jumps over the lazy dog
    </PrimaryTextMedium>
  ))
  .add('Small', () => (
    <PrimaryTextSmall
      color={select('color', colorOptions, colors.moon900)}
      bold={boolean('bold', false)}
      semiBold={boolean('semiBold', false)}
    >
      The quick brown fox jumps over the lazy dog
    </PrimaryTextSmall>
  ))
  .add('Very Small', () => (
    <PrimaryTextVerySmall
      color={select('color', colorOptions, colors.moon900)}
      bold={boolean('bold', false)}
      semiBold={boolean('semiBold', false)}
    >
      The quick brown fox jumps over the lazy dog
    </PrimaryTextVerySmall>
  ));

storiesOf('Secondary Text', module)
  .addDecorator(StoryDecorator)
  .addDecorator(withKnobs)
  .add('Large', () => (
    <SecondaryTextLarge color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
      The quick brown fox jumps over the lazy dog
    </SecondaryTextLarge>
  ))
  .add('Medium', () => (
    <SecondaryTextMedium color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
      The quick brown fox jumps over the lazy dog
    </SecondaryTextMedium>
  ))
  .add('Small', () => (
    <SecondaryTextSmall color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
      The quick brown fox jumps over the lazy dog
    </SecondaryTextSmall>
  ))
  .add('Very Small', () => (
    <SecondaryTextVerySmall color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
      The quick brown fox jumps over the lazy dog
    </SecondaryTextVerySmall>
  ));
