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
            }
        ]
    }
]