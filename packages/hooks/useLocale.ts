import { inject,  type Ref  } from "vue";
import { omit } from "lodash-es";
import { createI18n, i18nSymbol, type I18nInstance } from "vue3-i18n"
import type { Language } from "@ym-UI/locale";
import  Chinese from '@ym-UI/locale/lang/zh-cn'

// 中文
export function useLocale(localOverride?: Ref<Language>) {
    if(!localOverride) {
       return omit(<I18nInstance>inject(i18nSymbol,createI18n(
        {
            locale: Chinese.name,
            messages: {
                en: Chinese.el
            }
        }
    ),),"install")
    }
    return omit(
        createI18n({
            locale: localOverride.value.name,
            messages: {
                [localOverride.value.name]: localOverride.value.el
            }
        }),
        "install"
    )
}

export default useLocale
