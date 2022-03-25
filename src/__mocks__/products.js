import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Obtenez des chapeaux les plus fous les uns que les autres ! On vous tirera notre chapeau si vous gagnez beaucoup de points.',
    media: '/static/images/products/cagoule kangourou.png',
    title: 'Chapeaux',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Trouver ici de nombreuses chaussures à échanger contre vos points ! Vous trouverez chaussure à votre pied, c\'est certain',
    media: '/static/images/products/boots.png',
    title: 'Chaussures',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Des fringues? Quel archaïsme... Ici, ce sont des effets qui sont proposés ! Espérons qu\'ils fassent l\'effet escompté.',
    media: '/static/images/products/halo.png',
    title: 'Effets',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Pour du style en toute situation, nous vous avons sélectionné des somptueux habits. Attention, l\'habit ne fait pas le moine.',
    media: '/static/images/products/gilet vert.png',
    title: 'Habits',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: ' Une ribambelle d\'accessoires vous attendent ! Il faut parfois se satisfaire de l\'accessoire.',
    media: '/static/images/products/wrapped gift.png',
    title: 'Accessoires',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Effectivement, on a même des sous-vêtements pour vous ! Vous pourrez enfin porter la culotte quelque part',
    media: '/static/images/products/slip.png',
    title: 'Sous-vêtements',
    totalDownloads: '835'
  }
];
