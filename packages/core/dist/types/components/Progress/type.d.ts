export type ProgressStatus = 'success' | 'primary' | 'warning' | 'danger';
export interface ProgressProps {
    percentage: number;
    width?: number | string;
    color?: string;
    status?: ProgressStatus;
    showText?: boolean;
    format?: (percentage: number) => string;
    textInside?: boolean;
    strokeWidth?: number;
    striped?: boolean;
    stripedFlow?: boolean;
    duration?: number;
}
