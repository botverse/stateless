import { LIST_PATH } from 'constants';

const redirectToProjects = (nextState, replace) => replace(LIST_PATH);

export default {
  onEnter: redirectToProjects,
};
