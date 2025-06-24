"use client"

import { useState, useEffect } from "react"
import { Search, Sparkles, ArrowRight, Star, Play, Zap, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentPrompt, setCurrentPrompt] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const featuredPrompts = [
    {
      title: "Viral Marketing Genius",
      description: "Transform any product into viral content",
      preview: "Create 10 viral marketing angles for [PRODUCT] that tap into psychological triggers...",
      price: 49,
      rating: 4.9,
      sales: 2847,
      creator: "Sarah Chen",
      gradient: "from-pink-400 via-purple-400 to-indigo-400",
    },
    {
      title: "Code Review Master",
      description: "AI-powered code analysis that impresses",
      preview: "Analyze this code like a senior engineer with 15 years of experience...",
      price: 65,
      rating: 5.0,
      sales: 1923,
      creator: "Alex Rodriguez",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      title: "Midjourney Wizard",
      description: "Create stunning visuals that stop scrolling",
      preview: "/imagine a [SUBJECT] in cinematic lighting, hyperrealistic, 8k resolution...",
      price: 39,
      rating: 4.8,
      sales: 3156,
      creator: "Luna Park",
      gradient: "from-orange-400 via-red-400 to-pink-400",
    },
  ]

  const trendingPrompts = [
    {
      title: "Instagram Growth Hacker",
      description: "Turn followers into customers",
      price: 29,
      rating: 4.9,
      sales: 1247,
      creator: "Sarah Chen",
      tags: ["Marketing", "Social"],
    },
    {
      title: "Email Sequence Master",
      description: "Convert leads with psychology",
      price: 45,
      rating: 5.0,
      sales: 892,
      creator: "Mike Johnson",
      tags: ["Email", "Sales"],
    },
    {
      title: "SEO Content Generator",
      description: "Rank #1 with AI-written content",
      price: 35,
      rating: 4.8,
      sales: 2156,
      creator: "Emma Davis",
      tags: ["SEO", "Content"],
    },
    {
      title: "LinkedIn Authority Builder",
      description: "Become a thought leader fast",
      price: 55,
      rating: 4.9,
      sales: 743,
      creator: "David Kim",
      tags: ["LinkedIn", "Personal Brand"],
    },
    {
      title: "YouTube Script Genius",
      description: "Scripts that get millions of views",
      price: 42,
      rating: 4.7,
      sales: 1834,
      creator: "Rachel Green",
      tags: ["YouTube", "Video"],
    },
    {
      title: "Product Launch Formula",
      description: "Launch products that sell themselves",
      price: 89,
      rating: 5.0,
      sales: 567,
      creator: "Tom Wilson",
      tags: ["Product", "Launch"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
            transition: "all 0.5s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-200/40 to-orange-200/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse" />
          </div>
          <span className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            PROOMT
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-all hover:scale-105">
            Explore
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-all hover:scale-105">
            Sell
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold transition-all hover:scale-105">
            Community
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-semibold hover:bg-gray-100/50">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl rounded-2xl px-8 font-semibold hover:scale-105 transition-all">
            Start Selling
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 mb-8 px-6 py-3 text-base font-bold rounded-full shadow-lg">
              ✨ The AI Prompt Revolution
            </Badge>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent block">
                FIND
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                PERFECT
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent block">
                PROMPTS
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Premium AI prompts that actually work.
              <br />
              <span className="text-gray-900 font-bold">Buy, sell, create magic.</span>
            </p>
          </div>

          {/* Interactive Search */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <div className="flex items-center">
                  <Search className="w-7 h-7 text-gray-400 ml-6" />
                  <Input
                    placeholder="Search viral marketing, code review, art prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-xl placeholder:text-gray-400 focus:ring-0 focus:outline-none px-6 py-6"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-2xl px-10 py-6 shadow-xl text-lg font-semibold hover:scale-105 transition-all">
                    Search
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Prompt Carousel */}
          <div className="relative max-w-5xl mx-auto mb-20">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              {featuredPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentPrompt ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${prompt.gradient} rounded-3xl p-12 text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                    <div className="relative z-10 h-full flex items-center">
                      <div className="flex-1">
                        <Badge className="bg-white/20 text-white border-0 mb-4 px-4 py-2 font-semibold">
                          Featured Prompt
                        </Badge>
                        <h3 className="text-4xl font-black mb-4">{prompt.title}</h3>
                        <p className="text-xl mb-6 opacity-90">{prompt.description}</p>
                        <div className="bg-black/30 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                          <p className="text-sm opacity-75 mb-2">Preview:</p>
                          <p className="font-mono text-sm">{prompt.preview}</p>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-3xl font-black">${prompt.price}</div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-bold">{prompt.rating}</span>
                          </div>
                          <div className="text-sm opacity-75">{prompt.sales} sales</div>
                        </div>
                      </div>
                      <div className="ml-12">
                        <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-2xl px-8 py-4 font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                          Try Now
                          <Play className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-3">
              {featuredPrompts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPrompt(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPrompt ? "bg-blue-500 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            <div className="text-center group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105">
                <div className="text-4xl font-black text-gray-900 mb-2">12,847</div>
                <div className="text-gray-600 font-semibold">Premium Prompts</div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105">
                <div className="text-4xl font-black text-gray-900 mb-2">3,291</div>
                <div className="text-gray-600 font-semibold">Top Creators</div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105">
                <div className="text-4xl font-black text-gray-900 mb-2">$2.1M</div>
                <div className="text-gray-600 font-semibold">Creator Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Grid */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-black text-gray-900">Trending Now</h2>
            <Button
              variant="outline"
              className="bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900 shadow-xl rounded-2xl px-8 py-4 font-semibold hover:scale-105 transition-all"
            >
              View All
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPrompts.map((prompt, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold text-gray-900">{prompt.rating}</span>
                      <span className="text-gray-500 text-sm">({prompt.sales})</span>
                    </div>
                    <div className="text-2xl font-black text-gray-900">${prompt.price}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {prompt.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{prompt.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {prompt.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-gray-100 text-gray-700 border-0 px-3 py-1 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">by {prompt.creator}</span>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500 p-2">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-500 p-2">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-16 shadow-2xl">
              <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Ready to Start?
              </h2>
              <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Join thousands earning from AI prompts.
                <br />
                <span className="text-gray-900 font-bold">Your creativity has value.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl rounded-2xl text-xl px-12 py-6 font-bold hover:scale-105 transition-all"
                >
                  Explore Prompts
                  <Sparkles className="w-6 h-6 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900 shadow-xl rounded-2xl text-xl px-12 py-6 font-bold hover:scale-105 transition-all"
                >
                  Start Selling
                  <Zap className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 backdrop-blur-xl bg-white/70 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-3xl font-black text-gray-900">PROOMT</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-105">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-105">
                Help
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-105">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-105">
                Privacy
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 font-medium">
            <p>&copy; 2024 PROOMT. Where creativity meets opportunity.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
