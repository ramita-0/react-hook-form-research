import React from 'react';
import Mail from './mail';
import NuevoMailAdicionalInput from './nuevo-mail-adicional-input';


export default function Mails(props) {
  const { mails, handleChange } = props;

  return (
    <div>
      <div>
        <h6>
          <span style={{ fontWeight: '600' }}>Notificaciones por emails</span>
        </h6>
        <p>
          Cada cambio de estado de la autorizacion sera notificado a todas las direcciones de email en la lista fija y de la lista de
          adicionales.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20px' }}>
          <div>
            <div>
              <h6>
                <span style={{ fontWeight: '600' }}>Lista de destinatarios fijos</span>
              </h6>
              <p style={{ margin: '0' }}>Los mails de destinatarios fijos no pueden ser cambiados al crear una autorizacion.</p>
            </div>
            <div
              style={{ display: 'block', overflow: 'scroll', overflowY: 'auto', overflowX: 'auto', height: '300px', maxHeight: '300px' }}
            >
              {mails.fijos.map((email, index) => {
                return <Mail key={index} address={email} />;
              })}
            </div>
          </div>

          <div>
            <div>
              <h6>
                <span style={{ fontWeight: '600' }}>Lista de destinatarios adicionales</span>
              </h6>
              <NuevoMailAdicionalInput handleAgregarMail={handleChange} />
            </div>
            <div
              style={{ overflow: 'scroll', marginTop: '10px', overflowY: 'auto', overflowX: 'auto', height: '300px', maxHeight: '300px' }}
            >
              {mails.adicionales ? (
                mails.adicionales.map((mail, index) => {
                  return <Mail key={index} address={mail} handleBorrarMail={handleChange} optional />;
                })
              ) : (
                <p>No hay mails adicionales</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
