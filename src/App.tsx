import React from "react";
import { motion } from "motion/react";
import { Trophy, Star, Telescope, Rocket, Award, Medal, CheckCircle2, ChevronRight } from "lucide-react";
// @ts-ignore
import bgImage from "./assets/images/cosmic_astronomy_background_1779197588155.png";

interface Student {
  pos: number;
  name: string;
  classification: string;
  score: number;
  correct: number;
  errors: number;
}

const students: Student[] = [
  { pos: 1, name: "ARTHUR OLIVEIRA LEAL", classification: "Classificado", score: 100, correct: 20, errors: 0 },
  { pos: 1, name: "CAIO VINICIUS LOURENÇO JORGE DA COSTA", classification: "Classificado", score: 100, correct: 20, errors: 0 },
  { pos: 2, name: "ISAAC LEAL RODRIGUES", classification: "Classificado", score: 95, correct: 19, errors: 1 },
  { pos: 2, name: "NAIELY KETLYN GONCALVES SILVA", classification: "Classificado", score: 95, correct: 19, errors: 1 },
  { pos: 3, name: "MARIA VITÓRIA DA COSTA SANTOS", classification: "Classificado", score: 90, correct: 18, errors: 2 },
  { pos: 5, name: "LUCAS ARIEL LEAL DA COSTA", classification: "Classificado", score: 80, correct: 16, errors: 4 },
  { pos: 5, name: "PAULO HENRIQUE DOS SANTOS SILVA", classification: "Classificado", score: 80, correct: 16, errors: 4 },
  { pos: 6, name: "GUSTAVO RODRIGUES SOARES", classification: "Classificado", score: 75, correct: 15, errors: 5 },
  { pos: 7, name: "EDSON FERNANDES LEAL", classification: "Classificado", score: 70, correct: 14, errors: 6 },
  { pos: 7, name: "JANE MARIA ALVES ARAÚJO SOUSA", classification: "Classificado", score: 70, correct: 14, errors: 6 },
  { pos: 7, name: "JORGE EMANUEL LIMA CHAVES", classification: "Classificado", score: 70, correct: 14, errors: 6 },
  { pos: 8, name: "RICHELMER MENDES DIAS GOMES", classification: "Classificado", score: 65, correct: 13, errors: 7 },
  { pos: 9, name: "MARIA GABRIELLE FERNANDES ABREU", classification: "Classificado", score: 60, correct: 12, errors: 8 },
  { pos: 9, name: "MATHEUS FELIPE ARAUJO LIMA", classification: "Classificado", score: 60, correct: 12, errors: 8 },
  { pos: 10, name: "HENRIQUE PEREIRA DE OLIVEIRA", classification: "Classificado", score: 55, correct: 11, errors: 9 },
  { pos: 11, name: "FRANCISCO GABRIEL DE SOUSA LEAL", classification: "Classificado", score: 50, correct: 10, errors: 10 },
  { pos: 13, name: "JOAO GABRIEL DOS SANTOS SOARES", classification: "Classificado", score: 40, correct: 8, errors: 12 },
  { pos: 16, name: "EDELVAN GONÇALVES DE OLIVEIRA E SILVA", classification: "Classificado", score: 25, correct: 5, errors: 15 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans selection:bg-indigo-500/30">
      {/* Background with Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 lg:px-8">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex justify-center items-center gap-3 mb-2">
            <Telescope className="w-8 h-8 text-indigo-400" />
            <span className="text-sm font-orbitron tracking-[0.2em] text-indigo-400 uppercase">
              CETI Moisaniel Alves de Sousa
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
            III Olimpíada Nacional <br className="hidden md:block" /> 
            de Astronomia Digital
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mt-4">
            Lagoinha do Piauí brilha no cosmos. <br className="md:hidden" />
            Celebrando a excelência dos nossos alunos premiados.
          </p>
        </motion.header>

        {/* Podium / Highlights */}
        <section className="mb-24 px-4 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Silver Rank */}
            <HighlightCard 
              student={students[2]} 
              colorClass="silver-gradient" 
              icon={<Medal className="w-6 h-6 text-slate-800" />}
              rankLabel="2º Lugar"
              delay={0.2}
              className="md:order-1"
            />
            
            {/* Gold Rank (Multiplexed for multiple pos 1) */}
            <div className="md:order-2 space-y-6">
              {students.filter(s => s.pos === 1).map((s, idx) => (
                <HighlightCard 
                  key={s.name}
                  student={s} 
                  colorClass="gold-gradient" 
                  icon={<Trophy className="w-8 h-8 text-yellow-900" />}
                  rankLabel="1º Lugar"
                  delay={0.1 * (idx + 1)}
                  isMain
                />
              ))}
            </div>

            {/* Bronze Rank */}
            <HighlightCard 
              student={students[4]} 
              colorClass="bronze-gradient" 
              icon={<Award className="w-6 h-6 text-amber-900" />}
              rankLabel="3º Lugar"
              delay={0.3}
              className="md:order-3"
            />
          </div>
        </section>

        {/* Full Table Results */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-4 gap-4">
            <h2 className="text-2xl font-orbitron flex items-center gap-3">
              <Rocket className="w-6 h-6 text-indigo-400" />
              Lista de Aprovados
            </h2>
            <div className="text-sm text-slate-400 flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {students.length} Estudantes Classificados
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {students.map((student, index) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 md:p-6 group hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 font-orbitron text-sm border border-indigo-500/20">
                    {student.pos}º
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-indigo-300 transition-colors">
                      {student.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                        {student.classification}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{student.correct} Acertos</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <div className="text-center md:text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Pontuação</p>
                    <p className="text-2xl font-orbitron font-bold text-white">{student.score}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 text-center text-slate-500 space-y-6 pb-12">
          <div className="h-px w-24 bg-indigo-500/30 mx-auto" />
          <p className="text-sm font-light">
            © 2026 CETI Moisaniel Alves de Sousa • Lagoinha do Piauí <br />
            Hall da Fama dos Resultados - III ONAD
          </p>
        </footer>
      </main>
    </div>
  );
}

function HighlightCard({ 
  student, 
  colorClass, 
  icon, 
  rankLabel, 
  delay = 0, 
  isMain = false,
  className = ""
}: { 
  student: Student; 
  colorClass: string; 
  icon: React.ReactNode; 
  rankLabel: string;
  delay?: number;
  isMain?: boolean;
  className?: string;
  key?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative group ${className}`}
    >
      <div className={`absolute -inset-1 blur-xl opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-r ${colorClass}`} />
      <div className={`glass-card p-6 md:p-8 border-white/20 flex flex-col items-center text-center relative ${isMain ? 'py-10 border-indigo-500/30 bg-indigo-500/5' : ''}`}>
        <div className={`w-14 h-14 ${isMain ? 'w-20 h-20' : ''} rounded-full flex items-center justify-center mb-6 shadow-2xl ${colorClass}`}>
          {icon}
        </div>
        <p className="text-xs font-orbitron font-bold text-indigo-300 uppercase tracking-widest mb-2">{rankLabel}</p>
        <h3 className={`font-orbitron font-bold leading-tight mb-4 ${isMain ? 'text-xl' : 'text-lg'} text-white`}>
          {student.name}
        </h3>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Pontos</p>
            <p className="text-xl font-bold font-orbitron text-white">{student.score}</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Acertos</p>
            <p className="text-xl font-bold font-orbitron text-white">{student.correct}</p>
          </div>
        </div>
        
        {isMain && (
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-3 -right-3"
          >
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
