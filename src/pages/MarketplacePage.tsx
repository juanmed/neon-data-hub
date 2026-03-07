import { MainLayout } from "@/layouts/MainLayout";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { mockListings } from "@/data/mock";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function MarketplacePage() {
  return (
    <MainLayout>
      <PageContainer>
        <SectionHeader title="Marketplace" subtitle="Discover and download curated robotic datasets." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockListings.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:neon-border"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{listing.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {listing.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground">${listing.price}</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>{listing.rating}</span>
                  <span>· {listing.downloads} downloads</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </MainLayout>
  );
}
