'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { keyframes } from 'styled-components';
import { Layout } from '@/components/base';
import ContentWrapper from '@/components/base/Layout/ContentWrapper';
import PageWrapper from '@/components/base/Layout/PageWrapper';
import { Heading1, theme } from '@/styles';
import { mediaQueries } from '@/utils';

interface Announcement {
  _id: string;
  title: string;
  content: string;
  fileUrl?: string;
  fileName?: string;
  createdAt: string;
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

const AnnouncementsWrapper = styled(PageWrapper)`
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
`;

const AnnouncementsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AnnouncementCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(20px);
  animation: ${fadeIn} 0.5s ease-out;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary.blue}, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${theme.colors.primary.blue}40;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }

  ${mediaQueries.tablet} {
    padding: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`;

const AnnouncementTitle = styled.h2`
  font-family: 'Castledown';
  font-size: 26px;
  font-weight: 700;
  color: white;
  margin: 0;
  flex: 1;
  min-width: 200px;

  ${mediaQueries.tablet} {
    font-size: 22px;
  }
`;

const DateBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-family: 'Satoshi';
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
`;

const AnnouncementContent = styled.div`
  font-family: 'Satoshi';
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;

  p {
    margin-bottom: 16px;
  }

  a {
    color: ${theme.colors.primary.blue};
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  ul, ol {
    padding-left: 24px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  code {
    background: rgba(255, 255, 255, 0.15);
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Consolas', monospace;
  }

  pre {
    background: rgba(0, 0, 0, 0.4);
    padding: 16px;
    border-radius: 12px;
    overflow-x: auto;
    margin: 16px 0;
  }

  h1, h2, h3, h4 {
    color: white;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  blockquote {
    border-left: 3px solid ${theme.colors.primary.blue};
    padding-left: 16px;
    margin: 16px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }

  strong {
    color: white;
    font-weight: 600;
  }
`;

const FileSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FileSectionTitle = styled.div`
  font-family: 'Satoshi';
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
`;

const FileAttachment = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: linear-gradient(135deg, ${theme.colors.primary.blue}20 0%, ${theme.colors.primary.blue}10 100%);
  border: 1px solid ${theme.colors.primary.blue}40;
  color: white;
  border-radius: 12px;
  font-family: 'Satoshi';
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary.blue}30 0%, ${theme.colors.primary.blue}20 100%);
    border-color: ${theme.colors.primary.blue};
    transform: translateX(4px);
  }
`;

const FileIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary.blue};
  border-radius: 10px;
  font-size: 18px;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileName = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const FileAction = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const NoAnnouncements = styled.div`
  text-align: center;
  padding: 100px 20px;
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
  padding: 100px 20px;
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

const NewBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border-radius: 6px;
  font-family: 'Satoshi';
  font-size: 11px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 12px;
`;

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements');
      const data = await res.json();
      if (data.success) {
        setAnnouncements(data.data);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const isNew = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    return diffHours < 24;
  };

  const getFileIcon = (fileName?: string) => {
    if (!fileName) return '📄';
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf': return '📕';
      case 'doc':
      case 'docx': return '📘';
      case 'xls':
      case 'xlsx': return '📗';
      case 'ppt':
      case 'pptx': return '📙';
      case 'zip':
      case 'rar': return '📦';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif': return '🖼️';
      default: return '📄';
    }
  };

  return (
    <Layout>
      <ContentWrapper>
        <AnnouncementsWrapper>
          <BackButton onClick={() => window.history.back()}>
            ← Back to Home
          </BackButton>
          
          <HeaderSection>
            <Title>📢 Announcements</Title>
            <Subtitle>
              Stay updated with the latest news and updates about wHACKiest 2025
            </Subtitle>
          </HeaderSection>

          {loading ? (
            <LoadingContainer>
              <LoadingDots>
                <LoadingDot $delay={0} />
                <LoadingDot $delay={0.2} />
                <LoadingDot $delay={0.4} />
              </LoadingDots>
              <LoadingText>Loading announcements...</LoadingText>
            </LoadingContainer>
          ) : announcements.length === 0 ? (
            <NoAnnouncements>
              <EmptyIcon>📭</EmptyIcon>
              <EmptyText>No announcements yet</EmptyText>
              <EmptySubtext>Check back later for updates!</EmptySubtext>
            </NoAnnouncements>
          ) : (
            <AnnouncementsGrid>
              {announcements.map((announcement, index) => (
                <AnnouncementCard key={announcement._id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <AnnouncementTitle>
                      {announcement.title}
                      {isNew(announcement.createdAt) && <NewBadge>New</NewBadge>}
                    </AnnouncementTitle>
                    <DateBadge>
                      🗓️ {formatDate(announcement.createdAt)} at {formatTime(announcement.createdAt)}
                    </DateBadge>
                  </CardHeader>
                  
                  <AnnouncementContent>
                    <ReactMarkdown>{announcement.content}</ReactMarkdown>
                  </AnnouncementContent>

                  {announcement.fileUrl && announcement.fileUrl.trim() !== '' && (
                    <FileSection>
                      <FileSectionTitle>📎 Attachment</FileSectionTitle>
                      <FileAttachment
                        href={announcement.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileIcon>{getFileIcon(announcement.fileName)}</FileIcon>
                        <FileInfo>
                          <FileName>{announcement.fileName || 'Download File'}</FileName>
                          <FileAction>Click to open →</FileAction>
                        </FileInfo>
                      </FileAttachment>
                    </FileSection>
                  )}
                </AnnouncementCard>
              ))}
            </AnnouncementsGrid>
          )}
        </AnnouncementsWrapper>
      </ContentWrapper>
    </Layout>
  );
}
