/** @format */

export const categories = ['Oranges', 'Bananas', 'Pineapple', 'Apple', 'Cherry']

export const featuredFruits = [
  {
    id: 1,
    name: 'Australian Orange',
    price: '2.30',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'orange',
    image: require('../assets/images/orange.png'),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`
  },
  {
    id: 2,
    name: 'Flesh Nectari',
    price: '2.40',
    stars: 3,
    desc: 'Sweet and juicy',
    shadow: 'red',
    image: require('../assets/images/peach.png'),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`
  },

  {
    id: 3,
    name: 'Black Grapes',
    price: '4.30',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'purple',
    image: require('../assets/images/grapes.png'),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`
  },

  {
    id: 4,
    name: 'Red Grapefruit',
    price: '1.90',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'red',
    image: require('../assets/images/redOrange.png'),
    color: (opacity) => `rgba(255, 163, 120, ${opacity})`
  },
  {
    id: 5,
    name: 'Green Apple',
    price: '1.50',
    stars: 4,
    desc: 'Sweet and juicy',
    shadow: 'green',
    image: require('../assets/images/greenApple.png'),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`
  }
]

export const cartItems = [
  {
    id: 1,
    name: 'Australian Orange',
    price: '12.30',
    qty: 4,
    desc: 'Sweet and juicy',
    shadow: 'orange',
    image: require('../assets/images/orange.png'),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`
  },
  {
    id: 2,
    name: 'Flesh Nectari',
    shadow: 'red',
    price: '12',
    qty: 3,
    desc: 'Sweet and juicy',
    image: require('../assets/images/peach.png'),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`
  },

  {
    id: 3,
    name: 'Black Grapes',
    price: '40',
    qty: 2,
    desc: 'Sweet and juicy',
    shadow: 'purple',
    image: require('../assets/images/grapes.png'),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`
  },
  {
    id: 4,
    name: 'Green Apple',
    price: '10.5',
    qty: 2,
    desc: 'Sweet and juicy',
    shadow: 'green',
    image: require('../assets/images/greenApple.png'),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`
  }
]
