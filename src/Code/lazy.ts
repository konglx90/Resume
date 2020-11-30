// https://zhuanlan.zhihu.com/p/26535479

const range = function* (from: number, to: number) {
  for(let i = from; i < to; i++) {
    console.log('range\t', i);
    yield i;
  }
}

const map = function* (flow: any, transform: (...args: any[]) => any) {
  for(const data of flow) {
    console.log('map\t', data);
    yield(transform(data));
  }
}

const filter = function* (flow: any, condition: (...args: any[]) => boolean) {
  for(const data of flow) {
    console.log('filter\t', data);
    if (condition(data)) {
      yield data;
    }
  }
}

const stop = function*(flow: any, condition: (...args: any[]) => boolean) {
  for(const data of flow) {
    yield data;
    if (condition(data)) {
      break;
    }
  }
}

const take = function (flow: any, number: number) {
  let count = 0;
  const _filter = function () {
    count ++
    return count >= number;
  }
  return stop(flow, _filter);
}

class _Lazy {

  iterator: any

  constructor() {
    this.iterator = null;
  }

  range(from: number, to: number) {
    this.iterator = range(from, to);
    return this;
  }

  map(transform: (...args: any[]) => any) {
    this.iterator = map(this.iterator, transform);
    return this;
  }

  filter(condition: (...args: any[]) => boolean) {
    this.iterator = filter(this.iterator, condition);
    return this;
  }

  take(number: number) {
    this.iterator = take(this.iterator, number);
    return this;
  }

  [Symbol.iterator]() {
    return this.iterator;
  }

}

function lazy () {
  return new _Lazy();
}

const nums = lazy().range(0, 100).map(n => n * 10).filter(n => n % 3 === 0).take(2);

// @ts-ignore
for(let n of nums) {
  console.log('num:\t', n, '\n');
}

export {
  lazy
}