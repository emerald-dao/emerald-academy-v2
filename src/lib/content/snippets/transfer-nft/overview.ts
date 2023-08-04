import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
    title: 'Transfer an NFT in Cadence',
    contentType: ContentTypeEnum.Snippet,
    author: {
        name: 'Jacob Tucker',
        socialMediaUrl: 'https://twitter.com/jacobmtucker',
        avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
        isVerified: true,
        walletAddress: '0x99bd48c8036e2876'
    },
    excerpt: 'Transfer a NonFungibleToken-implementing NFT in Cadence.',
    metadata: {
        subjects: [SubjectsEnum.Cadence]
    },
    codeLink: 'https://run.ecdao.org?code=aW1wb3J0IE5vbkZ1bmdpYmxlVG9rZW4gZnJvbSAweDFkN2U1N2FhNTU4MTc0NDgKaW1wb3J0IEF2YXRhYWFycyBmcm9tIDB4Y2I5YTgxMjczN2JiYzY3OQoKLy8gVGhlIHBlcnNvbiB0cmFzbmZlcnJpbmcgdGhlIE5GVCBpcyB0aGUgb25lIHdobyBzaWducyB0aGlzCgp0cmFuc2FjdGlvbihyZWNpcGllbnQ6IEFkZHJlc3MsIG5mdElEOiBVSW50NjQpIHsKCiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIHdpdGhkcmF3ZXIncyBjb2xsZWN0aW9uCiAgICBsZXQgd2l0aGRyYXdSZWY6ICZBdmF0YWFhcnMuQ29sbGVjdGlvbgoKICAgIC8vIFJlZmVyZW5jZSBvZiB0aGUgY29sbGVjdGlvbiB0byBkZXBvc2l0IHRoZSBORlQgdG8KICAgIGxldCBkZXBvc2l0UmVmOiAmQXZhdGFhYXJzLkNvbGxlY3Rpb257Tm9uRnVuZ2libGVUb2tlbi5SZWNlaXZlcn0KCiAgICBwcmVwYXJlKHNpZ25lcjogQXV0aEFjY291bnQpIHsKICAgICAgICAvLyBib3Jyb3cgYSByZWZlcmVuY2UgdG8gdGhlIHNpZ25lcidzIE5GVCBjb2xsZWN0aW9uCiAgICAgICAgc2VsZi53aXRoZHJhd1JlZiA9IHNpZ25lci5ib3Jyb3c8JkF2YXRhYWFycy5Db2xsZWN0aW9uPihmcm9tOiBBdmF0YWFhcnMuQ29sbGVjdGlvblN0b3JhZ2VQYXRoKQogICAgICAgICAgICAgICAgPz8gcGFuaWMoIkFjY291bnQgZG9lcyBub3Qgc3RvcmUgYW4gb2JqZWN0IGF0IHRoZSBzcGVjaWZpZWQgcGF0aCIpCgogICAgICAgIHNlbGYuZGVwb3NpdFJlZiA9IGdldEFjY291bnQocmVjaXBpZW50KS5nZXRDYXBhYmlsaXR5KEF2YXRhYWFycy5Db2xsZWN0aW9uUHVibGljUGF0aCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib3Jyb3c8JkF2YXRhYWFycy5Db2xsZWN0aW9ue05vbkZ1bmdpYmxlVG9rZW4uQ29sbGVjdGlvblB1YmxpY30%2BKCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgID8%2FIHBhbmljKCJDb3VsZCBub3QgYm9ycm93IGEgcmVmZXJlbmNlIHRvIHRoZSByZWNlaXZlcidzIGNvbGxlY3Rpb24iKQoKICAgIH0KCiAgICBleGVjdXRlIHsKICAgICAgICAvLyB3aXRoZHJhdyB0aGUgTkZUIGZyb20gdGhlIG93bmVyJ3MgY29sbGVjdGlvbgogICAgICAgIGxldCBuZnQgPC0gc2VsZi53aXRoZHJhd1JlZi53aXRoZHJhdyh3aXRoZHJhd0lEOiBuZnRJRCkKCiAgICAgICAgLy8gRGVwb3NpdCB0aGUgTkZUIGluIHRoZSByZWNpcGllbnQncyBjb2xsZWN0aW9uCiAgICAgICAgc2VsZi5kZXBvc2l0UmVmLmRlcG9zaXQodG9rZW46IDwtbmZ0KQogICAgfQp9&network=mainnet&args=e30%3D'
};
