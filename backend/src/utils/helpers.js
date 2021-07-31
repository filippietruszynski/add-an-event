export const isFunction = (data) =>
  data && {}.toString.call(data) === "[object Function]";
