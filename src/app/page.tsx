'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <div className="relative w-[300px] h-[400px] mx-auto">
                <Image
                  src="/images/character-standing.png"
                  alt="CoinMeme CTO"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            $Coin-Meme <span className="text-blue-500">CTO</span>
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
              className="px-8 py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 font-semibold hover:border-blue-500 hover:shadow-lg transition-all"
            >
              View Chart
            </a>
            
              href="https://t.me/CoinMemeCTO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              Join Community
            </a>
          </motion.div>

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

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Wait... what?
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              <p>This started as a joke.</p>
              <p>Then people didn't leave.</p>
              <p className="text-blue-500 font-semibold">That's when it got interesting.</p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <motion.p className="mt-8 text-xl text-gray-700 italic">
              "Damn... that's actually true."
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              CTO Reality
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700">
              <p>No dev.</p>
              <p>No paid marketing.</p>
              <p className="text-blue-500 font-semibold text-2xl">
                Direction over promises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-yellow-400/10 to-green-500/20"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              You're either early...
            </h2>
            <p className="text-3xl md:text-4xl text-gray-600 mb-12">
              Or watching.
            </p>

            <div className="flex justify-center">
              
                href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-blue-500 text-white rounded-full font-bold text-xl hover:bg-blue-600 hover:shadow-2xl transition-all"
              >
                Join the Experiment
              </a>
            </div>

            <div className="mt-12 flex gap-6 justify-center flex-wrap">
              
                href="https://x.com/i/communities/2002714238331080902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                X Community
              </a>
              <span className="text-gray-400">•</span>
              
                href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                Telegram
              </a>
              <span className="text-gray-400">•</span>
              
                href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                Chart
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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
