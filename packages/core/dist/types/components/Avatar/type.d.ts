export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export interface AvatarProps {
    src?: string;
    icon?: string;
    size?: number | AvatarSize;
    shape?: 'circle' | 'square';
    alt?: string;
    fit?: AvatarFit;
}
export interface AvatarEmits {
    (e: 'error', err: Event): void;
}
