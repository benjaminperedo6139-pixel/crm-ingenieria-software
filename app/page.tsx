// CRM Dashboard - Customer Relationship Management System
// Proyecto Final - Ingeniería de Software

interface Cliente {
  id: number;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  estado: "Activo" | "Prospecto" | "Inactivo";
  valor: number;
}

interface Actividad {
  id: number;
  tipo: "Llamada" | "Reunión" | "Email" | "Tarea";
  descripcion: string;
  cliente: string;
  fecha: string;
}

const clientes: Cliente[] = [
  {
    id: 1,
    nombre: "Ana García",
    empresa: "TechSolutions S.A.",
    email: "ana.garcia@techsolutions.com",
    telefono: "+52 55 1234-5678",
    estado: "Activo",
    valor: 85000,
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    empresa: "Innovatech MX",
    email: "c.mendoza@innovatech.mx",
    telefono: "+52 33 9876-5432",
    estado: "Prospecto",
    valor: 42000,
  },
  {
    id: 3,
    nombre: "Laura Jiménez",
    empresa: "Global Commerce",
    email: "ljimenez@globalcommerce.com",
    telefono: "+52 81 4567-8901",
    estado: "Activo",
    valor: 120000,
  },
  {
    id: 4,
    nombre: "Roberto Pérez",
    empresa: "Distribuidora Norte",
    email: "rperez@disnorte.com",
    telefono: "+52 55 2345-6789",
    estado: "Inactivo",
    valor: 15000,
  },
  {
    id: 5,
    nombre: "María López",
    empresa: "Consultoría Integral",
    email: "mlopez@consulint.com",
    telefono: "+52 33 3456-7890",
    estado: "Activo",
    valor: 67500,
  },
];

const actividades: Actividad[] = [
  {
    id: 1,
    tipo: "Llamada",
    descripcion: "Seguimiento propuesta comercial Q4",
    cliente: "Ana García",
    fecha: "Hoy, 10:30",
  },
  {
    id: 2,
    tipo: "Reunión",
    descripcion: "Demo del producto - presentación ejecutiva",
    cliente: "Carlos Mendoza",
    fecha: "Hoy, 14:00",
  },
  {
    id: 3,
    tipo: "Email",
    descripcion: "Envío de contrato renovación anual",
    cliente: "Laura Jiménez",
    fecha: "Ayer, 09:15",
  },
  {
    id: 4,
    tipo: "Tarea",
    descripcion: "Preparar análisis de cuenta trimestral",
    cliente: "María López",
    fecha: "Ayer, 16:45",
  },
];

const estadoBadge: Record<Cliente["estado"], string> = {
  Activo: "bg-emerald-100 text-emerald-700",
  Prospecto: "bg-blue-100 text-blue-700",
  Inactivo: "bg-gray-100 text-gray-500",
};

const tipoIcono: Record<Actividad["tipo"], string> = {
  Llamada: "📞",
  Reunión: "🤝",
  Email: "✉️",
  Tarea: "✅",
};

