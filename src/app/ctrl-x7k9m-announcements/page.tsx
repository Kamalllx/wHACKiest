'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { theme } from '@/styles';

interface Announcement {
  _id: string;
  title: string;
  content: string;
  fileUrl?: string;
  fileName?: string;
  createdAt: string;
}

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  padding: 40px;
  font-family: 'Satoshi', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
`;

const PinForm = styled.form`
  max-width: 400px;
  margin: 100px auto;
  padding: 48px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid #2a2a4a;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const PinTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 32px;
  font-size: 28px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 16px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    box-shadow: 0 0 0 4px ${theme.colors.primary.blue}20;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 16px;
  min-height: 220px;
  resize: vertical;
  margin-bottom: 16px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.blue};
    box-shadow: 0 0 0 4px ${theme.colors.primary.blue}20;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, ${theme.colors.primary.blue} 0%, #6366f1 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${theme.colors.primary.blue}40;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Label = styled.label`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const AnnouncementCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`;

const CardTitle = styled.h3`
  color: ${theme.colors.primary.blue};
  font-size: 20px;
  margin: 0 0 4px 0;
`;

const CardDate = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
`;

const CardContent = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
  max-height: 120px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(transparent, rgba(26, 26, 46, 0.9));
  }
  
  p { margin: 0 0 8px 0; }
`;

const FilePreview = styled.div`
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FileIcon = styled.span`
  font-size: 24px;
`;

const FileDetails = styled.div`
  flex: 1;
`;

const FileNameDisplay = styled.a`
  color: ${theme.colors.primary.blue};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FileLink = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.4);
  font-size: 11px;
  margin-top: 2px;
  word-break: break-all;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fca5a5;
  padding: 16px 20px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  margin-bottom: 24px;
`;

const Success = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #86efac;
  padding: 16px 20px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  margin-bottom: 24px;
`;

const HelpText = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.5;
`;

const HelpBox = styled.div`
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 24px;
`;

const HelpBoxTitle = styled.div`
  color: #fcd34d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HelpBoxContent = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  line-height: 1.6;

  ol {
    margin: 8px 0 0 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
  }
`;

const PreviewSection = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
`;

