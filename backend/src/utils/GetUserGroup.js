const Group = require('../models/Group');

module.exports = async (players) => {
  const groups = await Group.find();

  if (Array.isArray(players)) {
    return groups.filter(group => {
      if (everyElementIsInArray(players, group.players)) return group._id;
    })[0];
  } else {
    const player = await players;

    return groups.filter(group => {
      if (group.players.includes(player)) {
        console.log('a');
        return group._id
      }
    });
  }
}

function everyElementIsInArray(array1, array2) {
  return array1.every(element => array2.includes(element))
}
