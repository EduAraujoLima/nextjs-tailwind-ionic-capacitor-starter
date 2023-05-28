import { parseISO, format } from 'date-fns';

export const convertGithubDate = (date: string) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'dd MMM yyyy');
}