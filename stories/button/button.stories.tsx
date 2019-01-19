import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react'

import Button from '../../src/components/button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', withInfo()(() => (
    <Button 
      onClick={action('clicked')}
    >
      {text('Button Content', 'Say Hello')}
    </Button>
  )))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ), { info: { inline: true, header: false } });
