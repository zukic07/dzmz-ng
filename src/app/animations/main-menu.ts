import { trigger, style, query, group, animate, animateChild, transition } from '@angular/animations';

export const mainMenuToggle = 
trigger('routeAnimations', [
    transition('Home <=> News', [
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
                animate('500ms', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('500ms', style({ left: '0%' })) 
            ])
        ]),
        query(':enter', animateChild()),
        query(':leave', animateChild())
    ])
])