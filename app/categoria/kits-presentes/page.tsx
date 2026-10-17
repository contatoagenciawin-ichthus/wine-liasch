import { DemoCategoryPage } from "@/components/shop-preview/demo-category-page";

export default function KitsPresentesPage() {
  return (
    <DemoCategoryPage
      eyebrow="Loja / Kits & Presentes"
      title="Kits & Presentes"
      description="Combinações pensadas para presentear com curadoria, sem recorrer ao óbvio."
      filters={["Vinhos", "Espumantes", "Executivos", "Celebrações", "Até R$ 200", "Acima de R$ 200"]}
      products={[
        { label: "Kit clássico", detail: "Vinho + embalagem para presente", price: "R$ 189,90", tone: "from-[#3f071b] to-[#7b173e]" },
        { label: "Kit celebração", detail: "Espumante + seleção especial", price: "R$ 219,90", tone: "from-[#d0b37a] to-[#efe0b8]" },
        { label: "Kit executivo", detail: "Seleção premium para presente", price: "R$ 279,90", tone: "from-[#51301f] to-[#8e6545]" },
        { label: "Kit descoberta", detail: "Dois rótulos selecionados", price: "R$ 249,90", tone: "from-[#2f3b24] to-[#66754a]" },
        { label: "Kit rosé", detail: "Rosé + apresentação especial", price: "R$ 199,90", tone: "from-[#c87883] to-[#edc2c8]" },
        { label: "Kit reserva", detail: "Rótulo reserva + acessórios", price: "R$ 329,90", tone: "from-[#4e101e] to-[#2a0b10]" },
        { label: "Kit boas-vindas", detail: "Seleção versátil para presentear", price: "R$ 169,90", tone: "from-[#a6933a] to-[#e7daa0]" },
        { label: "Kit assinatura", detail: "Curadoria especial do Empório", price: "R$ 389,90", tone: "from-[#6e3c1b] to-[#b77c42]" },
      ]}
    />
  );
}
