# Foodie Chef Micro-Frontend POC

This is a micro-frontend proof-of-concept (POC) application built for a chef booking service. It demonstrates a modular and scalable architecture using ReactJS, Webpack Module Federation, Single-SPA, TypeScript, and Tailwind CSS.

## Architecture

This application uses a monorepo structure containing multiple micro-frontends and a shared library:

-   **`host-app`**: The main application that loads and orchestrates all other micro-frontends. It handles common layout, navigation, and routing.
-   **`chef-mfe`**: Handles all chef-related functionality, including chef listings, chef details, and chef profile management.
-   **`customer-mfe`**: Handles all customer-related functionality, including customer profile management and customer booking management.
-   **`booking-mfe`**: Handles the booking process, including booking form and confirmation.
-   **`shared-lib`**: A separate package containing shared components, utilities, and types.

## Technologies

-   **ReactJS**: For front-end UI.
-   **Webpack 5 with Module Federation**: To compose micro-frontends together.
-   **Single-SPA**: For runtime orchestration of micro-frontends.
-   **TypeScript**: For better code quality and developer experience.
-   **Tailwind CSS**: Utility-first CSS framework for rapid styling.
-   **Monorepo (pnpm Workspaces)**: To manage all related packages in a single repository.
-   **ESLint and Prettier**: For code quality and consistency.

## Setup and Running

Follow these instructions to set up and run the application locally.

### Prerequisites

Ensure the following are installed on your system:

-   Node.js (v18 or newer)
-   pnpm (Node.js package manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd foodie-chef
    ```

2.  **Install dependencies:**

    Run the following command from the root directory to install all dependencies in the monorepo:

    ```bash
    pnpm install
    ```

### Running the Application

#### Option 1: Using Docker (Recommended)

```bash
# Build and start all services
make build
make up

# View logs
make logs

# Stop all services
make down
```

All services will be available at:
- Host App: http://localhost:8080
- Chef MFE: http://localhost:8081
- Customer MFE: http://localhost:8082
- Booking MFE: http://localhost:8083

For all Docker commands, see [DOCKER_README.md](./DOCKER_README.md) or run `make help`.

#### Option 2: Running Locally

Each micro-frontend and host application must be run in separate terminals.

1.  **Run `host-app`:**

    ```bash
    cd packages/host-app
    pnpm start
    ```

    This will start the application at `http://localhost:8080`.

2.  **Run `chef-mfe`:**

    ```bash
    cd packages/chef-mfe
    pnpm start
    ```

    This will start the MFE at `http://localhost:8081`.

3.  **Run `customer-mfe`:**

    ```bash
    cd packages/customer-mfe
    pnpm start
    ```

    This will start the MFE at `http://localhost:8082`.

4.  **Run `booking-mfe`:**

    ```bash
    cd packages/booking-mfe
    pnpm start
    ```

    This will start the MFE at `http://localhost:8083`.

Once all applications are running, you can access the `host-app` at `http://localhost:8080`. The host application will dynamically load the micro-frontends.

## Code Organization

-   **`packages/host-app`**: Main container application.
-   **`packages/chef-mfe`**: Micro-frontend for chef profiles and listings.
-   **`packages/customer-mfe`**: Micro-frontend for customer profiles and booking management.
-   **`packages/booking-mfe`**: Micro-frontend for the booking process.
-   **`packages/shared-lib`**: Shared components and utilities library.

Each micro-frontend is configured with its own `webpack.config.js` to expose remote components through Module Federation. The `host-app` loads these remote components through the `remotes` configuration.

## Future Improvements

-   **Complete Single-SPA Routing**: Implement more sophisticated routing and layout management using `single-spa-layout`.
-   **Shared State Management**: Implement a mechanism to share state between micro-frontends (such as Redux, Zustand, or Context API).
-   **Develop UI Components**: Implement actual UI components in each MFE.
-   **Backend Integration**: Integrate with a backend service for data management.
-   **Authentication and Authorization**: Implement user authentication and role-based access control.

I hope this POC provides a good starting point for you! If you have any questions or need further assistance, please let me know.
