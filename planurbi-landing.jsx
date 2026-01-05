import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, Shield, Database, MapPin, FileCheck, TrendingUp, Target, Award } from 'lucide-react';

const PlanurbiLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count.toLocaleString('pt-BR')}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              PLANURBI
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#problema" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">O Desafio</a>
            <a href="#solucao" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Solução</a>
            <a href="#beneficios" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Benefícios</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-red-100 border border-red-300 rounded-full text-red-700 font-semibold text-sm mb-4">
              <AlertTriangle className="inline w-4 h-4 mr-2" />
              URGENTE: Lei Federal Obrigatória 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Reforma Tributária 2026:<br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Seu Município Está Preparado?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              A Lei nº 13.240/2015 exige atualização imediata dos cadastros imobiliários. 
              Municípios que não cumprirem <span className="font-bold text-red-600">perdem 20% dos repasses federais</span>.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <a href="#solucao" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Conheça a Solução Completa
              </a>
              <a href="#problema" className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300">
                Entenda o Problema
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl font-bold text-emerald-600 mb-2">
              <Counter end={5568} />
            </div>
            <div className="text-slate-700 font-medium">Municípios Brasileiros</div>
            <div className="text-sm text-slate-500 mt-1">Todos precisam se adequar</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              <Counter end={2026} />
            </div>
            <div className="text-slate-700 font-medium">Prazo Fatal</div>
            <div className="text-sm text-slate-500 mt-1">Adequação obrigatória</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl font-bold text-red-600 mb-2">
              <Counter end={20} suffix="%" />
            </div>
            <div className="text-slate-700 font-medium">Perda de Repasses</div>
            <div className="text-sm text-slate-500 mt-1">Penalidade por descumprimento</div>
          </div>
        </div>
      </section>

      {/* Problema Legal */}
      <section id="problema" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O Contexto Legal</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A Reforma Tributária entrou em vigor em janeiro de 2026, trazendo obrigações imediatas para todos os municípios brasileiros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lei nº 13.240/2015</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Determina que municípios encaminhem Plantas Genéricas de Valores (PGV) atualizadas 
                à Secretaria do Patrimônio da União (SPU).
              </p>
              <p className="text-emerald-400 font-semibold">
                Condição obrigatória para recebimento de repasses federais de regularização fundiária.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cadastro Imobiliário Nacional</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Implantação do "CPF dos Imóveis" pela Receita Federal, centralizando informações 
                patrimoniais em âmbito nacional.
              </p>
              <p className="text-emerald-400 font-semibold">
                Obrigação de declarar informações a partir de 2026, com multas por descumprimento.
              </p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md p-8 rounded-2xl border border-red-500/30">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">Consequências do Descumprimento</h3>
                  <ul className="space-y-3 text-slate-200">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Perda de 20%</strong> dos repasses federais relacionados à regularização fundiária</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Multas administrativas</strong> por não declaração de informações ao Cadastro Nacional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Inconsistências</strong> na arrecadação de IPTU gerando passivos jurídicos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Atraso</strong> em processos de regularização fundiária e gestão territorial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-slate-300 mb-6">
              Municípios como <strong className="text-white">São Paulo, Sorocaba, Piracicaba, Taubaté</strong> e 
              <strong className="text-white"> São José dos Campos</strong> já iniciaram adequação.
            </p>
            <p className="text-2xl font-bold text-emerald-400">
              Seu município não pode ficar para trás.
            </p>
          </div>
        </div>
      </section>

      {/* Oportunidade */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              A Janela de Oportunidade
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              2026-2027 representa um momento único para modernização da gestão territorial municipal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
              <div className="text-6xl font-bold text-emerald-600 mb-4">
                <Counter end={5568} />
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Municípios no Brasil</div>
              <div className="text-slate-600">Todos precisam atualizar cadastros</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="text-6xl font-bold text-blue-600 mb-4">
                <Counter end={102} />
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Municípios em Alagoas</div>
              <div className="text-slate-600">Mercado imediato de atuação</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
              <div className="text-6xl font-bold text-purple-600 mb-4">
                <Counter end={1794} />
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Municípios no Nordeste</div>
              <div className="text-slate-600">Expansão regional estratégica</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Por que agir agora?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Obrigatoriedade Legal</h4>
                  <p className="text-slate-300">Cumprimento da Lei 13.240/2015 e adequação à Reforma Tributária é mandatório, não opcional.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Janela Temporal Limitada</h4>
                  <p className="text-slate-300">Prazo 2026-2027 para adequação. Atraso significa penalidades financeiras imediatas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Modernização Necessária</h4>
                  <p className="text-slate-300">Sistemas manuais e planilhas não atendem mais requisitos de conformidade e auditoria.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Proteção Financeira</h4>
                  <p className="text-slate-300">Garantir 100% dos repasses federais e otimizar arrecadação municipal com dados precisos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução PLANURBI */}
      <section id="solucao" className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-700 font-semibold text-sm mb-4">
              <Shield className="inline w-4 h-4 mr-2" />
              Solução Completa e Integrada
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ecossistema PLANURBI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Do campo ao compliance: sistema completo de georreferenciamento e validação automática 
              para adequação total à Reforma Tributária 2026.
            </p>
          </div>

          {/* Timeline dos Módulos */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

            {/* Módulo 1 */}
            <div className="relative mb-12 md:flex md:items-center md:gap-8">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4 md:justify-end">
                    <h3 className="text-2xl font-bold text-slate-900">Módulo 1</h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-4">Coleta em Campo</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>App PWA funcionando offline (iPhone + Android)</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Foto georreferenciada com GPS de alta precisão</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Captura estruturada de dados cadastrais</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Sincronização automática ao retornar conexão</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2"></div>
            </div>

            {/* Módulo 2 */}
            <div className="relative mb-12 md:flex md:items-center md:gap-8">
              <div className="md:w-1/2"></div>
              <div className="hidden md:block w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Módulo 2</h3>
                  </div>
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Validação Espacial Automática</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                    <p className="text-sm font-bold text-blue-900 mb-1">🚀 DIFERENCIAL ÚNICO NO MERCADO</p>
                    <p className="text-sm text-blue-800">Tecnologia de ponta com imagens de satélite e Inteligência Artificial</p>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Imagens de satélite de alta resolução (Google Earth Engine)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Inteligência Artificial detecta: terreno vs construção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Cálculo automático de área construída</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Comparação: coleta humana vs realidade satelital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Dashboard de auditoria com foto campo + satélite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Eliminação de 80-90% dos erros humanos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="relative md:flex md:items-center md:gap-8">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4 md:justify-end">
                    <h3 className="text-2xl font-bold text-slate-900">Módulo 3</h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-purple-700 mb-4">Relatórios e Compliance</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Relatórios para Tribunal de Contas (TCE)</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Documentação para SPU (Secretaria Patrimônio União)</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Adequação ao Cadastro Imobiliário Nacional</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Planta Genérica de Valores (PGV) atualizada</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Rastreabilidade completa: imóvel → foto → validação</span>
                    </li>
                    <li className="flex items-start gap-2 md:justify-end md:text-right">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5 md:order-2" />
                      <span>Conformidade total com Lei 13.240/2015</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Diferencial PLANURBI
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Validação espacial automática: a única solução do mercado que combina campo + satélite + IA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Por que validação automática é essencial?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❌</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Problema Atual</h4>
                    <p className="text-blue-200">
                      Sistemas manuais e planilhas geram <strong>inconsistências críticas</strong>: 
                      IPTU cobrado não corresponde aos imóveis reais, causando passivos jurídicos e perda de arrecadação.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Solução PLANURBI</h4>
                    <p className="text-blue-200">
                      <strong>Validação cruzada automática:</strong> foto de campo + imagem de satélite + 
                      análise por IA. Sistema detecta divergências antes do erro chegar ao contribuinte.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-800/50 p-6 rounded-xl border border-blue-600">
                  <h4 className="font-bold text-xl mb-3">Resultado Prático</h4>
                  <ul className="space-y-2 text-blue-200">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">▸</span>
                      <span><strong>85-90%</strong> dos casos validados automaticamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">▸</span>
                      <span><strong>Redução de 90%</strong> nos erros de classificação (terreno vs construção)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">▸</span>
                      <span><strong>Auditoria visual</strong> lado a lado para casos duvidosos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">▸</span>
                      <span><strong>Rastreabilidade total:</strong> prova digital de cada decisão</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Comparativo: Antes vs Depois</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3 text-red-400">❌ Sem PLANURBI</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Planilhas manuais propensas a erro</li>
                    <li>• Sem validação cruzada</li>
                    <li>• Impossível auditar decisões</li>
                    <li>• IPTU inconsistente gera processos</li>
                    <li>• Perda de credibilidade da gestão</li>
                    <li>• Risco de penalidades federais</li>
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-bold mb-3 text-emerald-400">✅ Com PLANURBI</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Validação automática por satélite + IA</li>
                    <li>• Dados confrontados em 3 fontes</li>
                    <li>• Auditoria completa rastreável</li>
                    <li>• IPTU correto desde o cadastro</li>
                    <li>• Transparência e conformidade legal</li>
                    <li>• Conformidade total Lei 13.240/2015</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-500/20 rounded-xl border border-emerald-400/30">
                <p className="text-center font-bold text-emerald-300">
                  <Award className="inline w-5 h-5 mr-2" />
                  Tecnologia exclusiva no mercado brasileiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Benefícios para o Município
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Muito além da conformidade legal: modernização, segurança jurídica e otimização da gestão territorial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conformidade Legal Total</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Atendimento Lei 13.240/2015</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>PGV atualizada e auditável</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Cadastro Nacional completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Zero risco de penalidades</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ganhos Financeiros</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>100% dos repasses federais garantidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>IPTU preciso aumenta arrecadação</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Redução de processos jurídicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>ROI positivo no primeiro ano</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Modernização da Gestão</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Sistema digital integrado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Dados confiáveis e atualizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Rastreabilidade total</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Transparência para cidadãos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Segurança Jurídica e Transparência</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Cada imóvel com <strong className="text-emerald-400">foto georreferenciada</strong>, 
              <strong className="text-blue-400"> validação satelital</strong> e 
              <strong className="text-purple-400"> registro auditável</strong>. 
              Defesa sólida contra questionamentos e processos judiciais.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Prova digital completa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>Rastreabilidade histórica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Conformidade auditável</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeção Financeira */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impacto Financeiro para o Município
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Investimento estratégico com retorno garantido no primeiro ano de operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                Ganhos Diretos
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <div className="text-sm text-emerald-300 mb-1">Repasses Federais Garantidos (20%)</div>
                  <div className="text-3xl font-bold">R$ 200.000 - R$ 800.000</div>
                  <div className="text-sm text-emerald-200 mt-1">Valor varia por município (regularização fundiária)</div>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <div className="text-sm text-emerald-300 mb-1">Aumento Arrecadação IPTU</div>
                  <div className="text-3xl font-bold">+ 15% - 30%</div>
                  <div className="text-sm text-emerald-200 mt-1">Cadastro preciso elimina subnotificações</div>
                </div>
                <div>
                  <div className="text-sm text-emerald-300 mb-1">Redução Processos Jurídicos</div>
                  <div className="text-3xl font-bold">- 70% - 90%</div>
                  <div className="text-sm text-emerald-200 mt-1">Dados validados eliminam contestações</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                Custos de Não Conformidade
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <div className="text-sm text-red-300 mb-1">Perda Repasses (Penalidade)</div>
                  <div className="text-3xl font-bold text-red-400">R$ 200.000 - R$ 800.000/ano</div>
                  <div className="text-sm text-red-200 mt-1">Lei 13.240/2015 - 20% dos repasses fundiários</div>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <div className="text-sm text-red-300 mb-1">Multas Cadastro Nacional</div>
                  <div className="text-3xl font-bold text-red-400">R$ 50.000 - R$ 200.000</div>
                  <div className="text-sm text-red-200 mt-1">Não declaração ao sistema federal</div>
                </div>
                <div>
                  <div className="text-sm text-red-300 mb-1">Passivos Jurídicos (IPTU Errado)</div>
                  <div className="text-3xl font-bold text-red-400">R$ 100.000 - R$ 500.000</div>
                  <div className="text-sm text-red-200 mt-1">Processos administrativos e judiciais</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-10 rounded-3xl text-center">
            <h3 className="text-3xl font-bold mb-4">Exemplo Prático: Município de 10.000 Imóveis</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">R$ 1.2M</div>
                <div className="text-sm">Ganhos anuais estimados</div>
                <div className="text-xs text-emerald-200 mt-2">(repasses + IPTU otimizado)</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">R$ 400K</div>
                <div className="text-sm">Custos evitados</div>
                <div className="text-xs text-emerald-200 mt-2">(penalidades + processos)</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">5-8x</div>
                <div className="text-sm">ROI primeiro ano</div>
                <div className="text-xs text-emerald-200 mt-2">(retorno sobre investimento)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Seu Município Não Pode Esperar
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            A janela 2026-2027 é única. Quem não se adequar agora enfrentará 
            <span className="text-red-400 font-bold"> penalidades imediatas</span> e 
            <span className="text-red-400 font-bold"> perda de recursos federais</span>.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 mb-12">
            <h3 className="text-2xl font-bold mb-6">PLANURBI: A Solução Completa</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-emerald-400 font-bold text-lg mb-2">✓ Coleta Profissional</div>
                <div className="text-sm text-slate-300">App offline, GPS preciso, dados estruturados</div>
              </div>
              <div>
                <div className="text-blue-400 font-bold text-lg mb-2">✓ Validação Automática</div>
                <div className="text-sm text-slate-300">Satélite + IA, 85-90% automático</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-lg mb-2">✓ Compliance Total</div>
                <div className="text-sm text-slate-300">Lei 13.240/2015, Cadastro Nacional, PGV</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-bold text-emerald-400">
              Entre em Contato para Apresentação Personalizada
            </p>
            <p className="text-lg text-slate-300">
              Demonstração do sistema, análise de viabilidade e proposta customizada para seu município.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Alagoas, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Conformidade Legal Garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Tecnologia Exclusiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">PLANURBI</span>
          </div>
          <p className="text-sm mb-4">
            Solução completa de georreferenciamento e validação espacial para adequação à Reforma Tributária 2026
          </p>
          <p className="text-xs text-slate-500">
            © 2026 PLANURBI. Sistema de Georreferenciamento Imobiliário Municipal.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'DM Serif Display', serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default PlanurbiLanding;
