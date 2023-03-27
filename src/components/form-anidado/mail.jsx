import React from 'react';


export default function Mail(props) {
  const { address, optional, handleBorrarMail } = props;

  return (
    <>
      {optional ? (
        <div
          style={{
            display: 'inline-block',
            maxWidth: '100%',
            width: 'auto',
            boxSizing: 'border-box',
            border: '2px solid #FFB440',
            borderRadius: '20px',
            padding: '5px 15px 5px 15px',
            marginTop: '20px',
          }}
        >
          <p style={{ display: 'inline-block', margin: '0 10px 0 0', textOverflow: 'ellipsis', width: '300px', fontWeight: '500' }}>
            {props.address}
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'inline-block',
            maxWidth: '100%',
            width: 'auto',
            boxSizing: 'border-box',
            border: '2px solid #FFB440',
            borderRadius: '20px',
            padding: '5px 15px 5px 15px',
            marginTop: '20px',
          }}
        >
          <p style={{ display: 'inline-block', margin: '0 10px 0 0', textOverflow: 'ellipsis', width: '300px', fontWeight: '500' }}>
            {props.address}
          </p>
        </div>
      )}
    </>
  );
}
