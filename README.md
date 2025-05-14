# Cypress TypeScript E2E Testing Framework

A comprehensive end-to-end testing framework built with Cypress and TypeScript for web applications. This template provides a structured approach to writing maintainable and scalable automated tests.

## 📋 Features

- **TypeScript Support**: Strongly typed test code for better maintainability
- **Page Object Model**: Organized structure separating page elements from test logic
- **Test Organization**: Tests categorized by type (smoke, sanity, regression)
- **Visual Testing**: Integration with Applitools for visual regression testing
- **Reporting**: Multiple reporting options including Mochawesome and Allure
- **CI/CD Integration**: Ready-to-use GitLab CI/CD pipeline configurations
- **Parallel Test Execution**: Run tests in parallel for faster feedback
- **Custom Commands**: Extended Cypress commands for common operations
- **Environment Management**: Support for multiple environments (production, staging)
- **RBAC Testing**: Role-based access control testing capabilities
- **Visual Regression**: Built-in visual comparison capabilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mutaibdijoo/cypress-ts-e2e.git
   cd cypress-ts-e2e
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a copy of `.secrets/login-essentials.env.example` (if it exists) to `.secrets/login-essentials.env`
   - Add your environment-specific variables

### Running Tests

#### Basic Test Execution

```bash
# Open Cypress Test Runner
npx cypress open

# Run all tests headlessly
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/01_smoke/featAlpha/01_feat_alpha.spec.ts"
```

#### Run Tests by Category (with local parallel execution)

```bash
# Run all smoke tests
npm run cy:run:smoke

# Run all sanity tests
npm run cy:run:sanity

# Run all regression tests
npm run cy:run:regression

# Run complete test suite
npm run cy:run_parallel
```

#### Run Tests for Specific Features

```bash
# Run smoke tests for Feature Alpha
npm run cy:run:smoke:featA

# Run sanity tests for Feature Bravo
npm run cy:run:sanity:featB

# Run regression tests for Feature Charlie
npm run cy:run:regression:featC
```

## 📁 Project Structure

```
cypress-ts-e2e/
├── .husky/                         # Git hooks configuration
├── .scripts/                       # Custom scripts for the project
├── .secrets/                       # Environment variables and secrets
├── cypress/
│   ├── downloads/                  # Downloaded files during test execution
│   ├── e2e/                        # Test files organized by test type
│   │   ├── 01_smoke/               # Smoke tests
│   │   ├── 02_sanity/              # Sanity tests
│   │   ├── 03_regression/          # Regression tests
│   │   ├── 04_pre_requisite/       # Pre-requisite (test environment setup)
│   │   └── 05_visual_applitools/   # Visual tests using Applitools
│   ├── fixtures/                   # Test data
│   │   ├── login/                  # Login-related test data
│   │   └── shared/                 # Shared test data
│   ├── libs/                       # Utility libraries and helper functions
│   ├── pageObjects/                # Page Object Models
│   └── support/                    # Support files (commands, plugins)
├── gitlab-pipelines/               # GitLab CI/CD configuration
├── cypress.config.ts               # Cypress configuration
├── package.json                    # Project dependencies
└── tsconfig.json                   # TypeScript configuration
```

## 🏗️ Framework Architecture

### Page Object Model

The framework follows the Page Object Model pattern to separate UI elements from test logic:

- **Page Objects**: Located in `cypress/pageObjects/` - contain element selectors and basic actions
- **Library Files**: Located in `cypress/libs/` - contain utility libraries, helper functions, and complex interactions
- **Test Files**: Located in `cypress/e2e/` - contain test scenarios using page objects and libraries

### Test Organization

Tests are organized by type and feature:

- **Smoke Tests**: Quick tests to verify critical functionality (p0)
- **Sanity Tests**: Basic tests to ensure core features work (p1)
- **Regression Tests**: Comprehensive tests for extensive functionality coverage (p2, p3, p4)
- **Pre-requisite Tests**: Setup tests that run before other tests to set/reset test environments
- **Visual Tests**: Tests that visually verify UI appearance via screen captures

### Authentication

The framework includes built-in authentication handling:

- Login credentials stored in `cypress/fixtures/login/login_data.json`
- Automatic login before each test (configurable)
- Role-based access control testing support

## 📊 Reporting

### Mochawesome Reports

Mochawesome reports are generated after test execution in `dist/cypress/reports/mocha`.

To generate and view reports:

```bash
# Run tests and generate reports
npx cypress run

# Open the generated report
open dist/cypress/reports/mocha/mochawesome.html
```

### Allure Reports

Allure reports provide detailed test execution information:

```bash
# Run tests with Allure reporting
npx cypress run

# Generate Allure report
npm run allure:report

# Open Allure report
npx allure open allure-report
```

## 🔄 CI/CD Integration

### GitLab CI/CD

The repository includes GitLab CI/CD configuration files in the `gitlab-pipelines/` directory:

- `.gitlab-ci.yml`: Main CI/CD configuration
- `.modules.gitlab-ci.yml`: Module-specific configurations
- `.config.gitlab-ci.yml`: Configuration settings
- `.backend.gitlab-ci.yml`: Backend-specific configurations

## 🧩 Custom Commands and Utilities

### Custom Cypress Commands

The framework extends Cypress with custom commands defined in `cypress/support/commands.ts`.

### Utility Functions

Common utility functions are available in `cypress/support/utility.ts`.

## 🔍 Visual Testing

### Applitools Integration

The framework integrates with Applitools Eyes for visual testing:

```bash
# Run visual tests
npx cypress run --spec "cypress/e2e/05_visual_applitools/*.spec.ts"
```

### Built-in Visual Comparison

The framework also includes built-in visual comparison capabilities:

```typescript
// Example usage in tests
cy.compareSnapshot('homepage');
```

## 🛠️ Best Practices

### Writing Tests

1. **Use Page Object Model**: Keep selectors in page objects
2. **Follow AAA Pattern**: Arrange, Act, Assert
3. **Keep Tests Independent**: Each test should be able to run independently
4. **Use Custom Commands Wisely**: Create custom commands for repetitive actions
5. **Manage Test Data**: Use fixtures for test data

### Selectors Strategy

1. **Prefer data-cy attributes**: Use `data-cy="my-element"` for elements
2. **Avoid brittle selectors**: Don't use CSS classes that might change
3. **Use meaningful names**: Name selectors based on their purpose

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- **mutaibdijoo** - _Initial work_

## 🙏 Acknowledgments

- Cypress team for the amazing testing tool
- TypeScript team for the type system
- FlytBase for hands-on work experience
- All contributors to the project
