import { DemoCategoryPage } from "@/components/shop-preview/demo-category-page";

export default function DestiladosPage() {
  return (
    <DemoCategoryPage
      eyebrow="Loja / Destilados"
      title="Destilados"
      description="Whiskies, gins e outras escolhas para quem gosta de descobrir novos perfis."
      filters={["Whisky", "Gin", "Rum", "Brasil", "Escócia", "Inglaterra"]}
      products={[
        { label: "Whisky selecionado", detail: "750 ml · perfil clássico", price: "R$ 229,90", tone: "from-[#6e3c1b] to-[#b77c42]" },
        { label: "Gin premium", detail: "750 ml · botânico e fresco", price: "R$ 179,90", tone: "from-[#466251] to-[#8aa18d]" },
        { label: "Bourbon reserva", detail: "750 ml · notas amadeiradas", price: "R$ 249,90", tone: "from-[#7f421c] to-[#c47c3c]" },
        { label: "Rum envelhecido", detail: "750 ml · macio e aromático", price: "R$ 189,90", tone: "from-[#633016] to-[#a9602a]" },
        { label: "Single malt", detail: "750 ml · seleção especial", price: "R$ 329,90", tone: "from-[#51301f] to-[#8e6545]" },
        { label: "Gin cítrico", detail: "750 ml · leve e vibrante", price: "R$ 159,90", tone: "from-[#62715a] to-[#a1b39a]" },
        { label: "Whisky blend", detail: "750 ml · equilibrado e versátil", price: "R$ 199,90", tone: "from-[#7a4a25] to-[#b98556]" },
        { label: "Edição especial", detail: "750 ml · lote de destaque", price: "R$ 359,90", tone: "from-[#4b2717] to-[#8d5d36]" },
      ]}
    />
  );
}
