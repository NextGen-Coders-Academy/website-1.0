const { Resend } = require('resend');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Set up Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email
const sendEmail = async (to, subject, htmlContent) => {
  try {
    await resend.emails.send({
      from: 'NextGen Coders Academy <eric@nextgencodersacademy.com>',
      to,
      subject,
      html: htmlContent,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
  }
};

// Function to send signup confirmation emails
const sendSignupEmails = (student, teacher, course) => {
  const studentEmailTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'student-confirmation-template.html'), 'utf-8');
  const teacherEmailTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'teacher-confirmation-template.html'), 'utf-8');

  // Render HTML with EJS
  const studentHtmlContent = ejs.render(studentEmailTemplate, {
    studentName: student.name,
    courseName: course.name,
    courseDescription: course.description,
    startDate: course.startDate,
    endDate: course.endDate,
    hours: course.hours,
  });

  const teacherHtmlContent = ejs.render(teacherEmailTemplate, {
    teacherName: teacher.name,
    studentName: student.name,
    studentEmail: student.email,
    courseName: course.name,
    courseDescription: course.description,
    startDate: course.startDate,
    endDate: course.endDate,
    hours: course.hours,
  });

  // Send emails
  sendEmail(student.email, 'NextGen Signup Confirmation', studentHtmlContent);
  sendEmail(teacher.email, 'New Student Signup Notification', teacherHtmlContent);
  
  // console.log({ data });
};

module.exports = {
  sendSignupEmails,
}