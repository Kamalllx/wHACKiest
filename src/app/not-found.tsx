'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #141425;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Castledown', sans-serif;
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  background: linear-gradient(135deg, #9CB1FC 0%, #E6B5F9 100%);
  color: #141425;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you&apos;re looking for doesn&apos;t exist.</Message>
      <HomeLink href="/">Go back home</HomeLink>
    </Container>
  );
}

