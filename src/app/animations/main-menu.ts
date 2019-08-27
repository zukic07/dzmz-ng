import { trigger, style, query, group, animate, animateChild, transition } from '@angular/animations';

export const mainMenuToggle = 
trigger('routeAnimations', [
    transition('News => Home', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '100%' })
        ]),
        query(':leave', [
            style({ left: '0' })
        ]),
        group([
            query(':enter', [
                animate('200ms', style({ left: '0%' })) 
            ]),
            query(':leave', [
                animate('200ms', style({ left: '-100%' }))
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild())
    ])
    ,    
    transition('Home => News', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%' })
        ]),
        query(':leave', [
            style({ left: '0' })
        ]),
        group([
            query(':leave', [
                animate('200ms', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('200ms', style({ left: '0%' })) 
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild())
    ])

    // transition('Home => HomeSub', [
    //     query(':enter, :leave', [
    //         style({
    //             position: 'absolute',
    //             top: 0,
    //             left: 0,
    //             width: '100%'
    //         })
    //     ]),
    //     query(':enter', [
    //         style({ top: '100%' })
    //     ]),
    //     query(':leave', [
    //         style({ top: '0%' })
    //     ]),
    //     group([
    //         query(':enter', [
    //             animate('200ms', style({ top: '0%' })) 
    //         ]),
    //     ]),
    //     query(':enter', animateChild())
    // ]),
    // transition('HomeSub => Home', [
    //     query(':enter, :leave', [
    //         style({
    //             position: 'absolute',
    //             top: 0,
    //             left: 0,
    //             width: '100%'
    //         })
    //     ]),
    //     query(':enter', [
    //         style({ top: '0%' })
    //     ]),
    //     query(':leave', [
    //         style({ top: '0%' })
    //     ]),
    //     group([
    //         query(':leave', [
    //             animate('200ms', style({ top: '100%' })) 
    //         ]),
    //     ]),
    //     query(':leave', animateChild())
    // ])
])