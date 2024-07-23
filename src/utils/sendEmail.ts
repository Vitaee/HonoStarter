import { Resend } from 'resend';
import { EmailJobData } from '../interfaces/job.interface';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailData: EmailJobData) => {
  const mailOptions = {
    from: 'onboarding@resend.dev',
    to: [ emailData.to ],
    subject: emailData.subject,
    html: `<p>${emailData.body}</p>`,
  };

  try {
    const data = await resend.emails.send(mailOptions);
    console.log('Email sent: %s', data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
