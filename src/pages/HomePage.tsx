export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Grants Later v2.0
        </h1>
        <p className="text-xl text-muted-foreground">
          Modern grant management with AI-powered validation, real-time updates,
          and bidirectional Notion sync
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            title="AI Quick Entry"
            description="Describe transactions in natural language and let AI do the rest"
            icon="🤖"
          />
          <FeatureCard
            title="Real-time Validation"
            description="Instant feedback with V001-V201 rule engine"
            icon="⚡"
          />
          <FeatureCard
            title="Notion Sync"
            description="Bidirectional sync with 8 Notion databases"
            icon="🔄"
          />
        </div>

        <div className="pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">System Online - Module 01 Complete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}