const { useState, useEffect } = React;

// Componente de Contador Animado
const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
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

  return (
    <span>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

// Componente Principal
const PlanurbiLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    lucide.createIcons();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <i data-lucide="map-pin" className="w-6 h-6 text-white"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">PLANURBI</h1>
              <p className="text-xs text-gray-600">Georreferenciamento Inteligente</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('desafio')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
              O Desafio
            </button>
            <button onClick={() => scrollToSection('solucao')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Solução
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('contato')} className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Fale Conosco
            </button>
          </nav>

          {/* Menu Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <i data-lucide={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6"></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('desafio')} className="text-left text-gray-700 hover:text-emerald-600 font-medium">
                O Desafio
              </button>
              <button onClick={() => scrollToSection('solucao')} className="text-left text-gray-700 hover:text-emerald-600 font-medium">
                Solução
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-left text-gray-700 hover:text-emerald-600 font-medium">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('contato')} className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-slow">
              ⚠️ PRAZO LEGAL 2026 - AÇÃO IMEDIATA NECESSÁRIA
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Reforma Tributária 2026:<br />
              <span className="text-emerald-400">Seu Município Está Preparado?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Lei nº 13.240/2015 exige atualização imediata do cadastro imobiliário.<br />
              <span className="text-red-400 font-bold">Municípios que não cumprirem perdem 20% dos repasses federais.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('solucao')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <i data-lucide="shield-check" className="inline w-5 h-5 mr-2"></i>
                Conheça a Solução Completa
              </button>
              <button 
                onClick={() => scrollToSection('desafio')}
                className="glass-effect text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition"
              >
                <i data-lucide="alert-triangle" className="inline w-5 h-5 mr-2"></i>
                Entenda o Problema
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="glass-effect rounded-xl p-6 card-hover">
                <div className="text-5xl font-bold text-emerald-400 mb-2">
                  <Counter end={5568} />
                </div>
                <p className="text-gray-300 font-medium">Municípios Brasileiros</p>
                <p className="text-sm text-gray-400 mt-2">Precisam se adequar urgentemente</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 card-hover">
                <div className="text-5xl font-bold text-red-400 mb-2">
                  2026
                </div>
                <p className="text-gray-300 font-medium">Prazo Fatal</p>
                <p className="text-sm text-gray-400 mt-2">Janela temporal limitada</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 card-hover">
                <div className="text-5xl font-bold text-yellow-400 mb-2">
                  20%
                </div>
                <p className="text-gray-300 font-medium">Perda de Repasses</p>
                <p className="text-sm text-gray-400 mt-2">Penalidade por descumprimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Legal */}
      <section id="desafio" className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Desafio <span className="text-red-400">Legal e Financeiro</span>
            </h2>
            <p className="text-xl text-gray-400">
              A Reforma Tributária não é opcional. É uma obrigação legal com consequências severas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card Lei */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 card-hover">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="scale" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lei nº 13.240/2015</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                  <span>Obrigatoriedade de atualização da Planta Genérica de Valores (PGV)</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                  <span>Condição para receber repasses federais de regularização fundiária</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                  <span>Submissão obrigatória à Secretaria do Patrimônio da União (SPU)</span>
                </li>
              </ul>
            </div>

            {/* Card Cadastro Nacional */}
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-2xl p-8 card-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="database" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cadastro Nacional de Imóveis</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-orange-400 flex-shrink-0"></i>
                  <span>CPF para todos os imóveis (Receita Federal)</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-orange-400 flex-shrink-0"></i>
                  <span>Centralização de dados cadastrais</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-orange-400 flex-shrink-0"></i>
                  <span>Declaração obrigatória a partir de 2026</span>
                </li>
              </ul>
            </div>

            {/* Card Consequências */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 card-hover md:col-span-2">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="alert-octagon" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consequências do Descumprimento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i data-lucide="x-circle" className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0"></i>
                      <span><strong>Perda de 20%</strong> dos repasses de regularização fundiária</span>
                    </li>
                    <li className="flex items-start">
                      <i data-lucide="x-circle" className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0"></i>
                      <span><strong>Multas administrativas</strong> por descumprimento legal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i data-lucide="x-circle" className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0"></i>
                      <span><strong>Passivos jurídicos</strong> com IPTU incorreto</span>
                    </li>
                    <li className="flex items-start">
                      <i data-lucide="x-circle" className="w-5 h-5 mr-3 mt-1 text-purple-400 flex-shrink-0"></i>
                      <span><strong>Atrasos</strong> em processos de regularização</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-700 rounded-lg">
                <p className="text-sm">
                  <i data-lucide="info" className="inline w-4 h-4 mr-2"></i>
                  <strong>Referência:</strong> Municípios como São Paulo, Sorocaba e Piracicaba já iniciaram adequação preventiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidade de Mercado */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Por Que <span className="gradient-text">Agir Agora?</span>
            </h2>
            <p className="text-xl text-gray-600">
              O momento é crítico. A janela de adequação é limitada e as consequências são graves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover text-center">
              <div className="text-5xl font-bold gradient-text mb-3">
                <Counter end={5568} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Municípios no Brasil</p>
              <p className="text-gray-500 mt-2">Precisam se adequar</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover text-center">
              <div className="text-5xl font-bold gradient-text mb-3">
                <Counter end={102} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Municípios em Alagoas</p>
              <p className="text-gray-500 mt-2">Mercado regional</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover text-center">
              <div className="text-5xl font-bold gradient-text mb-3">
                <Counter end={1794} />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Municípios no Nordeste</p>
              <p className="text-gray-500 mt-2">Expansão potencial</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <i data-lucide="clock" className="inline w-6 h-6 mr-2 text-red-500"></i>
              Fatores Críticos de Urgência
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i data-lucide="shield-alert" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Obrigatoriedade Legal</h4>
                  <p className="text-gray-600">Não é opcional - é exigência federal com penalidades definidas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i data-lucide="calendar-x" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Janela Temporal Limitada</h4>
                  <p className="text-gray-600">2026-2027 - prazo estreito para implementação completa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i data-lucide="trending-up" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Modernização Necessária</h4>
                  <p className="text-gray-600">Sistemas legados não atendem requisitos da Reforma Tributária</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i data-lucide="dollar-sign" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Proteção Financeira</h4>
                  <p className="text-gray-600">Garantir 100% dos repasses federais e evitar perdas de milhões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução PLANURBI */}
      <section id="solucao" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              A Solução <span className="gradient-text">PLANURBI</span>
            </h2>
            <p className="text-xl text-gray-600">
              Sistema completo em 3 módulos integrados para conformidade total
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Módulo 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-slideInLeft">
              <div className="w-full md:w-1/3">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <i data-lucide="smartphone" className="w-12 h-12 text-white"></i>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
                    MÓDULO 1
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <i data-lucide="camera" className="inline w-8 h-8 mr-2 text-emerald-600"></i>
                  Coleta em Campo
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-emerald-600 flex-shrink-0"></i>
                    <span><strong>App PWA offline</strong> - funciona sem internet (iPhone + Android)</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-emerald-600 flex-shrink-0"></i>
                    <span><strong>Foto georreferenciada</strong> com GPS de alta precisão</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-emerald-600 flex-shrink-0"></i>
                    <span><strong>Dados estruturados</strong> - cadastro completo no local</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-emerald-600 flex-shrink-0"></i>
                    <span><strong>Sincronização automática</strong> quando conectar à internet</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 2 - DIFERENCIAL */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-slideInRight">
              <div className="w-full md:w-1/3">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl animate-pulse-slow">
                  <i data-lucide="satellite" className="w-12 h-12 text-white"></i>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
                    MÓDULO 2 ⭐ DIFERENCIAL
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-4 border-blue-300">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <i data-lucide="brain" className="inline w-8 h-8 mr-2 text-blue-600"></i>
                  Validação Espacial Automática
                </h3>
                <div className="bg-blue-200 border-l-4 border-blue-600 p-4 mb-4 rounded">
                  <p className="text-blue-900 font-bold">
                    <i data-lucide="star" className="inline w-5 h-5 mr-2"></i>
                    ÚNICO NO MERCADO - Tecnologia exclusiva PLANURBI
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0"></i>
                    <span><strong>Imagens satélite alta resolução</strong> (Google Earth Engine)</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0"></i>
                    <span><strong>IA detecta</strong> terreno vs construção automaticamente</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0"></i>
                    <span><strong>Cálculo automático de área</strong> construída e total</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0"></i>
                    <span><strong>Comparação cruzada</strong> coleta humana vs satélite</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0"></i>
                    <span><strong>Dashboard auditoria visual</strong> para casos duvidosos</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="zap" className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0"></i>
                    <span className="font-bold text-blue-900">Elimina 80-90% dos erros humanos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-slideInLeft">
              <div className="w-full md:w-1/3">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <i data-lucide="file-check" className="w-12 h-12 text-white"></i>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
                    MÓDULO 3
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <i data-lucide="shield-check" className="inline w-8 h-8 mr-2 text-purple-600"></i>
                  Relatórios & Compliance
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>Relatórios TCE</strong> - Tribunal de Contas estadual</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>Documentação SPU</strong> - Secretaria Patrimônio União</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>Cadastro Nacional</strong> integrado (CPF Imóveis)</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>PGV atualizada</strong> - Planta Genérica de Valores</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>Rastreabilidade total</strong> - cada dado com origem documentada</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check-circle" className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0"></i>
                    <span><strong>Conformidade Lei 13.240/2015</strong> garantida</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Competitivo */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O Diferencial <span className="text-yellow-400">PLANURBI</span>
              </h2>
              <p className="text-xl text-gray-300">
                Validação cruzada que nenhum concorrente possui
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Problema Atual */}
              <div className="bg-red-900/30 backdrop-blur-lg border border-red-500/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400">
                  <i data-lucide="x-octagon" className="inline w-6 h-6 mr-2"></i>
                  Problema Atual
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i data-lucide="x" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                    <span>Planilhas manuais geram inconsistências e erros</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="x" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                    <span>IPTU calculado errado resulta em processos jurídicos</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="x" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                    <span>Sem validação objetiva - passivos ocultos</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="x" className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0"></i>
                    <span>Fiscalização manual impossível em escala</span>
                  </li>
                </ul>
              </div>

              {/* Solução PLANURBI */}
              <div className="bg-emerald-900/30 backdrop-blur-lg border border-emerald-500/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                  <i data-lucide="check-circle" className="inline w-6 h-6 mr-2"></i>
                  Solução PLANURBI
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i data-lucide="check" className="w-5 h-5 mr-3 mt-1 text-emerald-400 flex-shrink-0"></i>
                    <span><strong>Validação cruzada:</strong> campo + satélite + IA</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check" className="w-5 h-5 mr-3 mt-1 text-emerald-400 flex-shrink-0"></i>
                    <span><strong>85-90%</strong> dos casos validados automaticamente</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check" className="w-5 h-5 mr-3 mt-1 text-emerald-400 flex-shrink-0"></i>
                    <span><strong>Redução de 90%</strong> em erros de classificação</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check" className="w-5 h-5 mr-3 mt-1 text-emerald-400 flex-shrink-0"></i>
                    <span><strong>Auditoria visual</strong> para casos duvidosos (10-15%)</span>
                  </li>
                  <li className="flex items-start">
                    <i data-lucide="check" className="w-5 h-5 mr-3 mt-1 text-emerald-400 flex-shrink-0"></i>
                    <span><strong>Rastreabilidade total:</strong> foto + satélite + registro</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparativo Visual */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">
                <i data-lucide="git-compare" className="inline w-6 h-6 mr-2"></i>
                Antes vs Depois
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-3 px-4 text-gray-300">Aspecto</th>
                      <th className="py-3 px-4 text-red-400">Sem PLANURBI</th>
                      <th className="py-3 px-4 text-emerald-400">Com PLANURBI</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Precisão</td>
                      <td className="py-3 px-4">60-70% (erros frequentes)</td>
                      <td className="py-3 px-4 text-emerald-400"><strong>95-98%</strong> (validado)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Tempo auditoria</td>
                      <td className="py-3 px-4">Meses (manual)</td>
                      <td className="py-3 px-4 text-emerald-400"><strong>Dias</strong> (automatizado)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Custo operacional</td>
                      <td className="py-3 px-4">Alto (retrabalho)</td>
                      <td className="py-3 px-4 text-emerald-400"><strong>-70%</strong> redução</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Segurança jurídica</td>
                      <td className="py-3 px-4">Baixa (sem evidência)</td>
                      <td className="py-3 px-4 text-emerald-400"><strong>Total</strong> (foto + satélite)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Conformidade legal</td>
                      <td className="py-3 px-4">Parcial/Incerta</td>
                      <td className="py-3 px-4 text-emerald-400"><strong>100%</strong> garantida</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Benefícios para <span className="gradient-text">Seu Município</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transforme obrigação legal em vantagem competitiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Conformidade Legal */}
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <i data-lucide="shield-check" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conformidade Legal Total</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-emerald-600 flex-shrink-0"></i>
                  <span>Atendimento 100% Lei 13.240/2015</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-emerald-600 flex-shrink-0"></i>
                  <span>PGV auditável e documentada</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-emerald-600 flex-shrink-0"></i>
                  <span>Cadastro Nacional completo</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-emerald-600 flex-shrink-0"></i>
                  <span>Zero risco de penalidades</span>
                </li>
              </ul>
            </div>

            {/* Ganhos Financeiros */}
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <i data-lucide="trending-up" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ganhos Financeiros</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"></i>
                  <span>100% repasses federais garantidos</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"></i>
                  <span>IPTU preciso = +15-30% arrecadação</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"></i>
                  <span>Redução 70-90% processos jurídicos</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"></i>
                  <span>ROI positivo no primeiro ano</span>
                </li>
              </ul>
            </div>

            {/* Modernização */}
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <i data-lucide="rocket" className="w-8 h-8 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modernização da Gestão</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-purple-600 flex-shrink-0"></i>
                  <span>Sistema digital integrado</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-purple-600 flex-shrink-0"></i>
                  <span>Dados confiáveis para decisões</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-purple-600 flex-shrink-0"></i>
                  <span>Rastreabilidade e transparência</span>
                </li>
                <li className="flex items-start">
                  <i data-lucide="check" className="w-5 h-5 mr-2 mt-1 text-purple-600 flex-shrink-0"></i>
                  <span>Credibilidade com cidadãos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Destaque Segurança Jurídica */}
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 rounded-lg p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <i data-lucide="shield" className="w-12 h-12 text-yellow-600 flex-shrink-0"></i>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Segurança Jurídica Garantida</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Cada imóvel possui <strong>tríplice evidência</strong>: foto georreferenciada no local + imagem satélite de alta resolução + registro auditável. Essa documentação elimina contestações e protege o município em qualquer auditoria ou processo jurídico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeção Financeira */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Projeção <span className="text-yellow-400">Financeira</span>
              </h2>
              <p className="text-xl text-gray-300">
                Conformidade não é gasto - é investimento estratégico
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Ganhos Diretos */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                  <i data-lucide="trending-up" className="inline w-6 h-6 mr-2"></i>
                  Ganhos Diretos
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Repasses federais garantidos</span>
                    <span className="font-bold text-emerald-400">R$ 200K - 800K/ano</span>
                  </li>
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Aumento IPTU (cadastro preciso)</span>
                    <span className="font-bold text-emerald-400">+15% - 30%</span>
                  </li>
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Redução processos jurídicos</span>
                    <span className="font-bold text-emerald-400">-70% - 90%</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="flex-1">Economia auditoria manual</span>
                    <span className="font-bold text-emerald-400">R$ 50K - 150K</span>
                  </li>
                </ul>
              </div>

              {/* Custos de Não Conformidade */}
              <div className="bg-red-900/30 backdrop-blur-lg border border-red-500/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400">
                  <i data-lucide="alert-triangle" className="inline w-6 h-6 mr-2"></i>
                  Custos Não Conformidade
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Perda repasses federais (20%)</span>
                    <span className="font-bold text-red-400">R$ 200K - 800K/ano</span>
                  </li>
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Multas cadastro nacional</span>
                    <span className="font-bold text-red-400">R$ 50K - 200K</span>
                  </li>
                  <li className="flex justify-between items-start pb-3 border-b border-white/20">
                    <span className="flex-1">Passivos jurídicos IPTU</span>
                    <span className="font-bold text-red-400">R$ 100K - 500K</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="flex-1">Reputação e gestão</span>
                    <span className="font-bold text-red-400">Incalculável</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Exemplo Prático */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <i data-lucide="calculator" className="inline w-6 h-6 mr-2"></i>
                Exemplo Prático: Município de 10.000 Imóveis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 1.2M</div>
                  <p className="text-gray-200">Ganhos anuais estimados</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">R$ 400K</div>
                  <p className="text-gray-200">Custos evitados</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">5-8x</div>
                  <p className="text-gray-200">ROI primeiro ano</p>
                </div>
              </div>
              <p className="text-center text-gray-200 mt-6 italic">
                * Valores variam conforme porte do município e situação cadastral atual
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fadeIn">
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse-slow">
                <i data-lucide="clock" className="inline w-5 h-5 mr-2"></i>
                JANELA TEMPORAL LIMITADA
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Seu Município <span className="text-red-400">Não Pode Esperar</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                A janela 2026-2027 é única. Municípios que não se adequarem<br />
                enfrentam <strong className="text-red-400">penalidades imediatas</strong> e <strong className="text-red-400">perda de recursos</strong>.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                <i data-lucide="check-circle-2" className="inline w-6 h-6 mr-2"></i>
                PLANURBI Garante
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <i data-lucide="camera" className="w-8 h-8 text-emerald-400 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Coleta Profissional</h4>
                    <p className="text-gray-300 text-sm">App PWA com GPS de alta precisão</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i data-lucide="satellite" className="w-8 h-8 text-blue-400 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Validação Automática</h4>
                    <p className="text-gray-300 text-sm">IA + satélite + auditoria visual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i data-lucide="shield-check" className="w-8 h-8 text-purple-400 flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Compliance Total</h4>
                    <p className="text-gray-300 text-sm">100% Lei 13.240/2015</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:contato@planurbi.com.br" 
                className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-5 rounded-lg font-bold text-xl hover:shadow-2xl transition transform hover:scale-105"
              >
                <i data-lucide="mail" className="inline w-6 h-6 mr-2"></i>
                Entre em Contato para Apresentação Personalizada
              </a>
              
              <p className="text-gray-400 text-sm">
                Resposta em até 24 horas úteis
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400"><Counter end={5568} /></div>
                  <p className="text-gray-400 text-sm">Municípios</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">2026</div>
                  <p className="text-gray-400 text-sm">Prazo</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <p className="text-gray-400 text-sm">Compliance</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">90%</div>
                  <p className="text-gray-400 text-sm">Automação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <i data-lucide="map-pin" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white gradient-text">PLANURBI</h3>
                  <p className="text-xs text-gray-500">Georreferenciamento Inteligente</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Solução completa para adequação municipal à Reforma Tributária 2026. 
                Tecnologia exclusiva de validação espacial automática.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Solução</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('desafio')} className="hover:text-emerald-400 transition">O Desafio</button></li>
                <li><button onClick={() => scrollToSection('solucao')} className="hover:text-emerald-400 transition">Módulos</button></li>
                <li><button onClick={() => scrollToSection('beneficios')} className="hover:text-emerald-400 transition">Benefícios</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-emerald-400 transition">Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Informações</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <i data-lucide="mail" className="inline w-4 h-4 mr-2"></i>
                  contato@planurbi.com.br
                </li>
                <li>
                  <i data-lucide="map-pin" className="inline w-4 h-4 mr-2"></i>
                  Maceió, Alagoas
                </li>
                <li>
                  <i data-lucide="clock" className="inline w-4 h-4 mr-2"></i>
                  Seg-Sex: 8h-18h
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2026 PLANURBI. Todos os direitos reservados.</p>
            <p className="mt-2 text-gray-500">
              Desenvolvido para atender Lei nº 13.240/2015 e Reforma Tributária 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Renderizar
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PlanurbiLanding />);
