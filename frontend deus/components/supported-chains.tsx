import Image from 'next/image'
import { motion } from 'framer-motion'

const chains = [
  { name: "Ethereum", logo: "/placeholder.svg?height=64&width=64" },
  { name: "Solana", logo: "/placeholder.svg?height=64&width=64" },
  { name: "Binance Smart Chain", logo: "/placeholder.svg?height=64&width=64" },
  { name: "Polygon", logo: "/placeholder.svg?height=64&width=64" },
  { name: "Avalanche", logo: "/placeholder.svg?height=64&width=64" },
  { name: "Cardano", logo: "/placeholder.svg?height=64&width=64" },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function SupportedChains() {
  return (
    <section id="chains" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Supported Chains
      </motion.h2>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {chains.map((chain, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <Image src={chain.logo} alt={chain.name} width={64} height={64} className="rounded-full" />
            <span className="text-sm font-medium">{chain.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

