"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Heart, Eye, Code, Palette, Database, Globe, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    fullDescription:
      "This comprehensive e-commerce platform represents the pinnacle of modern web development, combining cutting-edge technologies with user-centric design principles. Built from the ground up using React and Node.js, this solution provides a seamless shopping experience for customers while offering powerful management tools for administrators.\n\nThe platform features a robust product catalog system with advanced filtering and search capabilities, allowing customers to easily find what they're looking for. The shopping cart functionality includes real-time inventory checking, automatic tax calculations, and multiple shipping options. Payment processing is handled through Stripe integration, supporting credit cards, digital wallets, and buy-now-pay-later options.\n\nThe admin dashboard provides comprehensive analytics, inventory management, order processing, and customer relationship management tools. Real-time notifications keep administrators informed of new orders, low stock alerts, and system updates. The platform also includes advanced SEO optimization, mobile responsiveness, and performance optimization techniques to ensure fast loading times and excellent search engine rankings.\n\nSecurity features include encrypted data transmission, secure payment processing, user authentication with JWT tokens, and protection against common web vulnerabilities. The system is designed to scale horizontally, supporting high traffic volumes and large product catalogs without performance degradation.\n\nThe development process followed industry best practices including test-driven development, continuous integration, and comprehensive documentation. The codebase is modular and maintainable, making it easy to add new features or modify existing functionality. Performance optimization techniques include lazy loading, image optimization, database indexing, and caching strategies that ensure fast response times even under heavy load.",
    image: "/placeholder.svg?height=600&width=800",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "For Sale",
    price: "$2,500",
    category: "Web Development",
    likes: 142,
    views: 2847,
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    fullDescription:
      "This revolutionary fitness application transforms the way people approach their health and wellness journey. Developed using React Native for cross-platform compatibility, the app delivers a native experience on both iOS and Android devices while maintaining a single codebase for efficient development and maintenance.\n\nThe core functionality revolves around personalized workout plans that adapt to user preferences, fitness levels, and available equipment. The AI-powered recommendation engine analyzes user behavior, progress, and goals to suggest optimal workout routines and nutrition plans. Users can track various metrics including steps, calories burned, heart rate, sleep patterns, and body measurements.\n\nSocial features enable users to connect with friends, join fitness challenges, and share achievements. The community aspect includes leaderboards, group challenges, and the ability to follow favorite trainers or fitness influencers. Real-time chat functionality allows users to communicate during workouts and provide mutual support and motivation.\n\nThe app integrates with popular wearable devices and health platforms, automatically syncing data from Apple Health, Google Fit, Fitbit, and other fitness trackers. Advanced analytics provide detailed insights into progress trends, helping users understand their fitness journey and make informed decisions about their health.\n\nTechnical features include offline functionality for workouts, push notifications for reminders and achievements, video streaming for exercise demonstrations, and robust data synchronization across devices. The backend infrastructure uses Firebase for real-time data synchronization, user authentication, and cloud storage, ensuring reliable performance and data security.",
    image: "/placeholder.svg?height=600&width=800",
    skills: ["React Native", "Firebase", "Redux", "TypeScript"],
    type: "Showcase",
    category: "Mobile Development",
    likes: 89,
    views: 1523,
  },
  // Add more projects with full descriptions...
]

const skillIcons = {
  React: <Code className="w-4 h-4" />,
  "Node.js": <Database className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  Python: <Code className="w-4 h-4" />,
  Unity: <Palette className="w-4 h-4" />,
  Docker: <Globe className="w-4 h-4" />,
  "React Native": <Smartphone className="w-4 h-4" />,
  Firebase: <Database className="w-4 h-4" />,
  Redux: <Code className="w-4 h-4" />,
  TypeScript: <Code className="w-4 h-4" />,
  Stripe: <Code className="w-4 h-4" />,
}

interface ProjectDetailProps {
  projectId: number
  onBack: () => void
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [showSignInDialog, setShowSignInDialog] = useState(false)

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  const handleLikeClick = () => {
    setShowSignInDialog(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Image with Title Overlay */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="absolute bottom-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-300" />
                <span className="text-white font-medium">{project.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tech Stack and Type */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 px-3 py-1"
                      >
                        {skillIcons[skill as keyof typeof skillIcons] || <Code className="w-4 h-4" />}
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <Badge
                    variant={project.type === "For Sale" ? "default" : "secondary"}
                    className={`${
                      project.type === "For Sale"
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                    } font-semibold px-4 py-2 text-sm`}
                  >
                    {project.type}
                  </Badge>
                  {project.price && (
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{project.price}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Description</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {project.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Project Stats</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-400">Total Likes</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">{project.likes}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">Views</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">{project.views.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Category</span>
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleLikeClick}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Like Project
                </Button>

                {project.type === "For Sale" && (
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
                    Purchase Project
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Contact Developer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign-In Dialog */}
      <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Sign In Required
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              You need to sign in to like projects and interact with the community.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
              Sign In with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Sign In with GitHub
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">Or</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Create Account
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
