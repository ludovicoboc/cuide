import { Card } from '@/app/components/ui/Card';
// import { Card } from '@/app/components/ui/Card'; // Remover import duplicado
import { PainelDia } from '@/app/components/inicio/PainelDia';
import { ListaPrioridades } from '@/app/components/inicio/ListaPrioridades';
import { LembretePausas } from '@/app/components/inicio/LembretePausas';
import { ChecklistMedicamentos } from '@/app/components/inicio/ChecklistMedicamentos';
import { ProximaProvaCard } from '@/app/components/inicio/ProximaProvaCard'; // Importar o novo card

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Início</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Painel Visual do Dia */}
        <div className="md:col-span-2">
          <Card title="Painel do Dia">
            <PainelDia />
          </Card>
        </div>
        
        {/* Lista de Prioridades */}
        <div>
          <Card title="Prioridades do Dia">
            <div className="space-y-6">
              <ListaPrioridades />
              
              {/* Separador */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              
              {/* Checklist de Medicamentos Diários */}
              <ChecklistMedicamentos />
            </div>
          </Card>
        </div>
      </div>
      
      {/* Lembretes de Pausas */}
      {/* <Card title="Lembretes de Pausas"> */} {/* O componente ProximaProvaCard já é um Card */}
        <LembretePausas />
      {/* </Card> */} {/* Ajuste: LembretePausas pode não precisar estar dentro de um Card se ProximaProvaCard for adicionado separadamente */}

      {/* Card Próximas Provas */}
      <ProximaProvaCard />

    </div>
  )
}
