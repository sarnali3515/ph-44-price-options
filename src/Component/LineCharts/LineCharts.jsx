import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const mathMarksData = [
        { id: 1, name: 'Alice', math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: 'Bob', math: 72, physics: 68, chemistry: 75 },
        { id: 3, name: 'Charlie', math: 90, physics: 85, chemistry: 88 },
        { id: 4, name: 'David', math: 65, physics: 60, chemistry: 70 },
        { id: 5, name: 'Eve', math: 78, physics: 72, chemistry: 76 },
        { id: 6, name: 'Frank', math: 88, physics: 82, chemistry: 85 },
        { id: 7, name: 'Grace', math: 70, physics: 65, chemistry: 72 },
        { id: 8, name: 'Hannah', math: 95, physics: 90, chemistry: 92 },
        { id: 9, name: 'Isaac', math: 82, physics: 78, chemistry: 80 },
        { id: 10, name: 'Jack', math: 79, physics: 74, chemistry: 78 }
    ];

    return (
        <div>
            <LineChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;