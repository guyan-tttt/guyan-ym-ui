import { computed, getCurrentInstance, type ComputedRef } from "vue";

export  function useProp<T>(propName:string):ComputedRef<T> {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error("useProp must be used within a setup function");
    }
    return computed(() => (instance.proxy?.$props as any)?.[propName] as T)

}


export  default useProp