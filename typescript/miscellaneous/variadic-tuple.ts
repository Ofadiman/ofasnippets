const concat = <FirstTuple extends readonly unknown[], SecondTuple extends readonly unknown[]>(
  firstTuple: FirstTuple,
  secondTuple: SecondTuple
): [...FirstTuple, ...SecondTuple] => {
  return [...firstTuple, ...secondTuple]
}
