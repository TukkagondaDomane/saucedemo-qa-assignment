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
                         
