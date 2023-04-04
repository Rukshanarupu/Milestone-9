import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const Dashboard = () => {
    const marksArray = [
    {
      id: 1,
      name: "Student 1",
      physics: 75,
      chemistry: 85,
      math: 90
    },
    {
      id: 2,
      name: "Student 2",
      physics: 80,
      chemistry: 70,
      math: 95
    },
    {
      id: 3,
      name: "Student 3",
      physics: 90,
      chemistry: 80,
      math: 75
    },
    {
      id: 4,
      name: "Student 4",
      physics: 65,
      chemistry: 75,
      math: 85
    },
    {
      id: 5,
      name: "Student 5",
      physics: 70,
      chemistry: 90,
      math: 80
    },
    {
      id: 6,
      name: "Student 6",
      physics: 85,
      chemistry: 65,
      math: 70
    },
    {
      id: 7,
      name: "Student 7",
      physics: 80,
      chemistry: 90,
      math: 85
    },
    {
      id: 8,
      name: "Student 8",
      physics: 75,
      chemistry: 85,
      math: 90
    },
    {
      id: 9,
      name: "Student 9",
      physics: 90,
      chemistry: 70,
      math: 80
    },
    {
      id: 10,
      name: "Student 10",
      physics: 70,
      chemistry: 75,
      math: 95
    },
    {
      id: 11,
      name: "Student 11",
      physics: 80,
      chemistry: 85,
      math: 65
    },
    {
      id: 12,
      name: "Student 12",
      physics: 75,
      chemistry: 90,
      math: 70
    }
  ];
//   console.log(marksArray)
    return (
        <div className='my-10'>
            <LineChart
                width={700}
                height={300}
                data={marksArray}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                type="monotone"
                dataKey="chemistry"
                stroke="#8884d8"
                />
                <Line 
                type="monotone" 
                dataKey="physics" 
                stroke="#82ca9d" />
                <Line 
                type="monotone" 
                dataKey="math" 
                stroke="red" />

            </LineChart>
        </div>
    );
};

export default Dashboard;