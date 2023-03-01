import { SubjectsEnum } from "$lib/types/content/metadata/subject.enum";

export const blogs: Blogs[] = [
    {
        image: '/Jacob.jpeg',
        title: 'Amethyst Codes',
        creator: 'Amethyst',
        excerpt: 'The best way to learn Cadence / Flow in video format.',
        link: 'https://amethystcodes.hashnode.dev/',
        subjects: [SubjectsEnum.Cadence]
    }
];

interface Blogs {
    image: string;
    title: string;
    creator: string;
    excerpt: string;
    link: string;
    subjects: SubjectsEnum[]
}
