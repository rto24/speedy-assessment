export interface ActivitySearchParams {
  term: string;
  filters: {
    songName?: string[];
    artist?: string[];
    userId?: string[];
  }
}