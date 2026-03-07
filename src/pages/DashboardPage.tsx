import { MainLayout } from "@/layouts/MainLayout";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Database, Upload, Key, ShoppingCart } from "lucide-react";

const stats = [
  { label: "Sessions", value: "3", icon: Database },
  { label: "Total Uploads", value: "9", icon: Upload },
  { label: "API Keys", value: "1", icon: Key },
  { label: "Orders", value: "1", icon: ShoppingCart },
];

export default function DashboardPage() {
  return (
    <MainLayout>
      <PageContainer>
        <SectionHeader title="Dashboard" subtitle="Your GamiphyAI overview." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </MainLayout>
  );
}
