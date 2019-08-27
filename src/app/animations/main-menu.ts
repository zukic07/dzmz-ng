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
                animate('300ms', style({ left: '0%' })) 
            ]),
            query(':leave', [
                animate('300ms', style({ left: '-100%' }))
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
                animate('300ms', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('300ms', style({ left: '0%' })) 
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild())
    ])
])