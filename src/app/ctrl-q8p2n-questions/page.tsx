'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles';

interface Question {
  _id: string;
  question: string;
  askedBy: string;
  answer: string | null;
  isAnswered: boolean;
  createdAt: string;
  answeredAt: string | null;
}

const Container = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 40px;
  font-family: 'Satoshi', sans-serif;
`;

const Header = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

const PinForm = styled.form`
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: #1a1a1a;
  border-radius: 12px;
`;

const PinTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: ${theme.colors.primary.blue};
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SmallButton = styled.button<{ $variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: 8px 16px;
  background: ${({ $variant }) => 
    $variant === 'danger' ? '#dc3545' : 
    $variant === 'secondary' ? 'transparent' : 
    theme.colors.primary.blue};
  border: ${({ $variant }) => 
    $variant === 'secondary' ? '1px solid #3a3a3a' : 'none'};
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
`;

const Tab = styled.button<{ $active?: boolean }>`
  padding: 12px 24px;
  background: ${({ $active }) => $active ? theme.colors.primary.blue : '#1a1a1a'};
  border: 1px solid ${({ $active }) => $active ? theme.colors.primary.blue : '#3a3a3a'};
  border-radius: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.primary.blue};
  }
`;

const QuestionCard = styled.div<{ $isAnswered?: boolean }>`
  background: #1a1a1a;
  border: 1px solid ${({ $isAnswered }) => $isAnswered ? 'rgba(40, 167, 69, 0.3)' : 'rgba(255, 193, 7, 0.3)'};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const QuestionText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
`;

const QuestionMeta = styled.div`
  color: #666;
  font-size: 13px;
  margin-bottom: 16px;
`;

const Badge = styled.span<{ $type: 'pending' | 'answered' }>`
  display: inline-block;
  padding: 4px 12px;
  background: ${({ $type }) => 
    $type === 'answered' ? 'rgba(40, 167, 69, 0.2)' : 'rgba(255, 193, 7, 0.2)'};
  border: 1px solid ${({ $type }) => 
    $type === 'answered' ? 'rgba(40, 167, 69, 0.5)' : 'rgba(255, 193, 7, 0.5)'};
  border-radius: 20px;
  font-size: 12px;
  color: ${({ $type }) => $type === 'answered' ? '#28a745' : '#ffc107'};
  margin-left: 12px;
`;

const AnswerForm = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #2a2a2a;
`;

const ExistingAnswer = styled.div`
  background: rgba(40, 167, 69, 0.1);
  border-left: 3px solid #28a745;
  padding: 16px;
  border-radius: 0 8px 8px 0;
  margin-top: 16px;
`;

const AnswerLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #28a745;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AnswerText = styled.p`
  color: #ccc;
  font-size: 15px;
  margin-top: 8px;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const NoQuestions = styled.div`
  text-align: center;
  padding: 60px;
  color: #666;
  font-size: 16px;
`;

