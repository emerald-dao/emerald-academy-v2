import type { Overview } from './content-overview.interface';

export interface BlogOverview extends Overview {
    link: string;
    author: string;
    image: string;
    authorLink: string;
}