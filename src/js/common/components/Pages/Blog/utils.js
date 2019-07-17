export const getAbout = (htmlStr, num) => {
  let replaced = htmlStr.replace(/<\/?[a-zA-Z]+>/g, '');
  if (replaced.length > num) {
    replaced = replaced.substr(0, num) + '....';
  }
  return replaced;
}