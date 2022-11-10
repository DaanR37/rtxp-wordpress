import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import "./posts.scss";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('http://rtxpwordpress.local/wp-json/wp/v2/posts/');
            if (!response.ok) {
                // oops! something went wrong
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }
        loadPosts();
    }, [])

    return (
        <Grid container spacing={2}>
            {posts.map((post, index) => (
                <Grid item xs={4} key={index}>
                    <Card className='card-container font-face-at'>
                        <CardContent>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                            <Typography
                                variant="body2"
                                component="p"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}