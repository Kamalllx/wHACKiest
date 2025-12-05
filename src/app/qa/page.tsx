'use client';

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Layout } from '@/components/base';
import ContentWrapper from '@/components/base/Layout/ContentWrapper';
import PageWrapper from '@/components/base/Layout/PageWrapper';
import { Heading1, theme } from '@/styles';
import { mediaQueries } from '@/utils';

interface Question {
  _id: string;
  question: string;
  askedBy: string;
  answer: string | null;
  isAnswered: boolean;
  createdAt: string;
  answeredAt: string | null;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const QAWrapper = styled(PageWrapper)`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 100vh;

  ${mediaQueries.tablet} {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 50px;
`;

const Title = styled(Heading1)`
  color: white;
  margin-bottom: 16px;
  font-size: 48px;

  ${mediaQueries.tablet} {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Satoshi';
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  line-height: 1.6;
`;

const AskSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary.blue}, #8b5cf6, #ec4899);
  }

  ${mediaQueries.tablet} {
    padding: 24px;
  }
`;

const AskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
`;

const AskIcon = styled.span`
  font-size: 32px;
`;

const AskTitleContainer = styled.div``;

const AskTitle = styled.h2`
  font-family: 'Castledown';
  font-size: 28px;
  color: white;
  margin: 0 0 4px 0;
`;

const AskSubtitle = styled.p`
  font-family: 'Satoshi';
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Satoshi';
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-family: 'Satoshi';
  font-size: 16px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 4px ${theme.colors.primary.blue}20;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-family: 'Satoshi';
  font-size: 16px;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 4px ${theme.colors.primary.blue}20;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(135deg, ${theme.colors.primary.blue} 0%, #6366f1 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${theme.colors.primary.blue}40;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  margin-top: 24px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SuccessIcon = styled.span`
  font-size: 24px;
`;

const SuccessText = styled.p`
  color: #86efac;
  font-family: 'Satoshi';
  font-size: 15px;
  margin: 0;
`;

const QuestionsSection = styled.div`
  margin-top: 60px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Castledown';
  font-size: 32px;
  color: white;
  margin: 0;
