
export default function useComputedStyle (el:HTMLElement, prop: string)  {
    const rootStyle  = getComputedStyle(el);
    return rootStyle.getPropertyValue(prop);
}