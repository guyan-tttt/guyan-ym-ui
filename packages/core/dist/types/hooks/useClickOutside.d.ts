import { Ref } from 'vue';

export default function useClickOutside(elementRef: Ref<HTMLElement | null>, callback: (e: MouseEvent) => void): void;
