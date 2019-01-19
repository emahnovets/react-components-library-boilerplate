import * as React from 'react'

import { storiesOf } from '@storybook/react'

import './index.scss';


storiesOf('Welcome', module)
  .add('Readme.md', () => (
    <div className="welcome-read-me">
      <h1>React Components Library Boilerplate</h1>
      <h3>Simple boilerplate for easy creation of own react components library.</h3>

      <h2>Features 🎉</h2>

      <ul>
        <li>✅ Typescript</li>
        <li>✅ TSLint & Prettier (with airbnb config)</li>
        <li>✅ Jest for testing (Enzyme + jest-image-snapshot)</li>
        <li>✅ Webpack 4</li>
        <li>✅ Storybook for components demo</li>
        <li>✅ CSS Modules (SCSS supported)</li>
        <li>✅ Example component</li>
      </ul>
    </div>
  ));
