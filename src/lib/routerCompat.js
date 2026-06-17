'use client';

import NextLink from 'next/link';
import { useParams as useNextParams, usePathname } from 'next/navigation';

export function Link({ to, href, children, ...props }) {
    const resolvedHref = href ?? to ?? '#';
    return (
        <NextLink href={resolvedHref} {...props}>
            {children}
        </NextLink>
    );
}

export function useLocation() {
    const pathname = usePathname() || '/';
    return { pathname };
}

export function useParams() {
    return useNextParams();
}
