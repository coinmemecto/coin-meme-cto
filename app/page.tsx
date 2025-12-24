'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-soft-yellow/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Character - Hero pose */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <Image
                src="/images/character-standing.png"
                alt="CoinMeme CTO"
                width={300}
                height={400}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            $Coin-Meme <span className="text-electric-blue">CTO</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A memecoin that evolved without permission.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
              href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 font-semibold hover:border-electric-blue hover:shadow-lg transition-all"
            >
              View Chart
            </a>
            
              href="https://t.me/CoinMemeCTO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-electric-blue text-white rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              Join Community
            </a>
          </motion.div>

          {/* CA */}
          <motion.div
            className="mt-8 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2 font-medium">Contract Address:</p>
            <code className="bg-white/50 px-4 py-2 rounded-lg text-xs break-all">
              BBqYTFGCj7Uia5qWHHQmxRx4jhQcFHydEynv2r3ipump
            </code>
          </motion.div>
        </div>
      </section>

      {/* Wait What Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/character-cool.png"
                alt="CoinMeme thinking"
                width={200}
                height={300}
                className="mx-auto drop-shadow-xl"
              />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Wait... what?
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              <p>This started as a joke.</p>
              <p>Then people didn't leave.</p>
              <p className="text-electric-blue font-semibold">That's when it got interesting.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Formula Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              The Formula
            </h2>

            {/* Lab character */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/character-lab.png"
                alt="CoinMeme in lab"
                width={350}
                height={500}
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Formula displays */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <Image
                  src="/images/formula-viral.png"
                  alt="Viral Formula"
                  width={500}
                  height={300}
                  className="w-full rounded-lg"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <Image
                  src="/images/formula-moon.png"
                  alt="Moon Formula"
                  width={500}
                  height={300}
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>

            <motion.p
              className="mt-8 text-xl text-gray-700 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "Damn... that's actually true."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTO Reality Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Traveler character */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/character-traveler.png"
                alt="CoinMeme traveling"
                width={300}
                height={400}
                className="mx-auto drop-shadow-xl"
              />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              CTO Reality
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700">
              <p>No dev.</p>
              <p>No paid marketing.</p>
              <p className="text-electric-blue font-semibold text-2xl">
                Direction over promises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Teacher character */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/formula-community.png"
                alt="Community is everything"
                width={400}
                height={300}
                className="mx-auto drop-shadow-xl rounded-lg"
              />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Why It Works
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              <p>It mocks trends instead of chasing them.</p>
              <p>It feels discovered, not sold.</p>
              <p className="text-clean-green font-semibold">The formula keeps evolving.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-soft-yellow/10 to-clean-green/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <Image
                src="/images/character-confident.png"
                alt="CoinMeme confident"
                width={250}
                height={350}
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              You're either early...
            </h2>
            <p className="text-3xl md:text-4xl text-gray-600 mb-12">
              Or watching.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              
                href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-electric-blue text-white rounded-full font-bold text-xl hover:bg-blue-600 hover:shadow-2xl transition-all"
              >
                Join the Experiment
              </a>
            </motion.div>

            {/* Social links */}
            <div className="mt-12 flex gap-6 justify-center">
              
                href="https://x.com/i/communities/2002714238331080902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-electric-blue transition-colors font-medium"
              >
                X Community
              </a>
              <span className="text-gray-400">•</span>
              
                href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-electric-blue transition-colors font-medium"
              >
                Telegram
              </a>
              <span className="text-gray-400">•</span>
              
                href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-electric-blue transition-colors font-medium"
              >
                Chart
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white/30">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>$CoinMeme CTO • Community-driven • No promises, just direction</p>
          <p className="mt-2 text-xs text-gray-500">
            This is an experiment. Not financial advice. DYOR.
          </p>
        </div>
      </footer>
    </main>
  )
}
