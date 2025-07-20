const request = require('supertest');
const app = require('../backend/index'); // Adjusted path
const sgMail = require('@sendgrid/mail');

// Mock @sendgrid/mail
jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn().mockResolvedValue([{ statusCode: 202 }]), // Simulate successful email send
}));

describe('POST /api/send-email', () => {
  beforeEach(() => {
    // Reset mocks before each test
    sgMail.send.mockClear();
    // Set a dummy API key for testing purposes as the app setup in index.js calls setApiKey
    // The actual key value doesn't matter here since send() is mocked.
    process.env.SENDGRID_API_KEY = 'test_key_for_jest'; 
    // Re-initialize sgMail with the new/mocked API key if your app logic requires it.
    // This is important because setApiKey might have been called when index.js was first loaded.
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
  });

  it('should send an email successfully', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email sent successfully!');
    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenCalledWith(expect.objectContaining({
      to: 'test@example.com',
      from: 'noreply@propease.com',
      subject: 'Test Subject',
      html: '<p>Test HTML</p>',
    }));
  });

  it('should return 400 if required "to" field is missing', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        // to: 'test@example.com', // Missing
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Missing required fields: to, from, subject, html');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 if required "from" field is missing', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        // from: 'noreply@propease.com', // Missing
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Missing required fields: to, from, subject, html');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

    it('should return 400 if required "subject" field is missing', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        // subject: 'Test Subject', // Missing
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Missing required fields: to, from, subject, html');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 if required "html" field is missing', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        // html: '<p>Test HTML</p>', // Missing
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Missing required fields: to, from, subject, html');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 for invalid "to" email format', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'invalid-email',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Invalid "to" email format.');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 for incorrect "from" email', async () => {
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'wrong@example.com', // Incorrect 'from'
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Invalid "from" email address.');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 if subject is too long', async () => {
    const longSubject = 'a'.repeat(257); // Max 255 allowed
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: longSubject,
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Subject is too long.');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 400 if html body is too long', async () => {
    const longHtml = '<p>' + 'a'.repeat(10001) + '</p>'; // Max 10000 allowed
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: longHtml,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('HTML content is too long.');
    expect(sgMail.send).not.toHaveBeenCalled();
  });

  it('should return 500 if SendGrid API fails', async () => {
    sgMail.send.mockRejectedValueOnce(new Error('SendGrid API Error'));
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBe('Failed to send email.');
    expect(sgMail.send).toHaveBeenCalledTimes(1);
  });

  it('should return 500 with detailed SendGrid error message if available', async () => {
    const sendGridError = {
      response: {
        body: {
          errors: [{ message: 'Invalid API Key' }, { message: 'Another SendGrid issue' }]
        }
      }
    };
    sgMail.send.mockRejectedValueOnce(sendGridError);
    const response = await request(app)
      .post('/api/send-email')
      .send({
        to: 'test@example.com',
        from: 'noreply@propease.com',
        subject: 'Test Subject',
        html: '<p>Test HTML</p>',
      });
    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBe('Invalid API Key; Another SendGrid issue');
    expect(sgMail.send).toHaveBeenCalledTimes(1);
  });
});
