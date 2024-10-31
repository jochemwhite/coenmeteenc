'use client'
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/lib/constant";
import { PortfolioCategories } from "@/types";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const categories = ["all", "video-editing", "camera-work", "2d-animation"];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategories>("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const router = useRouter();

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  useEffect(() => {
    if (!categories.includes(category) || category === "all") {
      setActiveCategory("all");
      setFilteredItems(portfolioItems);
      router.replace("/portfolio");
    } else {
      setActiveCategory(category as PortfolioCategories);
      setFilteredItems(portfolioItems.filter((item) => item.categories.includes(category as PortfolioCategories)));
    }
  }, [activeCategory, category, router]);

  return (
    <div className="min-h-screen text-white p-8">
      <nav className="mb-8">
        <ul className="flex space-x-4 justify-center">
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/portfolio?category=${category}`} className={cn("text-gray-400 hover:text-white", category === activeCategory ? "text-white " : "")}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <img src={item.image} alt={item.image} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.categories.join(" / ")}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}