import Side from '@/views/side'

export default [
    {
        component: Side,
        children: [
            {
                path: '/',
                name: 'home',
                meta: {
                    title: "Home"
                },
                component: () => import('@/views/home')
            },
            {
                path: '/organizational-structure',
                name: 'apps.organizational-structure',
                meta: {
                    title: "Struktur Organisasi"
                },
                component: () => import('@/views/profile/organizational-structure')
            }
        ]
    }
]