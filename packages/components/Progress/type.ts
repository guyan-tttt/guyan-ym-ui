export interface ProgressProps {
    percentage: number;
    width?: number | string;
    color?: string
    status?: 'success' | 'primary' | 'warning' | 'danger';
    showText?: boolean;
    format?: (percentage: number) => string;
    textInside?: boolean
    strokeWidth?: number
}