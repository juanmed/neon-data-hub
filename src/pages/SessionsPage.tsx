import { MainLayout } from "@/layouts/MainLayout";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { mockSessions } from "@/data/mock";
import { motion } from "framer-motion";

const statusColors: Record<string, string> = {
  ready: "bg-emerald-500/20 text-emerald-400",
  processing: "bg-amber-500/20 text-amber-400",
  recording: "bg-red-500/20 text-red-400",
  archived: "bg-muted text-muted-foreground",
};

function formatSize(bytes: number) {
  const gb = bytes / 1_000_000_000;
  return gb >= 1 ? `${gb.toFixed(1)} GB` : `${(bytes / 1_000_000).toFixed(0)} MB`;
}

export default function SessionsPage() {
  return (
    <MainLayout>
      <PageContainer>
        <SectionHeader title="Sessions" subtitle="Your robotics data recording sessions." />
        <div className="mt-10 grid gap-4">
          {mockSessions.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-all hover:neon-border"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{session.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{session.description}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[session.status]}`}>
                  {session.status}
                </span>
              </div>
              <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
                <span>{session.robotType}</span>
                <span>{session.streamCount} streams</span>
                <span>{formatSize(session.totalSize)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </MainLayout>
  );
}