const Error = styled.div`
  color: #dc3545;
  padding: 12px;
  background: rgba(220, 53, 69, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Success = styled.div`
  color: #28a745;
  padding: 12px;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: #1a1a1a;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.primary.blue};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function QAAdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filter, setFilter] = useState<'pending' | 'answered' | 'all'>('pending');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (authenticated) {
      fetchQuestions();
    }
  }, [authenticated]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredPin(pin);
    setAuthenticated(true);
  };

  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      if (data.success) {
        setQuestions(data.data);
      }
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  const handleAnswer = async (id: string) => {
    if (!answerText.trim()) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/questions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          pin: storedPin,
          answer: answerText,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Answer submitted successfully!');
        setEditingId(null);
        setAnswerText('');
        fetchQuestions();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to submit answer');
        if (data.error === 'Invalid admin pin') {
          setAuthenticated(false);
        }
      }
    } catch (err) {
      setError('Failed to submit answer');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this question?')) return;

    try {
      const res = await fetch(`/api/questions?id=${id}&pin=${storedPin}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Question deleted');
        fetchQuestions();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to delete');
        if (data.error === 'Invalid admin pin') {
          setAuthenticated(false);
        }
      }
    } catch (err) {
      setError('Failed to delete question');
      console.error(err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const filteredQuestions = questions.filter((q) => {
    if (filter === 'pending') return !q.isAnswered;
    if (filter === 'answered') return q.isAnswered;
    return true;
  });

  const pendingCount = questions.filter(q => !q.isAnswered).length;
  const answeredCount = questions.filter(q => q.isAnswered).length;

  if (!authenticated) {
    return (
      <Container>
        <PinForm onSubmit={handlePinSubmit}>
          <PinTitle>🔐 Q&A Admin Access</PinTitle>
          <Input
            type="password"
            placeholder="Enter Admin PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            autoFocus
          />
          <Button type="submit">Enter</Button>
        </PinForm>
      </Container>
    );
  }

  return (
    <Container>
      <Header>❓ Q&A Admin Panel</Header>
      <Subtitle>Answer questions from participants</Subtitle>

      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}

      <Stats>
        <StatCard>
          <StatNumber>{questions.length}</StatNumber>
          <StatLabel>Total</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{pendingCount}</StatNumber>
          <StatLabel>Pending</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{answeredCount}</StatNumber>
          <StatLabel>Answered</StatLabel>
        </StatCard>
      </Stats>

      <TabContainer>
        <Tab $active={filter === 'pending'} onClick={() => setFilter('pending')}>
          Pending ({pendingCount})
        </Tab>
        <Tab $active={filter === 'answered'} onClick={() => setFilter('answered')}>
          Answered ({answeredCount})
        </Tab>
        <Tab $active={filter === 'all'} onClick={() => setFilter('all')}>
          All ({questions.length})
        </Tab>
      </TabContainer>

      {filteredQuestions.length === 0 ? (
        <NoQuestions>
          {filter === 'pending' 
            ? 'No pending questions! 🎉' 
            : filter === 'answered'
            ? 'No answered questions yet.'
            : 'No questions yet.'}
        </NoQuestions>
      ) : (
        filteredQuestions.map((q) => (
          <QuestionCard key={q._id} $isAnswered={q.isAnswered}>
            <QuestionHeader>
              <QuestionText>
                {q.question}
                <Badge $type={q.isAnswered ? 'answered' : 'pending'}>
                  {q.isAnswered ? 'Answered' : 'Pending'}
                </Badge>
              </QuestionText>
            </QuestionHeader>
            <QuestionMeta>
              Asked by {q.askedBy} • {formatDate(q.createdAt)}
            </QuestionMeta>

            {q.isAnswered && q.answer && (
              <ExistingAnswer>
                <AnswerLabel>Current Answer</AnswerLabel>
                <AnswerText>{q.answer}</AnswerText>
              </ExistingAnswer>
            )}

            {editingId === q._id ? (
              <AnswerForm>
                <TextArea
                  placeholder="Type your answer here..."
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  autoFocus
                />
                <ActionButtons>
                  <SmallButton
                    onClick={() => handleAnswer(q._id)}
                    disabled={submitting || !answerText.trim()}
                  >
                    {submitting ? 'Submitting...' : 'Submit Answer'}
                  </SmallButton>
                  <SmallButton
                    $variant="secondary"
                    onClick={() => {
                      setEditingId(null);
                      setAnswerText('');
                    }}
                  >
                    Cancel
                  </SmallButton>
                </ActionButtons>
              </AnswerForm>
            ) : (
              <ActionButtons>
                <SmallButton
                  onClick={() => {
                    setEditingId(q._id);
                    setAnswerText(q.answer || '');
                  }}
                >
                  {q.isAnswered ? 'Edit Answer' : 'Answer'}
                </SmallButton>
                <SmallButton $variant="danger" onClick={() => handleDelete(q._id)}>
                  Delete
                </SmallButton>
              </ActionButtons>
            )}
          </QuestionCard>
        ))
      )}
    </Container>
  );
}
