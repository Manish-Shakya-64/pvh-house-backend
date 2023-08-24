const stripe = require('stripe')('sk_test_51NRARzSAvu6sJ8LMLvdPw2mTAjjegBo6RUCuj3ZAjI47e7LA2xZykjvEdfFxIoZkOC7K36jaZG9nAm5QpOL9ARwq00djjNdI0r');

async function testStripeConnection() {
  try {
    const balance = await stripe.balance.retrieve();
    console.log('Stripe connection successful. Balance:', balance.available[0].amount / 100, 'USD');
  } catch (error) {
    const errorMessage = 'Stripe connection failed: ' + error.message;
    console.error(errorMessage);
  }
}

testStripeConnection();
