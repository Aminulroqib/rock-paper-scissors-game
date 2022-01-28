import React, { useState } from 'react';
import Modal from './Modal';
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Coded by{' '}
          <a
            className="aminul"
            href="https://aminulislam.com.bd"
            target="_blank"
          >
            Aminul Islam
          </a>
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
