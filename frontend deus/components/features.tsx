import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, Shield, Zap, Globe } from 'lucide-react'

const features = [
  {
    title: "Cross-Chain Transfers",
    description: "Seamlessly move assets between different blockchain networks with ease and security.",
    icon: Link2,
  },
  {
    title: "Enhanced Security",
    description: "State-of-the-art security measures to protect your assets during cross-chain transactions.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Experience rapid transaction speeds across multiple chains, powered by advanced protocols.",
    icon: Zap,
  },
  {
    title: "Global Accessibility",
    description: "Access a wide range of blockchain networks and DeFi protocols from a single platform.",
    icon: Globe,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3,
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Features
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

