import type { Directive, DirectiveBinding, MaybeRef } from "vue";
import type { LoadingOptions } from "./type";

import { Loading, type LoadingInstance } from './methods'


const INSTANCE_KEY = Symbol('loading')

export interface ElementLoading extends HTMLElement {
    [INSTANCE_KEY]?: {
        instance: LoadingInstance,
        options: LoadingOptions
    }
}
export const vLoading:Directive<ElementLoading,boolean> = {
    mounted(el,binding) {
        if(binding.value) createInstance(el,binding)
    },
    updated(el,binding) {
        if(binding.value === binding.oldValue) return 
        if(binding.value && !binding.oldValue) {
            createInstance(el,binding)
            return
        }
        el[INSTANCE_KEY]?.instance.close()
    },
    unmounted(el) {
        el[INSTANCE_KEY]?.instance.close()
        el[INSTANCE_KEY] = void 0
    }
}
function createInstance(
    el: ElementLoading,
    binding: DirectiveBinding<boolean>,

) {
        const getProp = <K extends keyof LoadingOptions>(name: K) => {
            return el.getAttribute(`ym-loading-${name}`) as MaybeRef<string>
        } 

        const getModifier = <K extends keyof LoadingOptions>(name: K) => {
            return binding.modifiers[name]
        }

        const fullscreen = getModifier("fullscreen")

        const options: LoadingOptions = {
            text: getProp("text"),
            spinner: getProp("spinner"),
            background: getProp("background"),
            target: fullscreen ? void 0 : el,
            body: getModifier("body"),
            lock: getModifier("lock"),
            fullscreen,
          };
        el[INSTANCE_KEY] = {
            instance: Loading(options),
            options
        }
}

