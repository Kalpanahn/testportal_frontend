import React, { useState } from "react";
// import "./PaymentPage.css"; // Import your custom CSS for styling
import CustomNavbar from '../components/CustomNavbar';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="payment-page">
       <CustomNavbar/>
      <div className="payment-container">
        <div className="payment-methods">
          <div className="payment-method" onClick={() => handlePaymentMethodChange("Credit Card")}>
            <span>Credit Card</span>
          </div>
          <div className="payment-method" onClick={() => handlePaymentMethodChange("Debit Card")}>
            <span>Debit Card</span>
          </div>
          <div className="payment-method" onClick={() => handlePaymentMethodChange("Internet Banking")}>
            <span>Internet Banking</span>
          </div>
          <div className="payment-method" onClick={() => handlePaymentMethodChange("Wallet/ Cash Cards")}>
            <span>Wallet/ Cash Cards</span>
          </div>
          <div className="payment-method" onClick={() => handlePaymentMethodChange("UPI")}>
            <img src="upi-logo.png" alt="UPI Logo" className="upi-logo" />
          </div>
        </div>

        <div className="payment-details">
          {paymentMethod === "Credit Card" && (
            <div className="credit-card-form">
              <h3>Pay by Credit Card</h3>
              <div className="card-icons">
                <img src="visa.png" alt="Visa" />
                <img src="mastercard.png" alt="MasterCard" />
                <img src="dinersclub.png" alt="Diners Club" />
                <img src="rupay.png" alt="RuPay" />
              </div>
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="Enter card number" />
              </div>
              <div className="form-group">
                <label>Expiration Date</label>
                <div className="expiration-date">
                  <input type="text" placeholder="Month" />
                  <input type="text" placeholder="Year" />
                </div>
              </div>
              <div className="form-group">
                <label>CVV/CVC</label>
                <input type="text" placeholder="CVV/CVC" />
              </div>
              <div className="form-group">
                <label>Card Holder Name</label>
                <input type="text" placeholder="Enter card holder name" />
              </div>
              <button className="payment-button">MAKE PAYMENT</button>
            </div>
          )}
        </div>

        <div className="merchant-info">
          <div className="merchant-name">
            <strong>Merchant Name</strong>
            <p>COMPUTER LITERACY TEST PORTAL</p>
          </div>
          <div className="payment-amount">
            <strong>Payment Amount:</strong>
            <p>₹ 615.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