const tipoColor: Record<Actividad["tipo"], string> = {
  Llamada: "bg-purple-100 text-purple-700",
  Reunión: "bg-blue-100 text-blue-700",
  Email: "bg-amber-100 text-amber-700",
  Tarea: "bg-emerald-100 text-emerald-700",
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function CRMDashboard() {
  const totalClientes = clientes.length;
  const clientesActivos = clientes.filter((c) => c.estado === "Activo").length;
  const prospectos = clientes.filter((c) => c.estado === "Prospecto").length;
  const valorTotal = clientes.reduce((sum, c) => sum + c.valor, 0);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* ── Barra de navegación ── */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-lg p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">CRM Pro</h1>
              <p className="text-indigo-200 text-xs">
                Customer Relationship Management
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-white underline underline-offset-4">
              Dashboard
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition">
              Clientes
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition">
              Ventas
            </a>
            <a href="#" className="text-indigo-200 hover:text-white transition">
              Reportes
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg text-sm font-medium">
              + Nuevo Cliente
            </button>
            <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* ── Encabezado de sección ── */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Panel de Control
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Resumen general de clientes y actividad comercial
          </p>
        </div>

        {/* ── Tarjetas de métricas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">
                Total Clientes
              </span>
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg text-lg">
                👥
              </span>
            </div>
            <p className="text-3xl font-bold text-slate-800">{totalClientes}</p>
            <p className="text-emerald-600 text-xs mt-1 font-medium">
              ↑ 12% este mes
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">
                Clientes Activos
              </span>
              <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg text-lg">
                ✅
              </span>
            </div>
            <p className="text-3xl font-bold text-slate-800">
              {clientesActivos}
            </p>
            <p className="text-emerald-600 text-xs mt-1 font-medium">
              ↑ 8% este mes
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">
                Prospectos
              </span>
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg text-lg">
                🎯
              </span>
            </div>
            <p className="text-3xl font-bold text-slate-800">{prospectos}</p>
            <p className="text-blue-600 text-xs mt-1 font-medium">
              → Sin cambios
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium">
                Valor Total Cartera
              </span>
              <span className="bg-amber-100 text-amber-600 p-2 rounded-lg text-lg">
                💰
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {formatCurrency(valorTotal)}
            </p>
            <p className="text-emerald-600 text-xs mt-1 font-medium">
              ↑ 23% este trimestre
            </p>
          </div>
        </div>

        {/* ── Tabla de clientes + Actividad reciente ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tabla clientes */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">
                Clientes Recientes
              </h3>
              <button className="text-indigo-600 text-sm font-medium hover:underline">
                Ver todos →
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                    <th className="text-left px-6 py-3">Cliente</th>
                    <th className="text-left px-6 py-3">Empresa</th>
                    <th className="text-left px-6 py-3">Estado</th>
                    <th className="text-right px-6 py-3">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clientes.map((cliente) => (
                    <tr
                      key={cliente.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-xs">
                            {cliente.nombre
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">
                              {cliente.nombre}
                            </p>
                            <p className="text-slate-400 text-xs">
                              {cliente.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {cliente.empresa}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${estadoBadge[cliente.estado]}`}
                        >
                          {cliente.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-slate-700">
                        {formatCurrency(cliente.valor)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Actividad reciente */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">
                Actividad Reciente
              </h3>
              <button className="text-indigo-600 text-sm font-medium hover:underline">
                Ver todo →
              </button>
            </div>
            <ul className="divide-y divide-slate-100">
              {actividades.map((act) => (
                <li
                  key={act.id}
                  className="px-6 py-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${tipoColor[act.tipo]}`}
                    >
                      {tipoIcono[act.tipo]} {act.tipo}
                    </span>
                    <div>
                      <p className="text-sm text-slate-700 font-medium leading-tight">
                        {act.descripcion}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {act.cliente} · {act.fecha}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Barra de progreso de pipeline ── */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-800 mb-4">
            Pipeline de Ventas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                etapa: "Prospección",
                cantidad: 12,
                valor: 280000,
                color: "bg-slate-400",
                pct: "w-full",
              },
              {
                etapa: "Calificación",
                cantidad: 8,
                valor: 195000,
                color: "bg-blue-400",
                pct: "w-3/4",
              },
              {
                etapa: "Propuesta",
                cantidad: 5,
                valor: 142000,
                color: "bg-indigo-500",
                pct: "w-1/2",
              },
              {
                etapa: "Cierre",
                cantidad: 3,
                valor: 87500,
                color: "bg-emerald-500",
                pct: "w-1/4",
              },
            ].map((etapa) => (
              <div key={etapa.etapa} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    {etapa.etapa}
                  </span>
                  <span className="text-slate-400">{etapa.cantidad}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${etapa.color} ${etapa.pct} rounded-full`}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  {formatCurrency(etapa.valor)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-2">
          <p className="text-slate-400 text-xs text-center">
            CRM Pro © 2024 · Sistema de Gestión de Relaciones con Clientes
          </p>
          <p className="text-slate-600 text-sm font-medium text-center">
            Proyecto final de la materia Ingeniería de software - Benjamin
            Peredo -225361393
          </p>
        </div>
      </footer>
    </div>
  );
}
