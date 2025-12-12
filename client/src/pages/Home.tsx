import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from "recharts";
import { Server, Globe, Cpu, Activity, Users, Shield, Zap, Code, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const serverData = [
  { time: "00:00", players: 120, load: 45 },
  { time: "04:00", players: 80, load: 30 },
  { time: "08:00", players: 150, load: 55 },
  { time: "12:00", players: 320, load: 75 },
  { time: "16:00", players: 450, load: 85 },
  { time: "20:00", players: 580, load: 92 },
  { time: "23:59", players: 490, load: 80 },
];

const performanceData = [
  { name: "Web", uptime: 99.9, speed: 95 },
  { name: "DB", uptime: 99.8, speed: 92 },
  { name: "API", uptime: 99.95, speed: 98 },
  { name: "CDN", uptime: 100, speed: 99 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Animated Background Effect */}
      <AnimatedBackground />

      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary animate-pulse" />
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold tracking-wider text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                RTC ENTERTAINMENT
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">SERVICE</a>
            <a href="#stats" className="hover:text-primary transition-colors">STATUS</a>
            <Link href="/gallery" className="hover:text-primary transition-colors">ABOUT</Link>
            <Link href="/contact">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
            <img
              src="/images/cover.png"
              alt="Rtc Entertainment Cover"
              className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            />
          </div>

          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 text-xs tracking-[0.2em]">
                SYSTEM ONLINE
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                RTC<br />ENTERTAINMENT
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
                เซิฟเวอร์ FiveM พรีเมียม เว็บไซต์ประสิทธิภาพสูง และการพัฒนาระบบแบบกำหนดเอง
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none text-lg px-8">
                    <Zap className="mr-2 h-5 w-5" /> START PROJECT
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary text-lg px-8">
                    VIEW PROTFOLIO
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">CORE SERVICES</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-10 h-10 text-primary" />,
                  title: "พัฒนาเว็บไซต์",
                  desc: "เว็บไซต์ที่ตอบสนองและเร็วสูงที่ปรับแต่งสำหรับชุมชนเกมมิ่งและธุรกิจ",
                  features: ["React/Next.js", "SEO ปรับปรุง", "ออกแบบแบบกำหนดเอง"]
                },
                {
                  icon: <Server className="w-10 h-10 text-secondary" />,
                  title: "เซิฟเวอร์ FiveM",
                  desc: "โฮสติ้งเซิฟเวอร์ที่ปราศจากความล่าช้าและป้องกัน DDoS พร้อมการรวมสคริปต์แบบกำหนดเอง",
                  features: ["99.9% Uptime", "ป้องกันการโกง", "สคริปต์แบบกำหนดเอง"]
                },
                {
                  icon: <Code className="w-10 h-10 text-accent-foreground" />,
                  title: "พัฒนาระบบ",
                  desc: "โซลูชันซอฟต์แวร์และเครื่องมือการอัตโนมัติที่ปรับแต่งสำหรับความต้องการของคุณ",
                  features: ["Discord Bots", "การรวม API", "ฐานข้อมูล"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group h-full">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="stats" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">WHY CHOOSE US</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                เหตุผลที่คุณควรเลือกใช้บริการของเรา เราให้มากกว่าแค่บริการ แต่เป็นพาร์ทเนอร์ที่คุณไว้วางใจได้
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "ความปลอดภัยสูงสุด",
                  desc: "ระบบป้องกัน DDoS และการเข้ารหัสข้อมูลระดับสูง รับประกันความปลอดภัยของข้อมูลและเซิฟเวอร์",
                  color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "ประสิทธิภาพสูง",
                  desc: "เซิฟเวอร์ที่เร็วและเสถียร ด้วยเทคโนโลยีล่าสุด รองรับผู้เล่นได้มากถึง 1000+ คนพร้อมกัน",
                  color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "ทีมซัพพอร์ต 24/7",
                  desc: "ทีมงานมืออาชีพพร้อมให้บริการตลอด 24 ชั่วโมง ตอบกลับรวดเร็วภายใน 5 นาที",
                  color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Development",
                  desc: "พัฒนาระบบและสคริปต์ตามความต้องการ ด้วยทีมนักพัฒนาที่มีประสบการณ์มากกว่า 3 ปี",
                  color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
                },
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: "Uptime 99.9%",
                  desc: "รับประกันเวลาทำงานของระบบ 99.9% พร้อมระบบ Backup อัตโนมัติทุกวัน",
                  color: "from-red-500/20 to-rose-500/20 border-red-500/30"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "เทคโนโลยีทันสมัย",
                  desc: "ใช้เทคโนโลยีล่าสุด React, Node.js, และ Cloud Infrastructure สำหรับประสิทธิภาพสูงสุด",
                  color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full group`}>
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <div className="text-primary">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-black/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">MEET THE DEVELOPER</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-card/80 to-black/60 border-primary/30 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,243,255,0.25)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Developer Image */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                        <img
                          src="/images/developer.jpg"
                          alt="Rotjanasak Poemtoem - Developer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-black rounded-full p-3 shadow-lg">
                        <Code className="w-6 h-6" />
                      </div>
                    </motion.div>

                    {/* Developer Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 text-xs mb-3">
                          Lead Developer
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                          Rotjanasak Poemtoem
                        </h3>
                        <p className="text-primary text-lg font-medium mb-4">Full Stack Developer & System Architect</p>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                        ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และระบบ FiveM มีประสบการณ์ในการสร้างโซลูชันที่ทันสมัย
                        มุ่งมั่นในการส่งมอบผลงานคุณภาพสูงและประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
                      </p>

                      {/* Programming Skills */}
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-3 font-medium">ความเชี่ยวชาญด้านภาษาโปรแกรม:</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {[
                            { name: "Python", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
                            { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
                            { name: "Lua", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
                            { name: "HTML", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
                            { name: "CSS", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                            { name: "PHP", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
                            { name: "SQL", color: "bg-green-500/20 text-green-400 border-green-500/30" }
                          ].map((lang, i) => (
                            <Badge key={i} variant="outline" className={`${lang.color} hover:scale-110 transition-transform cursor-default px-3 py-1`}>
                              {lang.name}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Link href="/contact">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.3)] w-full sm:w-auto">
                            <Zap className="mr-2 h-4 w-4" />
                            ติดต่อนักพัฒนา
                          </Button>
                        </Link>
                        <a href="https://www.facebook.com/profile.php?id=100083410325446" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary w-full sm:w-auto">
                            <Users className="mr-2 h-4 w-4" />
                            Facebook
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary/20">
                    {[
                      { label: "โครงการสำเร็จ", value: "10+", icon: <Zap className="w-5 h-5" /> },
                      { label: "ลูกค้าพึงพอใจ", value: "100%", icon: <Users className="w-5 h-5" /> },
                      { label: "ประสบการณ์", value: "3 ปี", icon: <Code className="w-5 h-5" /> }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all group"
                      >
                        <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                          {stat.icon}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-border/40 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">RTC ENTERTAINMENT</h3>
                <p className="text-muted-foreground text-sm">พลังของเจนเนอเรชั่นถัดไปของชุมชนเกมมิ่ง</p>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="hover:text-white transition-colors">เงื่อนไขการใช้บริการ</a>
                <a href="https://www.facebook.com/profile.php?id=100083410325446" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ติดต่อ</a>
              </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-600">
              © 2025 Rtc Entertainment. สงวนลิขสิทธิ์
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
