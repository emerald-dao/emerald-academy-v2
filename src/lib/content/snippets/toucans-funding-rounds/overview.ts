import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
    title: 'Toucans Funding Rounds',
    contentType: ContentTypeEnum.Snippet,
    author: {
        name: 'Diego Fornalha',
        socialMediaUrl: 'https://twitter.com/diegofornalha',
        avatarUrl: '/new-avatar.png',
        isVerified: true,
        walletAddress: '0x7bf07d719dcb8480'
    },
    excerpt: 'Toucans is a decentralized funding platform for open source projects.',
    metadata: {
        subjects: [SubjectsEnum.Cadence]
    },
    codeLink: 'https://run.ecdao.org?code=aW1wb3J0IFRvdWNhbnMgZnJvbSAweDU3N2EzYzQwOWM1ZGNiNWUKCnRyYW5zYWN0aW9uKAogcHJvamVjdElkOiBTdHJpbmcsCiBjeWNsZUluZGV4OiBVSW50NjQsCiByZXNlcnZlUmF0ZTogVUZpeDY0LAogaXNzdWFuY2VSYXRlOiBVRml4NjQKKSB7CgogbGV0IFByb2plY3Q6ICZUb3VjYW5zLlByb2plY3QKICBwcmVwYXJlKHNpZ25lcjogQXV0aEFjY291bnQpIHsKICAgbGV0IGNvbGxlY3Rpb24gPSBzaWduZXIuYm9ycm93PCZUb3VjYW5zLkNvbGxlY3Rpb24%2BKGZyb206IFRvdWNhbnMuQ29sbGVjdGlvblN0b3JhZ2VQYXRoKQogICAgICAgICAgICAgICAgICAgPz8gcGFuaWMoIkEgREFPVHJlYXN1cnkgZG9lc24ndCBleGlzdCBoZXJlLiIpCiAgIHNlbGYuUHJvamVjdCA9IGNvbGxlY3Rpb24uYm9ycm93UHJvamVjdChwcm9qZWN0SWQ6IHByb2plY3RJZCkgPz8gcGFuaWMoIlByb2plY3QgZG9lcyBub3QgZXhpc3QuIikKIH0KCiBleGVjdXRlIHsKICAgbGV0IGNmYzogVG91Y2Fucy5GdW5kaW5nQ3ljbGVEZXRhaWxzID0gc2VsZi5Qcm9qZWN0LmdldEZ1bmRpbmdDeWNsZShjeWNsZUluZGV4OiBjeWNsZUluZGV4KS5kZXRhaWxzCiAgIGxldCBkZXRhaWxzOiBUb3VjYW5zLkZ1bmRpbmdDeWNsZURldGFpbHMgPSBUb3VjYW5zLkZ1bmRpbmdDeWNsZURldGFpbHMoCiAgICAgY3ljbGVJZDogY2ZjLmN5Y2xlSWQsCiAgICAgZnVuZGluZ1RhcmdldDogY2ZjLmZ1bmRpbmdUYXJnZXQsICAvLyB1bmNoYW5nZWQKICAgICBpc3N1YW5jZVJhdGU6IGlzc3VhbmNlUmF0ZSwKICAgICByZXNlcnZlUmF0ZTogcmVzZXJ2ZVJhdGUsCiAgICAgdGltZWZyYW1lOiBUb3VjYW5zLkN5Y2xlVGltZUZyYW1lKGNmYy50aW1lZnJhbWUuc3RhcnRUaW1lLCBjZmMudGltZWZyYW1lLmVuZFRpbWUpLCAgLy8gdW5jaGFuZ2VkCiAgICAgcGF5b3V0czogY2ZjLnBheW91dHMsCiAgICAgYWxsb3dPdmVyZmxvdzogY2ZjLmFsbG93T3ZlcmZsb3csCiAgICAgYWxsb3dlZEFkZHJlc3NlczogY2ZjLmFsbG93ZWRBZGRyZXNzZXMsCiAgICAgY2F0YWxvZ0NvbGxlY3Rpb25JZGVudGlmaWVyOiBjZmMuY2F0YWxvZ0NvbGxlY3Rpb25JZGVudGlmaWVyLAogICAgIGNmYy5leHRyYQogICApCiAgIHNlbGYuUHJvamVjdC5lZGl0VXBjb21pbmdDeWNsZShjeWNsZUluZGV4OiBjeWNsZUluZGV4LCBkZXRhaWxzOiBkZXRhaWxzKQogfQp9&network=mainnet&args=e30%3D'
};
