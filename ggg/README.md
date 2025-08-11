# Ansar - Islamic Knowledge Website

Ansar is a web application designed to provide foundational knowledge about the religion of Islam. It serves as an accessible and user-friendly resource for individuals interested in learning about Islamic beliefs, practices, and culture. The application is built with a modern tech stack and features interactive components to enhance the learning experience.

The entire user interface is presented in the Lao language to cater to the target audience.

## Core Features

-   **Modular Content Sections**: The application is divided into distinct, easy-to-navigate sections:
    -   **Basics (ພື້ນຖານ)**: Introduces fundamental concepts like the definition of Islam, the meaning of "Allah", the role of a Prophet, and the significance of the Masjid.
    -   **Beliefs (ຫຼັກຄວາມເຊື່ອ)**: Details the six core articles of faith in Islam.
    -   **Pillars (ຫຼັກປະຕິບັດ)**: Explains the five pillars of Islam, which are the foundational acts of worship.
    -   **Articles (ບົດຄວາມ)**: A collection of articles on various aspects of Muslim life, such as Halal food, family, finance, and the importance of knowledge.
    -   **Quran (ອັນກຸຣອານ)**: Features selected chapters (Surahs) from the Quran with Arabic text, Lao and English translations, and detailed explanations (Tafsir) for each verse.
    -   **Hadith (ຫະດີຊ)**: Provides access to a collection of Hadiths (narrations of the Prophet Muhammad ﷺ), including the famous 40 Hadith of Imam Nawawi.
    -   **FAQ (ຄຳຖາມທີ່ພົບເລື້ອຍ)**: Answers common questions about Islam.

-   **AI-Powered Summarization**: The FAQ section includes a Genkit-powered AI tool that allows users to get a concise summary of any answer, making complex topics easier to understand.

-   **Interactive UI**:
    -   **Collapsible Content**: Detailed information is presented in dialogs and accordions, keeping the interface clean and allowing users to explore topics at their own pace.
    -   **Language Toggling**: Where applicable (like in verse explanations), users can switch between Lao and English content.
    -   **Responsive Design**: The application is fully responsive and works seamlessly on desktops, tablets, and mobile devices.

## Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **AI Integration**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
-   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Deployment**: Intended for [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Getting Started

To run this project locally, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### 1. Install Dependencies

Clone the repository and navigate into the project directory. Then, install the required npm packages.

```bash
npm install
```

### 2. Set Up Environment Variables

The Genkit AI features rely on a Google AI API key. Create a `.env` file in the root of the project and add your API key.

```.env
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

### 3. Run the Application

The application consists of two main parts: the Next.js frontend and the Genkit AI backend. You will need to run them in separate terminals.

**Terminal 1: Run the Next.js Development Server**

```bash
npm run dev
```

This will start the main web application, usually available at `http://localhost:9002`.

**Terminal 2: Run the Genkit Development Server**

```bash
npm run genkit:dev
```

This starts the Genkit server, which powers the AI functionality. The AI flows will be available for the Next.js app to call.

You can now open your browser and navigate to the local development URL to see the application running.
