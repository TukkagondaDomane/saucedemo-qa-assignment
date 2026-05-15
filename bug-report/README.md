**BUG 001**

**Title**: Password visibility (eye) icon disappears after losing focus from password input field on the login screen.

**Description**: It is observed on the login screen that the password visibility (eye) icon appears temporarily while entering text in the password input field. However, once the password field loses focus, the icon disappears and does not appear again unless the existing password text is completely cleared and re-entered.

Note: QA also observed that on mobile browsers such as IQOO Neo 10 Chrome, iPhone 11 Chrome, and iPhone 11 Safari, the password visibility icon does not appear at all.

**Steps to Reproduce**:
1. Navigate to the login screen using URL: https://www.saucedemo.com
2. Enter any text in the password input field and observe that the password visibility (eye) icon appears
3. Move the cursor focus outside the password input field
4. Observe that the password visibility (eye) icon disappears even though text is still present in the password input field

**Expected Result**: The password visibility (eye) icon should remain visible as long as text is present in the password input field, even after the input field loses focus.

**Actual Result**: The password visibility (eye) icon disappears once the password input field loses focus, despite text still being present in the password input field.

**Severity**: Medium

**Priority**: Medium

**Recordings Attached**: 
[Desktop Recording](https://drive.google.com/file/d/1yEPJAcXrKFnAwAJNPXonbruPiJmedSFk/view)
[Mobile Recording     ](https://drive.google.com/file/d/1vzspoaLvyjqsdOnkSGTQsc1JGwWNHkme/view)       



___________________________________________________________________________________________________________________________________________________________________________________________________________________________




**BUG 002**

**Title**: Non-functional “X” (clear) icon is displayed on input fields after clicking action buttons (Login/Checkout) with empty or incorrect field details on Login and Checkout screens.

**Description**: It is observed on both Login and Checkout screens that when the user clicks on action buttons such as Login or Checkout with empty or invalid input field values, an “X” (clear) icon is displayed inside the input fields. However, this icon is non-functional and does not perform any action when clicked. Additionally, on hovering over the icon, the cursor remains as the default text cursor instead of changing to a pointer.

**Steps to Reproduce**:
1.Navigate to the Login screen or Checkout screen.
2. Leave required input fields empty OR enter invalid values.
3. Click on the Login button (Login screen) or Checkout button (Checkout screen).
4. Observe that an “X” (clear) icon appears inside the input fields.
5. Hover over the “X” icon and observe cursor behavior.
6. Click on the “X” icon.
7. Notice that the 'X' icon fails to disappear from the input field along with the text in the field if user has typed.

**Expected Result**: If an “X” (clear) icon is displayed on input fields, it should be functional and clear the respective input field when clicked. Additionally, the cursor should change to a pointer on hover to indicate it is clickable.

**Actual Result**: Non-functional “X” (clear) icon is displayed on input fields after clicking action buttons (Login/Checkout) with empty or incorrect field details on Login and Checkout screens.

**Severity**: Medium

**Priority**: Medium

**Recordings Attached**: ['X' icon issue recording](https://drive.google.com/file/d/1iBxeQo4dSYQkaJsGTmUH88PeAPEFP1ua/view)


____________________________________________________________________________________________________________________________________________________________________________________________________________________________




**BUG 003**

**Title**: Incorrect validation message shown when both Username and Password fields are empty on Login screen.

**Description**: When both Username and Password fields are empty and the Login button is clicked, only Username validation is shown while Password is not validated.

**Note**:
- Error messages use the prefix “Epic sadface:” as plain text instead of a visual indicator such as emoji.
- On smaller screens like iPhone SE, longer error messages like 'Epic sadface: Username and password do not match any user in this service' overlap with the error message's container borders.

**Steps to Reproduce**:
1. Navigate to the Login screen.
2. Leave both Username and Password fields empty.
3. Click on the Login button.
4. Observe validation behavior.
5. Trigger a long error message using invalid credentials.
6. Switch to a small screen view (e.g., iPhone SE in responsive mode).
7. Observe error message layout.

**Expected Result**: Both Username and Password fields should show validation, with properly styled error messages that are fully visible on all screen sizes.

**Actual Result**: Incorrect validation message shown when both Username and Password fields are empty on Login screen.

**Severity**: Medium

**Priority**: Medium

**Recordings Attached**: [Validation message recording](https://drive.google.com/file/d/12qVS9mspkn33aMmQTGXMJJgNlQjiQp8w/view?usp=sharing)

____________________________________________________________________________________________________________________________________________________________________________________________________________________________


                
              

**BUG 004**

**Title**: Input fields accept invalid data without validation on Login and Checkout screens

**Description**: Input fields on both Login and Checkout screens do not enforce proper validation. Users can enter unlimited characters and any type of input (numbers, text, or mixed values) in fields such as Username, Password, First Name, Last Name, and Zip/Postal Code. There are no restrictions or validation checks to ensure correct input formats before proceeding.

**Steps to Reproduce**:
1.Navigate to the Login screen or Checkout screen.
2.In Login screen, enter any type of input (numbers/special characters/text) in Username and Password fields.
3.In Checkout screen, enter invalid data such as numbers in First Name/Last Name fields or text in Zip/Postal Code field.
4.Proceed by clicking Login or Continue.
5.Notice that the input fields accept invalid data without validation on Login and Checkout screens

**Expected Result**: Input fields should enforce proper validation such as format restrictions, character limits, and field-specific input rules before allowing the user to proceed.

**Actual Result**: Input fields accept invalid data without validation on Login and Checkout screens

**Severity**: Medium

**Priority**: High

**Recordings Attached**:[ Input validation recording](https://drive.google.com/file/d/19C9E4x_rgDHTKjWbMWwosGDShj8wYEBy/view?usp=sharing)

____________________________________________________________________________________________________________________________________________________________________________________________________________________________


**BUG 005**

**Title**: Incorrect text 'Swag Labs' is displayed on the application header and the browser tab 

**Description**: It is observed that the incorrect text 'Swag Labs' is displayed instead of 'Sauce Labs' on the application header and the browser tab.

**Steps to Reproduce**:
1.Navigate to the application Login screen.
2.Observe the text 'Swag Labs' displayed on header text displayed on the application header and the browser tab.

**Expected Result**: The header text should display “Sauce Labs” as per the expected branding.

**Actual Result**: The header text is displayed as “Swag Labs” instead of “Sauce Labs”.

**Severity**: Low

**Priority**: High

**Screenshot Attached**: [Incorrect brand name](https://drive.google.com/file/d/1Be87FX_MMEls_4aNknJC5fSOm8YyOt0p/view?usp=sharing)

____________________________________________________________________________________________________________________________________________________________________________________________________________________________


**BUG 006**

**Title**: 'Remove' button fails to update to 'Add to Cart' after using “Reset App State” from side nav-bar in product screen.

**Description**: It is observed that after adding products to the cart, the cart icon correctly shows the number of added items and the product button changes from 'Add to Cart' to 'Remove'. However, when the user clicks on 'Reset App State' from the side nav-bar, the cart count resets to empty, but the product button state remains as “Remove” instead of reverting back to 'Add to Cart'.

**Steps to Reproduce**:
1.Navigate to the Products screen after login.
2.Click 'Add to Cart' for one or more products.
3.Observe the cart icon showing the number of added items and button of the product changing to 'Remove'.
4.Open the side nav-bar menu.
5.Click on 'Reset App State'.
6.Observe the cart icon and product button state.

**Expected Result**: 'Remove' button should update to 'Add to Cart' after using “Reset App State” from side nav-bar in product screen.

**Actual Result**: 'Remove' button fails to update to 'Add to Cart' after using “Reset App State” from side nav-bar in product screen.

**Severity**: Medium

**Priority**: High

**Screenshot Attached**:[ Remove button update issue](https://drive.google.com/file/d/192J2_bSiyRoXb0rlshqCeAK8JFKCULTB/view?usp=sharing)

____________________________________________________________________________________________________________________________________________________________________________________________________________________________



<span style="color: yellow;">Other than these , I noticed following issues for standard user account.</span>
1. User can place order without adding a single prodcut to the cart.
2. Debug texts appearing on product title and description. ex: carry.allTheThings()   , Test.allTheThings()
3. When user is on product screen or product details screen , cursor should be pointer upon hovering on the cart icon instead of normal cursor. Whichever buttons/texts/links are clickable should get cursor pointer.
4. At the footer , The Terms of Service and Privacy Policy should be hyperlinks which will take user to the respective pages.
5. On the checkout screen , 'QTY' will be displayed which is always 1. There should be option to increase the quantity.
6. In the side nav-bar the 'Logout' option should be at the end.
   
