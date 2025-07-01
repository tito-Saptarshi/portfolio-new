import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projects, skills, socialLinks } from '../lib/constants'
import { SidebarTrigger } from '@/components/ui/sidebar'

export const Hero = () => {
  return (
   <div className="container mx-auto px-2">
          <main className="relative z-10 px-2">
                      {/* <SidebarTrigger className="-ml-5 md:p-5" size="icon"/> */}
                {/* Hero Section */}
                <section id="home" className="container py-5 md:py-10">
                  <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                      <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Available for Work
                      </div>
        
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
                        Hi, I&apos;m <br />
                        <span className="relative">
                          John Doe
                          <span className="absolute -bottom-2 left-0 w-full h-1 bg-black dark:bg-white"></span>
                        </span>
                      </h1>
        
                      <div className="flex flex-wrap gap-3 text-xl text-black/70 dark:text-white/70">
                        <span className="font-semibold">Full Stack Developer</span>
                        <span>&</span>
                        <span className="font-semibold">UI/UX Designer</span>
                      </div>
        
                      <div className="max-w-[600px] text-black/60 dark:text-white/60 text-lg leading-relaxed">
                        <p className="mb-4">
                          I&lsquo;m a passionate full-stack developer with over 5 years of experience creating digital solutions that
                          make a difference. I specialize in modern web technologies and love turning complex problems into
                          simple, beautiful designs.
                        </p>
                      </div>
        
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          size="lg"
                          className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 rounded-full px-8"
                        >
                          View My Work
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full px-8"
                        >
                          Contact Me
                        </Button>
                      </div>
        
                      {/* Social Links */}
                      <div className="flex items-center gap-6 pt-8">
                        {socialLinks.map((social) => (
                          <Link
                            key={social.name}
                            href={social.url}
                            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <social.icon className="h-6 w-6" />
                          </Link>
                        ))}
                      </div>
                    </div>
        
                    <div className="flex-1 relative">
                      <div className="relative z-10 aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 border-[20px] border-white dark:border-black rounded-3xl transform rotate-6"></div>
                        <Image
                         src="/profile-2.jpg"
                          alt="Profile Photo"
                          width={500}
                          height={500}
                          className="rounded-3xl object-cover z-20 relative"
                        />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-black/20 dark:border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-dashed border-black/10 dark:border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                    </div>
                  </div>
                </section>
        
                {/* Skills Section */}
                <section className="py-20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 skew-y-3"></div>
                  <div className="container relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center mb-6">
                            <skill.icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{skill.name}</h3>
                          <p className="text-black/60 dark:text-white/60">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        
                {/* Recent Projects Section */}
                <section id="projects" className="container py-20 md:py-32">
                  <div className="flex flex-col space-y-4 mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm self-start">
                      Featured Work
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Recent Projects</h2>
                    <p className="max-w-[600px] text-black/60 dark:text-white/60 text-lg">
                      Here are some of my latest projects that showcase my skills and expertise in web development.
                    </p>
                  </div>
        
                  <div className="space-y-32">
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className={`flex flex-col ${
                          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-12 items-center`}
                      >
                        <div className="flex-1 relative group">
                          <div className="absolute inset-0 border-2 border-black/10 dark:border-white/10 rounded-3xl transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                          <div className="relative overflow-hidden rounded-3xl border-2 border-black/20 dark:border-white/20">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 dark:group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Button
                                size="lg"
                                className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
                              >
                                View Project
                              </Button>
                            </div>
                          </div>
                          <Badge
                            className={`absolute top-4 right-4 ${
                              project.type === "For Sale"
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-white text-black dark:bg-black dark:text-white"
                            }`}
                          >
                            {project.type}
                          </Badge>
                        </div>
                        <div className="flex-1 space-y-6">
                          <h3 className="text-3xl font-bold text-black dark:text-white">{project.title}</h3>
                          <p className="text-black/60 dark:text-white/60 text-lg">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 rounded-full px-4 py-1"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <Link
                            href={project.link}
                            className="inline-flex items-center text-black dark:text-white font-medium hover:underline mt-4"
                          >
                            View Project Details
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
        
                  <div className="flex justify-center mt-20">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full px-8"
                    >
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </section>
        
                {/* Call to Action */}
                <section className="py-20 md:py-32 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 -skew-y-3"></div>
                  <div className="container relative">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-3xl p-12 md:p-16 text-center">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Let&apos;s Work Together</h2>
                      <p className="text-black/60 dark:text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your
                        ideas to life.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 rounded-full px-8"
                        >
                          Get In Touch
                          <Mail className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full px-8"
                        >
                          View Resume
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
    </div>
  )
}

