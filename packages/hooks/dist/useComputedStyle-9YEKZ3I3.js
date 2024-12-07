function useComputedStyle(el, prop) {
  const rootStyle = getComputedStyle(el);
  return rootStyle.getPropertyValue(prop);
}
export {
  useComputedStyle as u
};
