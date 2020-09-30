module.exports = (games, userId) => {
  return games.map(game => {
    const isTeamA = game.teamA.filter(player => player._id == userId);
    const isTeamB = game.teamB.filter(player => player._id == userId);

    if (!isTeamA[0] && !isTeamB[0]) return 'NA';

    const userTeam = isTeamA[0] ? 'a' : 'b';

    const results = game.result.split('-');

    if (results[0] === results[1]) {
      return 'T';
    }

    const teamAResult = parseInt(results[0]);
    const teamBResult = parseInt(results[1]);

    const teamAWins = teamAResult > teamBResult ? true : false;

    if (userTeam === 'a' && teamAWins) return 'W';

    if (userTeam === 'b' && !teamAWins) return 'W';

    return 'L';
  });
};
