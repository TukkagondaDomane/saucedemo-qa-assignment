**Test Case 001**

**Scenario**: Valid Login
**Preconditions**: User is on login page
**Test Steps**:
1.Enter valid username standard_user
2.Enter valid password secret_sauce
3.Click Login
**Expected Result**: User should successfully login and navigate to Products page

____________________________________________________________________________________________________________________________________________________________________________________________________________________________


**Test Case 002**

**Scenario**: Invalid Login
**Preconditions**: User is on login page
**Test Steps**:
1.Enter invalid username
2.Enter invalid password
3.Click Login
**Expected Result**: Login should fail and user should not be redirected
____________________________________________________________________________________________________________________________________________________________________________________________________________________________
**Test Case 003**

**Scenario**: Empty Username and Password
**Preconditions**: User is on login page
**Test Steps**:
1.Leave username empty
2.Leave password empty
3.Click Login
**Expected Result**: Validation message should be shown for required fields
____________________________________________________________________________________________________________________________________________________________________________________________________________________________
**Test Case 004**

**Scenario**: Empty Username only
**Preconditions**: User is on login page
**Test Steps**:
1.Leave username empty
2.Enter valid password
3.Click Login
**Expected Result**: Username required validation should be shown
____________________________________________________________________________________________________________________________________________________________________________________________________________________________
**Test Case 005**

**Scenario**: Empty Password only
**Preconditions**: User is on login page
**Test Steps**:
1.Enter valid username
2.Leave password empty
3.Click Login
**Expected Result**: Password required validation should be shown
____________________________________________________________________________________________________________________________________________________________________________________________________________________________
**Test Case 006**

**Scenario**: Locked user login
**Preconditions**: User is on login page
**Test Steps**:
1.Enter locked user credentials
2.Click Login
**Expected Result**: User should not be allowed to login
____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 007**

**Scenario**: Add single product to cart
**Preconditions**: User is logged in
**Test Steps**:
1.Click “Add to Cart” on a product
**Expected Result**: Product should be added and cart count should increase

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 008**

**Scenario**: Add multiple products to cart
**Preconditions**: User is logged in
**Test Steps**:
1.Add 2–3 products
**Expected Result**: Cart count should reflect correct number

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 009**

**Scenario**: Remove product from cart (Products page)
**Preconditions**: Product is added to cart
**Test Steps**:
1.Click “Remove”
**Expected Result**: Product should be removed from cart and count should update

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 010**

**Scenario**: Cart persistence
**Preconditions**: Products added to cart
**Test Steps**:
1.Navigate away and return to cart page
**Expected Result**: Cart items should remain unchanged

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 011**

**Scenario**: Checkout navigation
**Preconditions**: Items present in cart
**Test Steps**:
1.Open cart
2.Click Checkout
**Expected Result**: User should be navigated to Checkout page

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 012**

**Scenario**: Successful checkout
**Preconditions**: User is on checkout page with items in cart
**Test Steps**:
1.Enter First Name
2.Enter Last Name
3.Enter Zip Code
4.Continue and finish checkout
**Expected Result**: Order should be placed successfully

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 013**

**Scenario**: Empty checkout fields
**Preconditions**: User is on checkout page
**Test Steps**:
1.Leave all fields empty
2.Click Continue
**Expected Result**: Validation should be shown for required fields

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 014**

**Scenario**: Invalid Zip/Postal Code input
**Preconditions**: User is on checkout page
**Test Steps**:
1.Enter text in Zip Code field
2.Click Continue
**Expected Result**: Only valid numeric input should be accepted or error shown

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 015**

**Scenario**: Checkout cancellation
**Preconditions**: User is on checkout page
**Test Steps**:
1.Click Cancel
**Expected Result**: User should be redirected back to cart page

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 016**

**Scenario**: Product sorting
**Preconditions**: User is on Products page
**Test Steps**:
1.Apply sorting (Price/Name)
**Expected Result**: Products should be rearranged correctly

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 017**

**Scenario**: Logout functionality
**Preconditions**: User is logged in
**Test Steps**:
1.Open sidebar menu
2.Click Logout
**Expected Result**: User should be logged out and redirected to login page

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 018**

**Scenario**: Reset App State
**Preconditions**: Products added to cart
**Test Steps**:
1.Open sidebar
2.Click Reset App State
**Expected Result**: Cart should reset and UI should reflect initial state

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 019**

**Scenario**: UI responsiveness
**Preconditions**: User is on any page
**Test Steps**:
1.Open developer tools
2.Switch to mobile view (iPhone SE)
**Expected Result**: UI should adjust properly without overlap or distortion

____________________________________________________________________________________________________________________________________________________________________________________________________________________________

**Test Case 020**

**Scenario**: Cart icon update consistency
**Preconditions**: User is logged in
**Test Steps**:
1.Add product to cart
2.Remove product
3.Observe cart icon
**Expected Result**: Cart icon should always reflect correct cart count
