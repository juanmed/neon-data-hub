import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Database, Upload, Search, Tag, ShoppingCart, Globe } from "lucide-react";

const features = [
  { icon: Database, title: "Session-Centric Robotics Data", description: "Organize data by recording sessions with full metadata and provenance tracking." },
  { icon: Upload, title: "Multimodal Uploads", description: "Upload video, LiDAR, IMU, audio, and point clouds in a single session." },
  { icon: Search, title: "Searchable Datasets", description: "Find exactly the data you need with powerful search and filtering." },
  { icon: Tag, title: "Annotation Tools", description: "Label, segment, and annotate data directly in your browser." },
  { icon: ShoppingCart, title: "Dataset Marketplace", description: "Publish datasets and monetize your robotic data collection efforts." },
  { icon: Globe, title: "Browser-Based Platform", description: "No installs. Access everything from your browser on any device." },
];

export default function LandingPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl font-bold tracking-tight text-foreground md:text-8xl">
              <span className="glow-blue text-primary">Gamiphy</span>
              <span className="glow-purple text-accent">AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Capture, organize, search, annotate, publish, and monetize multimodal robotic data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="rounded-xl bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(210_100%_60%/0.4)]"
            >
              Enter Platform
            </Link>
            <Link
              to="/marketplace"
              className="neon-border rounded-xl px-8 py-3.5 font-medium text-foreground transition-all hover:bg-muted/30"
            >
              Explore Datasets
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Built for Robotics Data"
            subtitle="Everything you need to collect, manage, and share robotic datasets at scale."
            align="center"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:neon-border hover:bg-card/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
