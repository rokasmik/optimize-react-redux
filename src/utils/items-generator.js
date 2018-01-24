import uuid from 'uuid/v1'


const randomNames = ['plastic fork', 'rug', 'bottle', 'table', 'keys', 'seat belt', 'fake flowers', 'grid paper', 'brocolli', 'radio', 'flag', 'socks', 'bananas', 'chair', 'fridge', 'monitor', 'thread', 'rubber band', 'sidewalk', 'knife', 'outlet', 'headphones', 'ipod', 'mirror', 'greeting card', 'puddle', 'key chain', 'hair brush', 'soy sauce packet', 'drill press', 'ring', 'mouse pad', 'door', 'lamp shade', 'paper', 'apple', 'sofa', 'shovel', 'mop', 'bracelet', 'soap', 'rusty nail', 'lamp', 'car', 'bottle cap', 'zipper', 'leg warmers', 'tree', 'purse', 'slipper', 'sharpie', 'street lights', 'model car', 'canvas', 'bag', 'truck', 'deodorant', 'clock', 'pants', 'drawer', 'camera', 'chocolate', 'bread', 'watch', 'coasters', 'magnet', 'stop sign', 'speakers', 'video games', 'flowers', 'clamp', 'ice cube tray', 'towel', 'air freshener', 'carrots', 'sailboat', 'spring', 'wallet', 'conditioner', 'sketch pad', 'pool stick', 'paint brush', 'cup', 'phone', 'book', 'tooth picks', 'scotch tape', 'house', 'CD', 'lip gloss', 'buckel', 'clay pot', 'needle', 'glass', 'twezzers', 'chalk', 'newspaper', 'USB drive', 'picture frame', 'bookmark', 'conditioner', 'bed', 'candy wrapper', 'rubber duck', 'clamp', 'remote', 'chair', 'model car', 'spoon', 'twezzers', 'bracelet', 'tooth picks', 'lamp', 'rubber band', 'socks', 'slipper', 'cinder block', 'paper', 'nail clippers', 'water bottle', 'bowl', 'white out', 'sticky note', 'pool stick', 'picture frame', 'mop', 'sketch pad', 'toothpaste', 'greeting card', 'sandal', 'clothes', 'desk', 'speakers', 'magnet', 'hair brush', 'cat', 'shoe lace', 'USB drive', 'window', 'clock', 'doll', 'brocolli', 'blouse', 'twister', 'sofa', 'nail file', 'stockings', 'tree', 'plastic fork', 'sharpie', 'tissue box', 'paint brush', 'keys', 'glow stick', 'sailboat', 'screw', 'ipod', 'charger', 'deodorant', 'apple', 'shirt', 'fork', 'couch', 'ring', 'purse', 'food', 'helmet', 'glass', 'bow', 'shovel', 'toilet', 'bottle', 'credit card', 'mouse pad', 'newspaper', 'button', 'tomato', 'teddies', 'drawer', 'CD', 'shawl', 'bookmark', 'stop sign', 'pillow', 'candle', 'mirror', 'pencil', 'camera', 'fake flowers', 'sun glasses', 'piano', 'radio', 'face wash', 'perfume', 'video games', 'lotion', 'thermostat', 'chocolate', 'beef', 'door']

export const generateItems = count => {

  const names = count <= randomNames.length ?
    randomNames.slice(0, count) :
    new Array(count).fill().map((_, i) => randomNames[i % randomNames.length])

  return names
    .map(name => ({
      name,
      count: Math.round(Math.random() * 10),
      hidden: false
    }))
}
