interface Car {
    id: number;
    ymd: string;
    event_cd: string;
    event_nm: string;
}
const CarData = [
    {
        id: 1,
        ymd: '20220101',
        event_cd: '1',
        event_nm: '주유'
    },
    {
        id: 2,
        ymd: '20220202',
        event_cd: '1',
        event_nm: '주유'
    },
    {
        id: 3,
        ymd: '20220303',
        event_cd: '2',
        event_nm: '정비'
    }
];
export { CarData, Car };
