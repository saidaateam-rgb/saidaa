import '@/index.css';

import { Analytics } from '@vercel/analytics/next';
import SiteShell from '@/components/layout/SiteShell';
import Providers from './providers';

export const metadata = {
    metadataBase: new URL('https://saidaa.kr'),
    title: 'SAIDAA | 자연과 사람을 연결하는 건축·연구 스튜디오',
    description: 'SAIDAA는 건축과 연구를 통해 사람과 자연을 다시 연결합니다. 현재 홈페이지 리뉴얼을 진행 중이며, 더 나은 모습으로 곧 찾아뵙겠습니다.',
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/logo-black.png',
    },
    openGraph: {
        type: 'website',
        title: 'SAIDAA | 자연과 사람을 연결하는 건축·연구 스튜디오',
        description: 'SAIDAA는 건축과 연구를 통해 사람과 자연을 다시 연결합니다. 현재 홈페이지 리뉴얼을 진행 중이며, 더 나은 모습으로 곧 찾아뵙겠습니다.',
        images: [
            {
                url: '/og-main-thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'SAIDAA 메인 페이지 썸네일',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SAIDAA | 자연과 사람을 연결하는 건축·연구 스튜디오',
        description: 'SAIDAA는 건축과 연구를 통해 사람과 자연을 다시 연결합니다. 현재 홈페이지 리뉴얼을 진행 중이며, 더 나은 모습으로 곧 찾아뵙겠습니다.',
        images: ['/og-main-thumbnail.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    <SiteShell>{children}</SiteShell>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
