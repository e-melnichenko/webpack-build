export const print = async () => {
  const { default: _ } = await import('lodash');
  console.log(_.join(['print', 'me']));
}