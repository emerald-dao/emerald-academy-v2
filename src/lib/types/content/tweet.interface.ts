import type { Overview } from './content-overview.interface';

export interface TweetOverview extends Overview {
    link: string;
    authorUsername: string;
}