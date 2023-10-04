import { trigger,query,transition, style,group, animate, animateChild } from "@angular/animations";


let de = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],  { optional: true }),
    query(':enter', [
        style({ right: '-100%'})
      ]),
      query(':leave', [
        style({ right: '100%'})
      ]),
    group([
      query(':leave', [
        animate('280ms ease', style({ right: '100%'}))
      ], ),
      query(':enter', [
        animate('280ms ease', style({ right: '0%'}))
      ])
    ]),
  ];
  
let dwe = [
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ],  { optional: true }),
  query(':enter', [
      style({ top: '100%',opacity:'.5'})
    ]),
    query(':leave', [
      style({ top: '100%'})
    ]),
  group([
    query(':leave', [
      animate('280ms ease', style({ top: '-100%'}))
    ],  { optional: true }),
    query(':enter', [
      animate('280ms ease', style({ top: '0%'}))
    ])
  ]),
];

export const slider =
trigger('routeAnimations', [
    transition('* => abtBk', de ),
    transition('* => pro', de ),
    transition('* => gres', dwe ),
    transition('* => srch', dwe ),
    transition('* => rdbk', dwe ),
    
    
])
