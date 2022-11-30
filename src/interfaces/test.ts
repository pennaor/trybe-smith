interface Person <Id = number, Name = string> {
  id: Id;
  name: Name;
}

const person: Person<string> = {
  id: '1',
  name: 'aluisio',
};

console.log(person);

type Funcx = <Type>(buc: Type) => Type;

const t: Funcx = (b) => {
  console.log('oi');
};

t<string>('oi');