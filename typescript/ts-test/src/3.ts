interface Person {
    name: string;
    age?: number; // ?는 설정해도되고 안해도되고
}

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: '홍길동',
    age: 28
};

const expert: Developer = {
    name: '고길동',
    skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];
