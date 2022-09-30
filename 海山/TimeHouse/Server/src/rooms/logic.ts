


export function LoopSystem(increment: number ,score: number) {
  setInterval(() => {
    score = score + increment
  },600)
}