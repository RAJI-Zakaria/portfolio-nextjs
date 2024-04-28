import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
