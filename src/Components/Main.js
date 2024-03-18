import React, { useState } from "react";
import user from "../assets/Vector.jpg";

const Main = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState({
    first: "5%",
    second: "10%",
    third: "15%",
    four: "25%",
    five: "50%",
    six: "40%",
  });
  const [person, setPerson] = useState("");
  const [storeTip, setStoreTip] = useState("");
  const totalAmount = isNaN(parseInt(bill)) ? 0 : parseInt(bill) * (parseInt(storeTip) / 100);
  const tipPerPerson = isNaN(parseFloat(person)) || parseFloat(person) === 0 ? 0 : totalAmount / parseFloat(person);
  const tipPerPersonFixed = tipPerPerson.toFixed(1);
  const totalAmountPerPerson = isNaN(parseInt(person)) || parseInt(person) === 0 ? 0 : (totalAmount + parseInt(bill)) / parseInt(person);
  const totalAmountPerPersonFixed = totalAmountPerPerson.toFixed(1);

  const handleBill = (e) => { setBill(e.target.value); };

  const handlePerson = (e) => {
    const value = e.target.value;
    if (value !== "" && parseInt(value) !== 0) {
      setPerson(value);
    } else {
      setPerson("");
    }
  };

  const handleReset = () => {
    setBill("");
    setPerson("");
    setStoreTip("");
  };

  // Check if any of bill, person or storeTip has a value
  const isResetActive = bill || person || storeTip;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container py-5 bg-main">
          <div className="">
            <p className="text-center py-4 split-heading"> SPLT <br /> TTER</p>
            <div className="d-flex justify-content-center ">
              <div className="col-md-10 bg-white p-5 rounded">
                <div className="row justify-content-between">
                  <div className="col-md-5">
                    <p className="mb-0"> Bill</p>
                    <div className="input-group mb-3 bill-input rounded">
                      <span className="input-group-text">$</span>
                      <input type="number" className="form-control text-end" placeholder="0" value={bill} onChange={handleBill} aria-label="Amount" />
                    </div>
                    <p className="py-4 mb-0"> Select Tip %</p>
                    <div className="select-tip">
                      {Object.entries(tip).map(([key, value]) => (
                        <button
                          className={storeTip === value ? "bg-click border-0 text-white rounded selct-height" : "selct-height bg-amount  border-0 text-white rounded"}
                          key={key} onClick={() => setStoreTip(value)} >
                          {value}
                        </button>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between pt-5">
                      <p className="mb-0">Number of People</p>
                      <p className="text-zero mb-0"> Can't be zero</p>
                    </div>

                    <div className="input-group mb-3 bill-input rounded">
                      <span className="input-group-text"><img src={user} alt="user" /></span>
                      <input type="number" className="form-control text-end" placeholder="0" value={person} onChange={handlePerson} aria-label="Amount" />
                    </div>
                  </div>

                  <div className="col-md-6  rounded  bg-amount p-5 mt-3 mt-md-0">
                    <div className="d-flex justify-content-between">
                      <p className="text-white">
                        Tip Amount <br /> <span className="text-amount">/person</span>
                      </p>
                      <p className="text-amount selct-height fs-4">${tipPerPersonFixed}</p>
                    </div>

                    <div className="d-flex justify-content-between my-4">
                      <p className="text-white">
                        Total amount <br /> <span className="text-amount">/person</span> </p>
                      <p className="text-amount selct-height fs-4">${totalAmountPerPersonFixed}</p>
                    </div>
                    <button className={isResetActive ? "bg-click w-100 text-center selct-height rounded mt-5 split-heading" : "bg-gray w-100 text-center selct-height rounded mt-5 split-heading"} onClick={handleReset} disabled={!isResetActive}> RESET</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
