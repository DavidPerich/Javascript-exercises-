// The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5
// This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of undefined. The function takes advantage of this behavior by setting undefined arguments to a default value.

// The following variation of the processOrder function has the same behavior as the first:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}
// However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

// You can pass a value that is not a number into teh processOrder function and it will break teh function. Since the variable has a value it will return truthy with all of the conditional statements  and won't get reassigned to the deftault value.

// what they actually wanted was - This happens because 0 is a falsy value in JavaScript, so any arguments with a value of 0 get reassigned a default value. One way to prevent this from happening is to explicitly test whether the input arguments have a value of undefined, instead of relying on them being falsy — e.g., (quantity === undefined). (Note that when the value passed for discount is 0, the function works as expected because the default value of discount is also 0.)

