export interface ActivitySearchParams {
  term: string;
  filters: {
    songName?: string;
    artist?: string;
    streamCount?: number;
    streamDate?: Date;
    userId?: string;
  }
}