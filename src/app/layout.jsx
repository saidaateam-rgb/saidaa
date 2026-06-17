import '@/index.css';

import { Analytics } from '@vercel/analytics/next';
import SiteShell from '@/components/layout/SiteShell';
import Providers from './providers';

export const metadata = {
    metadataBase: new URL('https://saidaa.kr'),
    title: 'SAIDAA',
    description: 'SAIDAA 공식 홈페이지입니다. 현재 홈페이지 리뉴얼을 진행하고 있으며 더 나은 모습으로 곧 찾아뵙겠습니다.',
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/logo-black.png',
    },
    openGraph: {
        type: 'website',
        title: 'SAIDAA',
        description: 'SAIDAA 공식 홈페이지입니다. 현재 홈페이지 리뉴얼을 진행하고 있으며 더 나은 모습으로 곧 찾아뵙겠습니다.',
        images: ['/logo-black.png'],
    },
    twitter: {
        card: 'summary',
        title: 'SAIDAA',
        description: 'SAIDAA 공식 홈페이지입니다. 현재 홈페이지 리뉴얼을 진행하고 있으며 더 나은 모습으로 곧 찾아뵙겠습니다.',
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
