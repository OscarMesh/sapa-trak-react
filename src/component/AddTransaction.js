import React, { useState } from 'react'

export const AddTransaction = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);


    const onChangeName =(e)=> {
        setName(e.target.value);
        
    };
    
    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

  return (
    <>
      <h3>ADD NEW TRANSACTION</h3>

      <div className="form">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={onChangeName} name="name" />
        </div>
        <div className="price">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            onChange={onChangePrice}
            name="price"
          />
        </div>
      </div>

      <div className="buttons">
        <button className="add-inc">ADD INCOME</button>
        <button className="add-exp">ADD EXPENSE</button>
      </div>
    </>
  );
}

export default AddTransaction;