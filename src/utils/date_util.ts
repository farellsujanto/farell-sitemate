import { format } from 'date-fns';

export function formatDate(date: string): string {
    if (!date) {
        return '';
    }
    return format(new Date(date), 'dd/MM/yyyy');
}
