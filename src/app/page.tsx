import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioItem {
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and React.",
  },
  {
    title: "Project Two",
    description: "Full-stack application with TypeScript and Node.js backend.",
  },
  {
    title: "Project Three",
    description: "Mobile-responsive design using Tailwind CSS and Shadcn UI.",
  },
  {
    title: "Project Four",
    description: "Real-time data dashboard with performance optimization.",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-hero"
    >
      <div className="min-h-screen w-full bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center px-4 py-16">
          {/* Name Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight">
            Gideon Dern
          </h1>

          {/* Portfolio Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
