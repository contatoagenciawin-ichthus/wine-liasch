import { DemoCategoryPage } from "@/components/shop-preview/demo-category-page";

export default function EspumantesPage() {
  return (
    <DemoCategoryPage
      eyebrow="Loja / Espumantes"
      title="Espumantes"
      description="Brut, rosé e rótulos para celebrações, presentes e encontros especiais."
      filters={["Brut", "Rosé", "Nature", "Brasil", "Argentina", "Itália"]}
      products={[
        { label: "Espumante brut", detail: "750 ml · frescor e elegância", price: "R$ 139,90", tone: "from-[#d0b37a] to-[#efe0b8]" },
        { label: "Brut rosé", detail: "750 ml · delicado e vibrante", price: "R$ 149,90", tone: "from-[#c87883] to-[#edc2c8]" },
        { label: "Nature especial", detail: "750 ml · seco e preciso", price: "R$ 169,90", tone: "from-[#d9c37d] to-[#f1e6bd]" },
        { label: "Reserva brut", detail: "750 ml · perfil gastronômico", price: "R$ 189,90", tone: "from-[#9d8743] to-[#d3bf78]" },
        { label: "Rosé reserva", detail: "750 ml · elegante e frutado", price: "R$ 159,90", tone: "from-[#b86876] to-[#df9ba5]" },
        { label: "Método clássico", detail: "750 ml · longa permanência", price: "R$ 219,90", tone: "from-[#b59c54] to-[#e3d39a]" },
        { label: "Brut jovem", detail: "750 ml · leve e versátil", price: "R$ 119,90", tone: "from-[#cbbf79] to-[#eee6bb]" },
        { label: "Edição de celebração", detail: "750 ml · seleção do Empório", price: "R$ 249,90", tone: "from-[#897332] to-[#c7ae64]" },
      ]}
    />
  );
}
