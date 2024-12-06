## Resume Builder Setup

First, install all necessary dependencies:

```bash
npm install
```
OR

Run below command if dependency issues faced:

```bash
npm install --legacy-peer-deps
```

Configure Database URL in .env file in root of your project:
```bash
DATABASE_URL="mysql://username:password@localhost:3306/resume_builder"
```

Run the development server:

```bash
npm run dev
```
