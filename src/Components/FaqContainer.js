const FaqContainer = () => {
  const faqs = [
    {
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
      id: 1,
    },
    {
      question: 'What is the maximum file upload size?',
      answer:
        'No more than 2GB. All files in your account must fit your allotted storage space.',
      id: 2,
    },
    {
      question: 'How do I reset my password?',
      answer:
        'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
      id: 3,
    },
    {
      question: 'Can I cancel my subscription?',
      answer:
        ' Yes! Send us a message and we’ll process your request no questions asked.',
      id: 4,
    },
    {
      question: 'Do you provide additional support?',
      answer:
        'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
      id: 5,
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {faqs.map((faq) => (
        <div className="faq" key={faq.id}>
          <div className="question">
            {faq.question}{' '}
            <img src="/images/arrowDown.svg" className="arrow" alt="" />
          </div>
          <div className="answer">{faq.answer}</div>
          <hr className="line" />
        </div>
      ))}
    </div>
  );
};

export default FaqContainer;
