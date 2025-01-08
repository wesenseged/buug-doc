import Pagination from "@/components/ui/pagination";
import { createFileRoute } from "@tanstack/react-router";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute("/installation")({
  component: Installation,
});

export default function Installation() {
  const buugMarkdown = `
## Tech Stack

- **Frontend**: React
- **Backend**: Bun with Hono
- **Database**: PostgreSQL (Neon) with Drizzle ORM

## Installation & Setup

Currently, Buug is available as a web app. You can also clone the repository and run it locally:

### Prerequisites

- Bun
- Git

### Steps

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/wesenseged/buug
   \`\`\`
2. Navigate to the project directory:
   \`\`\`bash
   cd buug
   \`\`\`
3. Install server dependency:
   \`\`\`bash
   bun install
   \`\`\`
4. Build the server:
   \`\`\`bash
   bun build
   \`\`\`
5. Navigate to the project directory:
   \`\`\`bash
   cd client
   \`\`\`
5. Install client dependency:
   \`\`\`bash
   bun install
   \`\`\`
6. Build client:
   \`\`\`bash
   bun build
   \`\`\`
8. Set up a \`.env\` file with the following variable for local development:
   \`\`\`env
   DATABASE_URL=<your-neon-postgres-url>
   PORT=<port number>
   NODE_ENV=production
   \`\`\`

7. Start the development server:
   \`\`\`bash
   bun start
   \`\`\`
In the future, Docker support will be added for easier setup.


## Future Plans

- Docker support for seamless deployment.
- Enhanced AI integration for smarter task and project management.
- Additional features based on user feedback.

## License

This project is licensed under the MIT License. See the LICENSE file for details. 

---

Start using Buug today and streamline your workflow!
`;

  return (
    <section className="overflow-scroll m-0 p-0 relative h-full pt-5 px-4">
      <h1 className="text-4xl font-bold">⚡ Installation</h1>
      <div className="prose mt-10 text-primary ml-40">
        
<Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
    {buugMarkdown}
  </Markdown>
      </div>

      <Pagination link1="/new" name1="What's new?" link2="/guide" name2="Guides"/>
    </section>
  );
}
