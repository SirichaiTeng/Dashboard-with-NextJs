'use client'
import axios from 'axios'
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function DashboardList() {
    const [state, setState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://66d337b0184dce1713cfa144.mockapi.io/Dashboard`);
                if (result.status == 200) {
                    setState(result.data);
                }
                console.log(state);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {state.map((item, index) => {
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={state.avatar} />
                        <Card.Body>
                            <Card.Title>{item.DashboardName}</Card.Title>
                            <Card.Text>
                                {item.Decription}
                            </Card.Text>
                            <Link href={`/dashboard/${item.id}`} passHref>
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}