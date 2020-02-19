/*
 * Weather Messages
 *
 * This contains all the text for the Weather component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Weather';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Weather component!',
  },
});
