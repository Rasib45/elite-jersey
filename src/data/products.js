// Edit this file to change the product grid.
// `image`: paste the image link between the quotes (empty = placeholder shows).
export const products = [
  { id: 'vortex-home', name: "Vortex Home Kit '26", number: '10', type: 'Home', rating: '4.9', reviews: 612, price: 2650, badge: { label: 'BESTSELLER', tone: 'gold' }, image: '' },   // Slot 2
  { id: 'ember-away', name: "Ember Away Kit '26", number: '7', type: 'Away', rating: '4.8', reviews: 401, price: 2650, image: '' },                                               // Slot 3
  { id: 'heritage-98', name: "Heritage '98 Retro", number: '9', type: 'Retro', rating: '5.0', reviews: 188, price: 3450, badge: { label: 'RELAUNCH', tone: 'chalk' }, image: '' },    // Slot 4
  { id: 'onyx-training', name: 'Onyx Training Tee', number: '11', type: 'Training', rating: '4.7', reviews: 356, price: 1950, image: '' },                                         // Slot 5
  { id: 'apex-gk', name: 'Apex GK Jersey', number: '1', type: 'Goalkeeper', rating: '4.8', reviews: 97, price: 2890, image: '' },                                                  // Slot 6
  { id: 'blackout-third', name: 'Blackout Third Kit', number: '23', type: 'Third', rating: '4.9', reviews: 274, price: 3200, image: '' },                                         // Slot 7
]

export const formatPrice = (n) => `৳${n.toLocaleString('en-US')}`