const PreviewTitle = styled.h4`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const PreviewContent = styled.div`
  color: white;
  font-size: 15px;
  line-height: 1.7;

  h1, h2, h3 { color: ${theme.colors.primary.blue}; margin: 16px 0 8px 0; }
  a { color: ${theme.colors.primary.blue}; }
  code { background: rgba(255, 255, 255, 0.1); padding: 2px 6px; border-radius: 4px; }
  p { margin: 0 0 12px 0; }
  ul, ol { padding-left: 20px; margin: 0 0 12px 0; }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: rgba(255, 255, 255, 0.4);
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export default function AnnouncementsAdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    fileUrl: '',
    fileName: '',
  });

  useEffect(() => {
    if (authenticated) {
      fetchAnnouncements();
    }
  }, [authenticated]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredPin(pin);
    setAuthenticated(true);
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements');
      const data = await res.json();
      if (data.success) {
        setAnnouncements(data.data);
      }
    } catch (err) {
      console.error('Error fetching announcements:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setError('Title and content are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pin: storedPin,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Announcement created successfully!');
        setFormData({ title: '', content: '', fileUrl: '', fileName: '' });
        fetchAnnouncements();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to create announcement');
        if (data.error === 'Invalid admin pin') {
          setAuthenticated(false);
        }
      }
    } catch (err) {
      setError('Failed to create announcement');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const res = await fetch(`/api/announcements?id=${id}&pin=${storedPin}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Announcement deleted');
        fetchAnnouncements();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to delete');
        if (data.error === 'Invalid admin pin') {
          setAuthenticated(false);
        }
      }
    } catch (err) {
      setError('Failed to delete announcement');
      console.error(err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
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

  if (!authenticated) {
    return (
      <Container>
        <PinForm onSubmit={handlePinSubmit}>
          <PinTitle>🔐 Admin Access</PinTitle>
          <Input
            type="password"
            placeholder="Enter Admin PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            autoFocus
          />
          <Button type="submit">Access Dashboard</Button>
        </PinForm>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>📢 Announcements Admin</Title>
        <Subtitle>Create and manage announcements for wHACKiest 2025</Subtitle>
      </Header>

      {error && <Error>❌ {error}</Error>}
      {success && <Success>✅ {success}</Success>}

      <Grid>
        <Section>
          <SectionTitle>✏️ Create New Announcement</SectionTitle>
          
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title *</Label>
              <Input
                type="text"
                placeholder="Enter announcement title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Content (Markdown supported) *</Label>
              <TextArea
                placeholder="Write your announcement here...

Markdown examples:
# Heading 1
## Heading 2
**bold text**
*italic text*
- Bullet point
1. Numbered list
[Link text](url)
`inline code`"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </FormGroup>

            <HelpBox>
              <HelpBoxTitle>💡 How to attach files</HelpBoxTitle>
              <HelpBoxContent>
                <ol>
                  <li>Upload your file to Google Drive</li>
                  <li>Right-click the file → Share → Copy link</li>
                  <li>Paste the link in the File URL field below</li>
                  <li>Enter a display name for the file</li>
                </ol>
              </HelpBoxContent>
            </HelpBox>

            <FormGroup>
              <Label>File URL (optional)</Label>
              <Input
                type="url"
                placeholder="https://drive.google.com/file/d/..."
                value={formData.fileUrl}
                onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>File Display Name (optional)</Label>
              <Input
                type="text"
                placeholder="e.g., Event Schedule.pdf"
                value={formData.fileName}
                onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
              />
              <HelpText>This name will be shown to users when downloading the file</HelpText>
            </FormGroup>

            {formData.fileUrl && (
              <FilePreview>
                <FileIcon>{getFileIcon(formData.fileName)}</FileIcon>
                <FileDetails>
                  <FileNameDisplay href={formData.fileUrl} target="_blank" rel="noopener noreferrer">
                    {formData.fileName || 'Unnamed file'}
                  </FileNameDisplay>
                  <FileLink>{formData.fileUrl.substring(0, 50)}...</FileLink>
                </FileDetails>
              </FilePreview>
            )}

            <Button type="submit" disabled={loading} style={{ marginTop: '24px' }}>
              {loading ? 'Creating...' : '🚀 Publish Announcement'}
            </Button>

            {formData.content && (
              <PreviewSection>
                <PreviewTitle>📄 Preview</PreviewTitle>
                <PreviewContent>
                  <ReactMarkdown>{formData.content}</ReactMarkdown>
                </PreviewContent>
              </PreviewSection>
            )}
          </form>
        </Section>

        <Section>
          <SectionTitle>📋 Existing Announcements ({announcements.length})</SectionTitle>
          
          {announcements.length === 0 ? (
            <EmptyState>
              <EmptyIcon>📭</EmptyIcon>
              <p>No announcements yet</p>
            </EmptyState>
          ) : (
            announcements.map((a) => (
              <AnnouncementCard key={a._id}>
                <CardHeader>
                  <div>
                    <CardTitle>{a.title}</CardTitle>
                    <CardDate>{formatDate(a.createdAt)}</CardDate>
                  </div>
                  <DeleteButton onClick={() => handleDelete(a._id)}>
                    🗑️ Delete
                  </DeleteButton>
                </CardHeader>
                <CardContent>
                  <ReactMarkdown>{a.content}</ReactMarkdown>
                </CardContent>
                {a.fileUrl && (
                  <FilePreview>
                    <FileIcon>{getFileIcon(a.fileName)}</FileIcon>
                    <FileDetails>
                      <FileNameDisplay href={a.fileUrl} target="_blank" rel="noopener noreferrer">
                        {a.fileName || 'Attached file'}
                      </FileNameDisplay>
                      <FileLink>Click to open in new tab</FileLink>
                    </FileDetails>
                  </FilePreview>
                )}
              </AnnouncementCard>
            ))
          )}
        </Section>
      </Grid>
    </Container>
  );
}
