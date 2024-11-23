import type { Language , TranslatePair} from '@ym-UI/locale'

export interface ConfigProviderProps {
    locale?: Language; // 语言
    extendsI18nMsg?: TranslatePair // 扩展语言包
}