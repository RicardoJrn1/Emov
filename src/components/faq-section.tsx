"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    question: "A EMOV tem loja física?",
    answer:
      "Sim! São 4 lojas físicas, todas com atendimento especializado.",
  },
  {
    question: "Vocês entregam na cidade?",
    answer:
      "Sim! Atendemos Chapecó e região com entregas rápidas e seguras.",
  },
  {
    question: "As peças têm troca?",
    answer:
      "Sim! Garantimos troca fácil dentro do prazo padrão da loja.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer:
      "Aceitamos cartão de crédito, débito e Pix.",
  },
  {
    question: "Como recebo atendimento?",
    answer:
      "Todo atendimento é feito diretamente no WhatsApp com rapidez e atenção.",
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} satisfies Variants

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <motion.div variants={itemVariants} className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <Minus className="w-6 h-6 text-white/70" /> : <Plus className="w-6 h-6 text-white/70" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0, height: 0 }}
            animate={{ opacity: 1, scaleY: 1, height: "auto" }}
            exit={{ opacity: 0, scaleY: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden origin-top"
          >
            {/* Adicionamos um padding interno para o texto não ser "esmagado" durante a animação */}
            <p className="pt-2 pb-6 text-white/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  // Estado para controlar qual item está aberto. `null` significa que nenhum está aberto.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    // Se o item clicado já estiver aberto, fecha ele. Senão, abre o novo item.
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}
