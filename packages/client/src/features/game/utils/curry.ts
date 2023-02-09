export function curry(func: (...fargs: any[]) => any) {
  return function curried(...args: any[]) {
    return args.length >= func.length
      ? func.apply(this, args)
      : function (...args2: any[]) {
          return curried.apply(this, args.concat(args2))
        }
  }
}
