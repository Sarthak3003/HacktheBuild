import React, { useEffect, useState } from 'react'
import { AreaChart, Label, Bar, BarChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Grid } from '@mui/material';

const tooltipStyle = {
    borderRadius: '0.25rem',
    background: 'white',
    color: 'black',
    padding: '1rem',
    boxShadow: '15px 15px 15px 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    textAlign: 'left'
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function Chart() {
    const [data, setData] = useState([])
    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "*");

        fetch("/weekly", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(error => console.log('error', error));
    }, [])
    console.log(data)

    const fields = data.map((result) => result.fields)
    console.log(fields);
    return (
        <>
            <h2>Weekly Statistics</h2>
            <ResponsiveContainer width={800} height={500}>
                <BarChart width={730} height={250} data={fields}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend verticalAlign='top' />
                    <XAxis dataKey="date" style={{ marginTop: '20%' }}>
                        <Label value="Date" offset={-4} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label value="Number of Students" angle={-90} />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="drowsy" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default Chart