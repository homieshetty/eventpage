import React from 'react';
import { ArrowLeft, CreditCard } from 'lucide-react';

interface CheckoutPageProps {
  cart: any[];
  totalAmount: number;
  onBack: () => void;
  onCheckoutComplete: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
  cart, 
  totalAmount, 
  onBack, 
  onCheckoutComplete 
}) => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" />
          Back to Events
        </button>
        
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-700">
                  <span>{item.name || 'Event'}</span>
                  <span>₹100</span>
                </div>
              ))}
              <div className="flex justify-between py-2 mt-4 font-bold">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456" 
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input 
                      type="text" 
                      placeholder="123" 
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>
                
                <button
                  onClick={onCheckoutComplete}
                  className="w-full bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <CreditCard className="mr-2" />
                  PAY ₹{totalAmount}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;