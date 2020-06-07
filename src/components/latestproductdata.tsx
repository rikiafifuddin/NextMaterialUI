import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default [
  {
    id: uuidv4(),
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuidv4(),
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuidv4(),
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuidv4(),
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuidv4(),
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];
