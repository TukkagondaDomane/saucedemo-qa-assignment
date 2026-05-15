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

**Recordings Attached**: [Desktop Response](https://drive.google.com/file/d/1yEPJAcXrKFnAwAJNPXonbruPiJmedSFk/view)