`;

const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionCard = styled.div<{ $isAnswered?: boolean }>`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid ${({ $isAnswered }) => 
    $isAnswered ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 20px;
  padding: 28px;
  animation: ${fadeIn} 0.5s ease-out;
  transition: all 0.3s ease;
  position: relative;

  ${({ $isAnswered }) => $isAnswered && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #22c55e, #16a34a);
      border-radius: 3px 0 0 3px;
    }
  `}

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $isAnswered }) => 
      $isAnswered ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  }

  ${mediaQueries.tablet} {
    padding: 20px;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
`;

const QuestionText = styled.div`
  font-family: 'Satoshi';
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 1.5;
  flex: 1;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

const StatusBadge = styled.span<{ $status: 'pending' | 'answered' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${({ $status }) => 
    $status === 'answered' 
      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)' 
      : 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)'};
  border: 1px solid ${({ $status }) => 
    $status === 'answered' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(251, 191, 36, 0.3)'};
  border-radius: 20px;
  font-family: 'Satoshi';
  font-size: 12px;
  font-weight: 600;
  color: ${({ $status }) => $status === 'answered' ? '#86efac' : '#fcd34d'};
  white-space: nowrap;
`;

const QuestionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'Satoshi';
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AnswerSection = styled.div`
  margin-top: 20px;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%);
  border-radius: 16px;
  border-left: 3px solid #22c55e;
`;

const AnswerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const AnswerIcon = styled.span`
  font-size: 16px;
`;

const AnswerLabel = styled.span`
  font-family: 'Satoshi';
  font-size: 12px;
  font-weight: 700;
  color: #86efac;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AnswerText = styled.p`
  font-family: 'Satoshi';
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
`;

const NoQuestions = styled.div`
  text-align: center;
  padding: 80px 20px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 24px;
`;

const EmptyText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Satoshi';
  font-size: 18px;
  margin-bottom: 8px;
`;

const EmptySubtext = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Satoshi';
  font-size: 14px;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const LoadingDot = styled.div<{ $delay: number }>`
  width: 12px;
  height: 12px;
  background: ${theme.colors.primary.blue};
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Satoshi';
  font-size: 16px;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-family: 'Satoshi';
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${theme.colors.primary.blue};
    transform: translateX(-4px);
  }
`;

const StatsBar = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
`;

const StatNumber = styled.span`
  font-family: 'Castledown';
  font-size: 28px;
  color: ${theme.colors.primary.blue};
`;

const StatLabel = styled.span`
  font-family: 'Satoshi';
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export default function QAPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    askedBy: '',
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      if (data.success) {
        setQuestions(data.data);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ question: '', askedBy: '' });
        fetchQuestions();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting question:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Only show answered questions to the public
  const answeredQuestions = questions.filter(q => q.isAnswered);
  const answeredCount = answeredQuestions.length;

  return (
    <Layout>
      <ContentWrapper>
        <QAWrapper>
          <BackButton onClick={() => window.history.back()}>
            ← Back to Home
          </BackButton>
          
          <HeaderSection>
            <Title>❓ Questions & Answers</Title>
            <Subtitle>
              Have a question about wHACKiest 2025? Ask below and our team will get back to you as soon as possible!
            </Subtitle>
          </HeaderSection>

          <StatsBar>
            <StatItem>
              <StatNumber>{answeredCount}</StatNumber>
              <StatLabel>Answered Questions</StatLabel>
            </StatItem>
          </StatsBar>

          <AskSection>
            <AskHeader>
              <AskIcon>💬</AskIcon>
              <AskTitleContainer>
                <AskTitle>Ask a Question</AskTitle>
                <AskSubtitle>Your question will be visible to everyone once answered</AskSubtitle>
              </AskTitleContainer>
            </AskHeader>
            
            <form onSubmit={handleSubmit}>
              <FormGrid>
                <FormGroup>
                  <Label>Your Name (optional)</Label>
                  <Input
                    type="text"
                    placeholder="Stay anonymous or share your name"
                    value={formData.askedBy}
                    onChange={(e) => setFormData({ ...formData, askedBy: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Your Question *</Label>
                  <TextArea
                    placeholder="What would you like to know about wHACKiest 2025?"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                  />
                </FormGroup>
              </FormGrid>
              
              <SubmitButton type="submit" disabled={submitting || !formData.question.trim()}>
                {submitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Question</span>
                    <span>→</span>
                  </>
                )}
              </SubmitButton>

              {success && (
                <SuccessMessage>
                  <SuccessIcon>✅</SuccessIcon>
                  <SuccessText>
                    Your question has been submitted successfully! We&apos;ll answer it soon.
                  </SuccessText>
                </SuccessMessage>
              )}
            </form>
          </AskSection>

          <QuestionsSection>
            <SectionHeader>
              <SectionTitle>Answered Questions ({answeredCount})</SectionTitle>
            </SectionHeader>

            {loading ? (
              <LoadingContainer>
                <LoadingDots>
                  <LoadingDot $delay={0} />
                  <LoadingDot $delay={0.2} />
                  <LoadingDot $delay={0.4} />
                </LoadingDots>
                <LoadingText>Loading questions...</LoadingText>
              </LoadingContainer>
            ) : answeredQuestions.length === 0 ? (
              <NoQuestions>
                <EmptyIcon>📭</EmptyIcon>
                <EmptyText>No answered questions yet</EmptyText>
                <EmptySubtext>Submit a question above and check back later for answers!</EmptySubtext>
              </NoQuestions>
            ) : (
              <QuestionsList>
                {answeredQuestions.map((q, index) => (
                  <QuestionCard key={q._id} $isAnswered={true} style={{ animationDelay: `${index * 0.1}s` }}>
                    <QuestionHeader>
                      <QuestionText>{q.question}</QuestionText>
                      <StatusBadge $status="answered">
                        ✓ Answered
                      </StatusBadge>
                    </QuestionHeader>
                    
                    <QuestionMeta>
                      <MetaItem>👤 {q.askedBy}</MetaItem>
                      <MetaItem>📅 {formatDate(q.createdAt)} at {formatTime(q.createdAt)}</MetaItem>
                    </QuestionMeta>

                    <AnswerSection>
                      <AnswerHeader>
                        <AnswerIcon>💡</AnswerIcon>
                        <AnswerLabel>Official Answer</AnswerLabel>
                      </AnswerHeader>
                      <AnswerText>{q.answer}</AnswerText>
                    </AnswerSection>
                  </QuestionCard>
                ))}
              </QuestionsList>
            )}
          </QuestionsSection>
        </QAWrapper>
      </ContentWrapper>
    </Layout>
  );
}
