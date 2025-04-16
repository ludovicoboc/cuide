'use client'

import { useState, useEffect } from 'react'
import { formatDistanceToNow, format, isToday, isYesterday, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Clock, Moon, Trash2, Star, Edit2 } from 'lucide-react'
import { useDb } from '../../lib/db-context'

// Definindo o tipo manualmente
type RegistroSonoType = {
  id: string
  inicio: Date
  fim: Date | null
  qualidade: number | null
  notas: string | null
  usuarioId: string
}

export function RegistroSonoDb() {
  // Contexto do banco de dados
  const { sono } = useDb()
  
  // Estado para armazenar o ID do usuário (em um cenário real, isso viria de um sistema de autenticação)
  const [usuarioId, setUsuarioId] = useState<string>('usuario-teste')
  
  // Estado para armazenar os registros de sono
  const [registros, setRegistros] = useState<RegistroSonoType[]>([])
  
  // Estados do formulário
  const [dataInicio, setDataInicio] = useState('')
  const [horaInicio, setHoraInicio] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [horaFim, setHoraFim] = useState('')
  const [notas, setNotas] = useState('')
  const [qualidade, setQualidade] = useState<number | null>(null)
  const [modoEdicao, setModoEdicao] = useState(false)
  const [idEdicao, setIdEdicao] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(true)
  
  // Carregar registros de sono ao montar o componente
  useEffect(() => {
    const carregarRegistros = async () => {
      try {
        const dados = await sono.registros.listarPorUsuario(usuarioId)
        setRegistros(dados)
      } catch (erro) {
        console.error('Erro ao carregar registros de sono:', erro)
      } finally {
        setCarregando(false)
      }
    }
    
    carregarRegistros()
  }, [sono.registros, usuarioId])
  
  // Formatar data para exibição
  const formatarData = (data: Date) => {
    if (isToday(data)) {
      return `Hoje às ${format(data, 'HH:mm')}`
    } else if (isYesterday(data)) {
      return `Ontem às ${format(data, 'HH:mm')}`
    }
    return format(data, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })
  }
  
  // Calcular duração do sono
  const calcularDuracao = (inicio: Date, fim: Date | null) => {
    if (!fim) return null
    
    // Diferença em milissegundos
    const diff = fim.getTime() - inicio.getTime()
    
    // Converter para horas e minutos
    const horas = Math.floor(diff / (1000 * 60 * 60))
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${horas}h ${minutos}min`
  }
  
  // Formatação da qualidade do sono em estrelas
  const renderEstrelas = (qualidade: number | null) => {
    if (qualidade === null) return null
    
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < qualidade ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ))
  }
  
  // Lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!dataInicio || !horaInicio) return
    
    const inicioDate = new Date(`${dataInicio}T${horaInicio}:00`)
    const fimDate = dataFim && horaFim 
      ? new Date(`${dataFim}T${horaFim}:00`) 
      : null
    
    try {
      if (modoEdicao && idEdicao) {
        // Atualizar registro existente
        await sono.registros.atualizar(idEdicao, {
          inicio: inicioDate,
          fim: fimDate,
          qualidade,
          notas: notas || null
        })
        
        // Limpar modo de edição
        setModoEdicao(false)
        setIdEdicao(null)
      } else {
        // Criar novo registro
        await sono.registros.criar({
          inicio: inicioDate,
          fim: fimDate,
          qualidade,
          notas: notas || null,
          usuarioId
        })
      }
      
      // Recarregar registros
      const dadosAtualizados = await sono.registros.listarPorUsuario(usuarioId)
      setRegistros(dadosAtualizados)
      
      // Limpar o formulário
      resetForm()
    } catch (erro) {
      console.error('Erro ao salvar registro de sono:', erro)
      alert('Ocorreu um erro ao salvar o registro de sono.')
    }
  }
  
  // Resetar formulário
  const resetForm = () => {
    setDataInicio('')
    setHoraInicio('')
    setDataFim('')
    setHoraFim('')
    setNotas('')
    setQualidade(null)
  }
  
  // Iniciar edição de um registro
  const iniciarEdicao = (registro: RegistroSonoType) => {
    const dataInicioObj = registro.inicio
    const dataInicio = format(dataInicioObj, 'yyyy-MM-dd')
    const horaInicio = format(dataInicioObj, 'HH:mm')
    
    let dataFim = ''
    let horaFim = ''
    
    if (registro.fim) {
      const dataFimObj = registro.fim
      dataFim = format(dataFimObj, 'yyyy-MM-dd')
      horaFim = format(dataFimObj, 'HH:mm')
    }
    
    setDataInicio(dataInicio)
    setHoraInicio(horaInicio)
    setDataFim(dataFim)
    setHoraFim(horaFim)
    setNotas(registro.notas || '')
    setQualidade(registro.qualidade)
    
    setModoEdicao(true)
    setIdEdicao(registro.id)
  }
  
  // Cancelar edição
  const cancelarEdicao = () => {
    resetForm()
    setModoEdicao(false)
    setIdEdicao(null)
  }
  
  // Registrar sono atual
  const registrarSonoAtual = () => {
    const agora = new Date()
    setDataInicio(format(agora, 'yyyy-MM-dd'))
    setHoraInicio(format(agora, 'HH:mm'))
  }
  
  // Registrar acordar agora
  const registrarAcordarAgora = async (id: string) => {
    try {
      const agora = new Date()
      await sono.registros.finalizar(id, agora)
      
      // Recarregar registros
      const dadosAtualizados = await sono.registros.listarPorUsuario(usuarioId)
      setRegistros(dadosAtualizados)
    } catch (erro) {
      console.error('Erro ao registrar acordar:', erro)
      alert('Ocorreu um erro ao registrar o horário de acordar.')
    }
  }
  
  // Remover registro
  const removerRegistro = async (id: string) => {
    if (!confirm('Tem certeza que deseja remover este registro?')) return
    
    try {
      await sono.registros.remover(id)
      
      // Recarregar registros
      const dadosAtualizados = await sono.registros.listarPorUsuario(usuarioId)
      setRegistros(dadosAtualizados)
    } catch (erro) {
      console.error('Erro ao remover registro:', erro)
      alert('Ocorreu um erro ao remover o registro.')
    }
  }
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Registro de Sono (Banco de Dados)
      </h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Início do sono */}
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Moon className="h-4 w-4 mr-2 rotate-180" />
              Horário de dormir
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="data-inicio" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  id="data-inicio"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sono-primary focus:border-sono-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="hora-inicio" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Hora
                </label>
                <input
                  type="time"
                  id="hora-inicio"
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sono-primary focus:border-sono-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={registrarSonoAtual}
              className="mt-2 text-sm text-sono-primary hover:text-sono-secondary dark:text-sono-secondary dark:hover:text-sono-primary"
            >
              Registrar agora
            </button>
          </div>
          
          {/* Fim do sono */}
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Horário de acordar
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="data-fim" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  id="data-fim"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sono-primary focus:border-sono-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="hora-fim" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Hora
                </label>
                <input
                  type="time"
                  id="hora-fim"
                  value={horaFim}
                  onChange={(e) => setHoraFim(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sono-primary focus:border-sono-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Deixe em branco se ainda não acordou
            </div>
          </div>
        </div>
        
        {/* Qualidade do sono */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
            Qualidade do sono
          </label>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((valor) => (
              <button
                key={valor}
                type="button"
                onClick={() => setQualidade(valor)}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sono-primary"
                aria-label={`Qualidade ${valor} de 5`}
              >
                <Star 
                  className={`h-6 w-6 ${qualidade !== null && valor <= qualidade ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              </button>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {qualidade === null ? 'Selecione a qualidade do sono' : `Qualidade: ${qualidade}/5`}
          </div>
        </div>
        
        {/* Notas */}
        <div className="mb-6">
          <label htmlFor="notas" className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notas (opcional)
          </label>
          <textarea
            id="notas"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sono-primary focus:border-sono-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Exemplo: Acordei várias vezes, tive sonhos vívidos, etc."
          />
        </div>
        
        {/* Botões */}
        <div className="flex space-x-3">
          <button
            type="submit"
            className="px-4 py-2 bg-sono-primary text-white rounded-md hover:bg-sono-secondary focus:outline-none focus:ring-2 focus:ring-sono-primary focus:ring-offset-2"
          >
            {modoEdicao ? 'Atualizar Registro' : 'Registrar Sono'}
          </button>
          
          {modoEdicao && (
            <button
              type="button"
              onClick={cancelarEdicao}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
      
      {/* Lista de registros recentes */}
      <div>
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
          Registros Recentes
        </h3>
        
        {carregando ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sono-primary mx-auto"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Carregando registros...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {registros.length === 0 ? (
              <div className="text-gray-500 dark:text-gray-400 text-center py-4">
                Nenhum registro de sono encontrado
              </div>
            ) : (
              registros
                .sort((a, b) => b.inicio.getTime() - a.inicio.getTime())
                .slice(0, 5)
                .map((registro) => (
                  <div 
                    key={registro.id}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">
                          {formatarData(registro.inicio)}
                        </div>
                        
                        {registro.fim ? (
                          <div className="text-gray-600 dark:text-gray-300 text-sm">
                            Até {formatarData(registro.fim)}
                          </div>
                        ) : (
                          <div className="text-sono-primary dark:text-sono-secondary text-sm font-medium">
                            Ainda dormindo
                          </div>
                        )}
                        
                        {registro.fim && (
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {calcularDuracao(registro.inicio, registro.fim)}
                            </span>
                          </div>
                        )}
                        
                        {registro.qualidade !== null && (
                          <div className="flex mt-1">
                            {renderEstrelas(registro.qualidade)}
                          </div>
                        )}
                        
                        {registro.notas && (
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            "{registro.notas}"
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => iniciarEdicao(registro)}
                          className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          aria-label="Editar registro"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        
                        <button
                          onClick={() => removerRegistro(registro.id)}
                          className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          aria-label="Remover registro"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {!registro.fim && (
                      <button
                        onClick={() => registrarAcordarAgora(registro.id)}
                        className="mt-2 px-3 py-1 text-sm bg-sono-light text-sono-primary rounded-md hover:bg-opacity-70"
                      >
                        Registrar acordar agora
                      </button>
                    )}
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}