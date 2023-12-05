import React, { useState, useEffect } from 'react';
import API from 'services/API';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardLink } from './PostsStyled';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await API();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadGames();
  }, []);

  return (
      <Row xs={1} md={4} className="g-4 mt-4">
        {posts.map((el, index) => (
          <Col key={index} className="d-flex">
            <Card className="flex-fill">
              <img
                variant="top"
                src={el.main_image}
                alt={el.short_description}
              />
              <CardLink href={el.article_url} target="_blank">
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.short_description}</Card.Text>
                </Card.Body>
              </CardLink>
            </Card>
          </Col>
        ))}
      </Row>
  );
};

export default PostsList;
