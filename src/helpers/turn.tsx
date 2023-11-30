type Bet = { bet: number; dice: number };

export function validBet(currBet: Bet, prevBet: Bet): boolean {
  return (
    currBet.bet > prevBet.bet ||
    (currBet.dice >= prevBet.dice && currBet.bet >= prevBet.bet)
  );
}
