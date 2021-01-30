
export type MovieImg = {
    src: string;
    alt: string;
}
export default interface Movie {
    id: number;
    title: string;
    distributor: string;
    year: number;
    amount: string;
    img: MovieImg;
    ranking: number
}