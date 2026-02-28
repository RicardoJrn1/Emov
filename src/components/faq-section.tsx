"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    question: "A EMOV tem loja física?",
    answer: "Sim! São 4 lojas físicas, todas com atendimento especializado.",
  },
  {
    question: "Vocês entregam na cidade?",
    answer: "Sim! Atendemos Chapecó e região com entregas rápidas e seguras.",
  },
  {
    question: "As peças têm troca?",
    answer: "Sim! Garantimos troca fácil dentro do prazo padrão da loja.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos cartão de crédito, débito e Pix.",
  },
  {
    question: "Como recebo atendimento?",
    answer: "Todo atendimento é feito diretamente no WhatsApp com rapidez e atenção.",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl bg-neutral-900 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full p-5 md:p-6 text-left gap-4"
      >
        <span className="text-base md:text-lg font-medium text-white">{question}</span>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-colors duration-300 hover:bg-white/10">
          {isOpen ? <Minus className="w-4 h-4 text-white/70" /> : <Plus className="w-4 h-4 text-white/70" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Dúvidas Frequentes
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
          <p className="text-lg text-white/80 leading-relaxed">
            Tudo o que você precisa saber antes de conhecer a EMOV.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          {faqData.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
