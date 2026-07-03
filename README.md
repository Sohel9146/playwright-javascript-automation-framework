# 🚀 Task-04: Verify Checkbox Selection | Playwright JavaScript Automation

## 📖 Project Overview

This task automates the **Checkbox Selection** functionality of the DemoQA web application using **Playwright with JavaScript**.

The objective is to verify that a user can successfully select the **Home** checkbox and validate the selection using Playwright assertions.

The implementation follows industry-standard automation practices including:

- Page Object Model (POM)
- Reusable Page Objects
- Constants File
- Clean Project Structure
- Playwright Assertions

---

# 📋 Test Case Information

| Field | Details |
|-------|---------|
| **Test Case ID** | TC_CHECKBOX_001 |
| **Module** | Elements |
| **Feature** | Checkbox |
| **Scenario** | Verify Checkbox Selection |
| **Test Type** | Functional Testing |
| **Execution Type** | Automated |
| **Priority** | High |
| **Severity** | Medium |
| **Automation Tool** | Playwright |
| **Programming Language** | JavaScript |
| **Framework Pattern** | Page Object Model (POM) |
| **Execution Status** | ✅ Passed |

---

# 🎯 Objective

Verify that the **Home** checkbox can be selected successfully and the application displays the correct selected result.

---

# 🌐 Application Under Test

| Application | Value |
|------------|-------|
| Application Name | DemoQA |
| URL | https://demoqa.com/checkbox |
| Environment | Demo |

---

# 🛠 Technology Stack

| Technology | Version |
|------------|----------|
| Node.js | Latest |
| Playwright | Latest |
| JavaScript | ES6 |
| VS Code | IDE |
| Git | Version Control |
| GitHub | Repository Hosting |

---

# 📁 Project Structure

```text
playwright-practice-js
│
├── pages
│   └── CheckBoxPage.js
│
├── tests
│   └── checkbox
│       └── verifyCheckboxSelection.spec.js
│
├── utils
│   └── constants.js
│
├── playwright.config.js
│
├── package.json
│
└── README.md
```

---

# 📌 Preconditions

- Node.js is installed.
- Playwright is installed.
- Browser dependencies are installed.
- Internet connection is available.
- DemoQA application is accessible.

---

# 📝 Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Launch DemoQA Checkbox page | Checkbox page should open |
| 2 | Click **Expand All** | Checkbox tree should expand |
| 3 | Select **Home** checkbox | Checkbox should be selected |
| 4 | Validate success message | Selected item should display as **home** |

---

# ✅ Expected Result

- Checkbox tree expands successfully.
- Home checkbox is selected.
- Success message displays:

```text
home
```

---

# 📌 Postconditions

- Home checkbox remains selected.
- Success message is displayed correctly.

---

# ⚙ Automation Approach

This scenario is automated using:

- Page Object Model (POM)
- Reusable Methods
- Constants File
- Playwright Built-in Assertions
- Async/Await Programming

---

# 🎯 Playwright Concepts Used

- Page Object Model
- Browser Navigation
- Playwright Locators
- Click Actions
- Assertions
- Auto Waiting
- Async / Await

---

# ✔ Assertions Used

- Verify selected checkbox result using `expect().toContainText()`

---

# ▶️ Test Execution

Run all tests

```bash
npx playwright test
```

Run only Task-04

```bash
npx playwright test tests/checkbox/verifyCheckboxSelection.spec.js --headed
```

Generate HTML Report

```bash
npx playwright show-report
```

---

# 🌍 Browser Support

- ✅ Chromium
- ✅ Firefox
- ✅ WebKit

---

# 📊 Test Execution Status

| Execution Date | Browser | Result |
|---------------|----------|--------|
| 03-06-2026 | Chromium | ✅ Passed |

---

# 📷 Test Execution Evidence

## Checkbox Page

![Checkbox Page](docs/task-04/checkbox-page.png)
---

## Selected Checkbox

![Selected Checkbox](docs/task-04/checkbox-selected.png)
---

# 📈 Playwright HTML Report

![Playwright HTML Report](docs/task-04/playwright-report.png)
---

# 🌿 Git Branch Information

| Branch |
|---------|
| feature/task-04-verify-checkbox-selection |

Commit Message

```text
Task-04: Verify Checkbox Selection using Playwright JavaScript
```

---

# ⚠ Challenges Faced

- Identifying stable locators for checkbox elements.
- Expanding the checkbox tree before selection.
- Validating selected checkbox result.
- Maintaining reusable Page Object methods.

---

# 📚 Learning Outcome

- Implemented checkbox automation using Playwright.
- Improved understanding of Playwright locators.
- Strengthened Page Object Model implementation.
- Practiced Playwright assertions.
- Enhanced reusable framework design.

---

# 🚀 Future Enhancements

- Data-Driven Testing
- Cross Browser Execution
- Parallel Execution
- Retry Mechanism
- Screenshot on Failure
- Allure Reporting
- GitHub Actions CI/CD
- Jenkins Integration

---

# 💡 Best Practices Followed

- ✔ Page Object Model (POM)
- ✔ Reusable Methods
- ✔ Constants File
- ✔ Clean Folder Structure
- ✔ Meaningful Naming Convention
- ✔ Version Control using Git
- ✔ Feature Branch Workflow
- ✔ Professional Documentation

---

# 👨‍💻 Author

**Sohel Shaikh**

QA Automation Engineer

### GitHub Profile

https://github.com/Sohel9147

### Repository

https://github.com/Sohel9147/playwright-javascript-automation-framework

---

# 📄 License

This project is created for learning, practice, and portfolio purposes.
