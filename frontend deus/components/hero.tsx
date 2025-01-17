import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 0.2,
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Hero() {
  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"
          variants={itemVariants}
        >
          Seamless Cross-Chain Interoperability
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Connect and transact across multiple blockchains with ease. Experience the future of decentralized finance.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button size="lg" className="mt-8 group">
            Explore Now 
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

