import { MaybeRef } from 'vue';

export default function useEventListener(target: MaybeRef<EventTarget | HTMLElement | void>, event: string, handler: (e: Event) => any): void;
