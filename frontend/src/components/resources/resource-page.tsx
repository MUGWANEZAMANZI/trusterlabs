"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  link: string;
  type: string;
}

interface ResourcePageProps {
  title: string;
  description: string;
  resources: Resource[];
  category: string;
}

export function ResourcePage({
  title,
  description,
  resources,
}: ResourcePageProps) {
  const router = useRouter();

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "course":
        return "bg-blue-100 text-blue-800";
      case "tool":
        return "bg-green-100 text-green-800";
      case "framework":
        return "bg-purple-100 text-purple-800";
      case "training":
        return "bg-yellow-100 text-yellow-800";
      case "documentation":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Resources
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-full p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all group-hover:border-blue-300">
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTypeColor(
                        resource.type
                      )}`}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span>Visit resource</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
