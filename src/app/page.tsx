'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const floatingBeaker = {
    animate: {
      y: [-100, 800],
      x: [0, 50, -30, 20],
      rotate: [0, 360],
      opacity: [0, 1, 1, 0],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }

  const floatingFormula = {
    animate: {
      y: [-50, 900],
      x: [0, -40, 30, -20],
      opacity: [0, 0.6, 0.6, 0],
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "linear"
    }
  }

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute text-6xl opacity-20"
          style={{ left: '10%', top: '-10%' }}
          {...floatingBeaker}
          transition={{ ...floatingBeaker.transition, delay: 0 }}
        >
          🧪
        </motion.div>
        <motion.div
          className="absolute text-5xl opacity-20"
          style={{ left: '80%', top: '-15%' }}
          {...floatingBeaker}
          transition={{ ...floatingBeaker.transition, delay: 3 }}
        >
          ⚗️
        </motion.div>
        <motion.div
          className="absolute text-4xl opacity-15"
          style={{ left: '30%', top: '-8%' }}
          {...floatingFormula}
          transition={{ ...floatingFormula.transition, delay: 1.5 }}
        >
          Σ
        </motion.div>
        <motion.div
          className="absolute text-5xl opacity-15"
          style={{ left: '60%', top: '-12%' }}
          {...floatingFormula}
          transition={{ ...floatingFormula.transition, delay: 4 }}
        >
          π
        </motion.div>
        <motion.div
          className="absolute text-4xl opacity-20"
          style={{ left: '45%', top: '-10%' }}
          {...floatingBeaker}
          transition={{ ...floatingBeaker.transition, delay: 6 }}
        >
          🔬
        </motion.div>
        <motion.div
          className="absolute text-6xl opacity-15"
          style={{ left: '70%', top: '-5%' }}
          {...floatingFormula}
          transition={{ ...floatingFormula.transition, delay: 2 }}
        >
          ∫
        </motion.div>
        <motion.div
          className="absolute text-5xl opacity-20"
          style={{ left: '20%', top: '-18%' }}
          {...floatingBeaker}
          transition={{ ...floatingBeaker.transition, delay: 8 }}
        >
          💊
        </motion.div>
        <motion.div
          className="absolute text-4xl opacity-15"
          style={{ left: '90%', top: '-7%' }}
          {...floatingFormula}
          transition={{ ...floatingFormula.transition, delay: 5 }}
        >
          √
        </motion.div>
      </div>
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-yellow-300/15 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] mx-auto">
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            $Coin-Meme <span className="text-blue-500">CTO</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A memecoin that evolved without permission.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
          <a    href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 font-semibold hover:border-blue-500 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              View Chart
            </a>
            
           <a   href="https://t.me/CoinMemeCTO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Join Community
            </a>
          </motion.div>

          <motion.div
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-2 font-medium text-gray-500">Contract Address:</p>
            <code className="bg-white/60 px-6 py-3 rounded-xl text-xs md:text-sm break-all inline-block border border-gray-200">
              BBqYTFGCj7Uia5qWHHQmxRx4jhQcFHydEynv2r3ipump
            </code>
          </motion.div>
        </div>
      </section>  
    <section className="py-32 px-4 relative">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-12"
            >
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] mx-auto">
                <Image
                  src="/images/character-logo.png"
                  alt="CoinMeme"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
              Wait... what?
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light">
              <p>This started as a joke.</p>
              <p>Then people didn't leave.</p>
              <p className="text-blue-500 font-semibold text-2xl md:text-3xl">
                That's when it got interesting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    <section className="py-32 px-4 relative">
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-900">
              The Formula
            </h2>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-16"
            >
              <div className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px] mx-auto">
                <Image
                  src="/images/character-lab.png"
                  alt="CoinMeme in lab"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-16 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50"
              >
                <div className="relative w-full h-[280px] md:h-[320px]">
                  <Image
                    src="/images/formula-viral.png"
                    alt="Viral Formula"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50"
              >
                <div className="relative w-full h-[280px] md:h-[320px]">
                  <Image
                    src="/images/formula-moon.png"
                    alt="Moon Formula"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 max-w-3xl mx-auto"
            >
              <div className="relative w-full h-[280px] md:h-[320px]">
                <Image
                  src="/images/formula-behold.png"
                  alt="Behold the Formula"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>

            <motion.p
              className="mt-12 text-2xl md:text-3xl text-gray-700 italic font-light"
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
    <section className="py-32 px-4 relative">
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"
          animate={{
            y: [0, -35, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-12"
            >
              <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[420px] mx-auto">
                <Image
                  src="/images/character-traveler.png"
                  alt="CoinMeme traveling"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-900">
              CTO Reality
            </h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-gray-700 font-light">
              <p>No dev.</p>
              <p>No paid marketing.</p>
              <p className="text-blue-500 font-semibold text-3xl md:text-4xl mt-8">
                Direction over promises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    <section className="py-32 px-4 relative">
        <motion.div
          className="absolute top-40 right-1/4 w-72 h-72 bg-green-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-12"
            >
              <div className="relative w-full max-w-[450px] h-[280px] md:h-[320px] mx-auto">
                <Image
                  src="/images/formula-community.png"
                  alt="Community is everything"
                  fill
                  className="object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-900">
              Why It Works
            </h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              <p>It mocks trends instead of chasing them.</p>
              <p>It feels discovered, not sold.</p>
              <p className="text-green-500 font-semibold text-2xl md:text-3xl mt-8">
                The formula keeps evolving.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    <section className="py-40 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-yellow-400/15 to-green-500/20"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-12"
            >
              <div className="relative w-[220px] h-[320px] md:w-[280px] md:h-[380px] mx-auto">
                <Image
                  src="/images/character-confident.png"
                  alt="CoinMeme confident"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900">
              You're either early...
            </h2>
            <p className="text-3xl md:text-5xl text-gray-600 mb-16 font-light">
              Or watching.
            </p>

            <motion.div
              className="flex justify-center mb-16"
              whileHover={{ scale: 1.05 }}
            >
              
           <a     href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-14 py-6 bg-blue-500 text-white rounded-full font-bold text-xl md:text-2xl hover:bg-blue-600 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Join the Experiment
              </a>
            </motion.div>

            <div className="flex gap-8 justify-center flex-wrap text-lg">
              
            <a    href="https://x.com/i/communities/2002714238331080902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                X Community
              </a>
              <span className="text-gray-400">•</span>
              
            <a    href="https://t.me/CoinMemeCTO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
              >
                Telegram
              </a>
              <span className="text-gray-400">•</span>
              
            <a    href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
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

      <footer className="py-12 px-4 border-t border-gray-200/50 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="text-base mb-3 font-medium">
            $CoinMeme CTO • Community-driven • No promises, just direction
          </p>
          <p className="text-sm text-gray-500">
            This is an experiment. Not financial advice. DYOR.
          </p>
        </div>
      </footer>
    </main>
  )
}
