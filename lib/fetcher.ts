import { Fetcher } from 'swr';

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

export default fetcher;
