import React from 'react';

const ConfirmTransaction = () => {
    return (
        <div className='popup'>
            <h1 >
            Veuillez préciser la somme que vous voulez transférer
          </h1>
          <div className="depot">
            <input
              type="text"
              name="somme"
              autoFocus
              placeholder="00.00"
              className='input_popup'
            ></input>{"  "}
            <span>DA</span>
            <input
              type="text"
              name="id"
              placeholder="id du compte"
              className='input_popup'
            ></input>
            <div className="btn_popup">
            <button >Transéfer</button>
            </div>
          </div> 
        </div>
    );
};

export default ConfirmTransaction;