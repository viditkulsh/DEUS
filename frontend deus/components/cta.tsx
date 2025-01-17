import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.2,
      delayChildren: 0.3,
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function CTA() {
  return (
    <section id="cta" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg p-8 md:p-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Ready to Experience Cross-Chain Freedom?
        </motion.h2>
        <motion.p 
          className="text-xl text-white mb-8"
          variants={itemVariants}
        >
          Join thousands of users already benefiting from seamless blockchain interoperability.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button size="lg" variant="secondary" className="group">
            Get Started Now 
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
      </motion.div>
    </section>
  )
}

