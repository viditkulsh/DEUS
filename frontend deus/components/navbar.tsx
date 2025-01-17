import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const linkVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } }
}

export default function Navbar() {
  return (
    <motion.nav 
      className="border-b"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="/" className="text-2xl font-bold text-primary">
                Deus
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="#features">
                <Button variant="ghost">Features</Button>
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="#chains">
                <Button variant="ghost">Supported Chains</Button>
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link href="#cta">
                <Button variant="default">Get Started</Button>
              </Link>
            </motion.div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

