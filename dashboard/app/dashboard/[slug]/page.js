'use client'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DashboardList({ params }) {
    const [dashboardData, setDashboardData] = useState(null); // State to store fetched data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://66d337b0184dce1713cfa144.mockapi.io/Dashboard/${params.slug}`);
                if (result.status === 200) {
                    setDashboardData(result.data); // Set fetched data to state
                }
            } catch (error) {
                setError('Error fetching data'); // Set error message to state
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        }

        fetchData();
    }, [params.slug]); // Fetch data when params.slug changes

    if (loading) return <p>Loading... {params.slug}</p>; // Show loading message

    if (error) return <p>{error}</p>; // Show error message

    if (!dashboardData) return <p>No data found.</p>; // Handle case where no data is returned

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dashboardData.avatar} />
                <Card.Body>
                    <Card.Title>{dashboardData.DashboardName}</Card.Title>
                    <Card.Text>
                        {dashboardData.Decription}
                    </Card.Text>
                    <Link href={'../dashboard'} passHref>
                    <Button variant="danger">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}
