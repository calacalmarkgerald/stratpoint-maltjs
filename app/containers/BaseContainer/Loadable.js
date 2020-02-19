/**
 *
 * Asynchronously loads the component for BaseContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
