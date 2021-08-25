import { v4 } from 'uuid';

export const Data = () => {
  return [
    {
      id: v4(),
      name: 'Mac Book',
      image:
        'https://images.pexels.com/photos/577560/pexels-photo-577560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1400,
    },
    {
      id: v4(),
      name: 'Old Car',
      image:
        'https://images.pexels.com/photos/590481/pexels-photo-590481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 2400,
    },
    {
      id: v4(),
      name: 'M Shoes',
      image:
        'https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 10,
    },
  ];
};
