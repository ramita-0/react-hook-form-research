import React, { useState } from 'react';
import Mails from './mails';

export default function MailsContainer() {
  const apiObj = {
    mails: {
      fijos: ['ramiro@gmail.com', 'jose@gmail.com', 'marian@gmail.com', 'juanmanuel@odfjellterminals.com', 'guadalupe_r@google.com'],
      adicionales: [],
    },
  };

  const [mails, setMails] = useState(apiObj.mails);

  const handleSetMails = (mail, options = {}) => {
    if (!mail) return;

    Object.prototype.hasOwnProperty.call(options, 'borrar')
      ? setMails(state => ({ ...mails, adicionales: mails.adicionales.filter(mailActual => mailActual !== mail) }))
      : !mails.adicionales.includes(mail) && setMails(state => ({ ...mails, adicionales: [...mails.adicionales, mail] }));
  };

  return <Mails mails={mails} handleChange={handleSetMails} />;
}
