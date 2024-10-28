# My Remix App

A full-stack web application built with [Remix](https://remix.run/), [Prisma](https://www.prisma.io/), and MongoDB.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version >= 20)
- **MongoDB** (either locally or through a cloud service like MongoDB Atlas)
- **Prisma CLI** (optional: can be installed as a dev dependency or globally)

## Development

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Set up MongoDB connection:

   Create a `.env` file at the root of your project and add the following:

   ```dotenv
   DATABASE_URL="your-mongodb-url"
   ```

   Replace `"your-mongodb-url"` with your actual MongoDB connection string.

4. Configure Prisma:

   Define your data models in `prisma/schema.prisma`. Here’s an example:

   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model User {
     id    String @id @default(auto()) @map("_id")
     email String @unique
     name  String
   }
   ```

5. Generate Prisma Client:

   ```shell
   npx prisma generate
   ```

6. Run the development server:

   ```shell
   npm run dev
   ```

## Deployment

1. Build the application for production:

   ```sh
   npm run build
   ```

2. Run the app in production mode:

   ```sh
   npm start
   ```

You can deploy the built output (`build/server` and `build/client`) to your preferred Node.js hosting provider.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) pre-configured. You can customize or replace it as needed. For more information, see the [Vite docs on CSS](https://vitejs.dev/guide/features.html#css).

## Additional Resources

- 📖 [Remix Documentation](https://remix.run/docs)
- 📖 [Prisma Documentation](https://www.prisma.io/docs/)
- 📖 [MongoDB Documentation](https://docs.mongodb.com/)
