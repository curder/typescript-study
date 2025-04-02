// 构造签名
class Person {}

interface PersonConstructor {
  // 构造签名
  new (): Person;
}

function factory(fn: PersonConstructor) {
  const f = new fn();

  console.log(typeof f);

  return f;
}

factory(Person);
