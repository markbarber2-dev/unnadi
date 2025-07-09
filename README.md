# Unnadhi – Global Educational Advisory

Welcome to the official repository for the Unnadhi educational advisory website. This platform serves as a digital presence for Unnadhi's educational advisory services, providing students with easy access to guidance and support for their academic journeys.

## Features

- **Responsive Design**: Works seamlessly on both mobile and desktop devices
- **Quick Contact**: Direct call and WhatsApp buttons for instant communication
- **Service Showcase**: Highlights key services including university selection, application support, and visa assistance
- **Modern UI**: Clean, professional design with a blue and white color scheme
- **Social Media Integration**: Easy access to Unnadhi's social media profiles

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/unnadhi.git
   cd unnadhi
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Sign in to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy"

Vercel will automatically detect that this is a Next.js project and configure the deployment settings for you.

## Customization

### Environment Variables

Create a `.env.local` file in the root directory to set up environment-specific variables:

```
NEXT_PUBLIC_PHONE_NUMBER=+1234567890
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

### Branding

To update the brand colors, modify the Tailwind configuration in `tailwind.config.js`.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is proprietary and confidential. All rights reserved.
