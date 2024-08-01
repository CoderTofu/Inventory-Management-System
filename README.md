# Inventory Management System

This is a simple inventory management system that allows users to add, update, delete, and view items in the inventory.

## Features

- Add new items to the inventory
- Update existing items in the inventory
- Delete items from the inventory
- View the list of items in the inventory

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/inventory-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd inventory-management
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000`.

3. Use the provided interface to manage the inventory.

## Configuration

1. Create a new file named `.env.local` in the root directory of the project.

2. Open the `.env.local` file and add the following environment variables:

   ```plaintext
      NEXT_PUBLIC_API_KEY=your_api_key
      NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
      NEXT_PUBLIC_PROJECT_ID=your_project_id
      NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
      NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
      NEXT_PUBLIC_APP_ID=your_app_id
   ```

   Replace `your-api-key`, `your-auth-domain`, `your-project-id`, `your-storage-bucket`, `your-messaging-sender-id`, and `your-app-id` with the corresponding values from your Firebase project.

3. Save the `.env.local` file.

4. Now you can use these environment variables in your `firebase.js` file to configure your Firebase project.
