import _ from 'lodash';

const root = document.querySelector('#root');
root.innerHTML = _.join(['Hello', 'webpack'], ' ');