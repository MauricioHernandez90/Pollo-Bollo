import { useEffect, useRef, useState } from "react";
import heroImg from "./assets/hero.webp";
import cartoonImg from "./assets/cartoon.webp";
import showInfantilImg from "./assets/show-infantil.webp";
import showAdultosImg from "./assets/show-adultos.webp";
import babyImg from "./assets/baby.webp";
import plusImg from "./assets/plus.webp";
import navidenoImg from "./assets/navideno.webp";
import blurBg from "./assets/blur-bg.webp";
import logoImg from "./assets/logo-pollo-bollo.webp";
import logoEmpresaImg from "./assets/logo-empresa.png";

/* ============================================================
   ⚙️ CONFIGURACIÓN RÁPIDA
   ============================================================ */
const WHATSAPP_NUMBER = "523314397435";
const WHATSAPP_DISPLAY = "33 1439 7435";
const FACEBOOK_URL = "https://www.facebook.com/payasopollobollodeguadalajara";
const INSTAGRAM_URL = "https://www.instagram.com/payaso_pollo_bollo/";
const TIKTOK_URL = "https://www.tiktok.com/@payasopollobollo?_r=1&_t=ZS-9AQZHQn3N5A";
const BRAND_NAME = "Pollo Bollo";
const LOCATION = "Lagos de Moreno, Jalisco";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/* ============================================================ */

type Variant = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  badge?: string;
  duration: string;
  audience: string;
  fullDesc: string;
  includes: string[];
  ideal: string[];
  note: string;
};

type Package = {
  id: string;
  title: string;
  shortTitle: string;
  category: "familiar" | "adultos" | "especial";
  badge?: string;
  color: string;
  light: string;
  duration: string;
  audience: string;
  bullets: string[];
  ideal: string[];
  image: string;
  imageIsBgOnly?: boolean;
  fullDesc: string;
  includes: string[];
  note: string;
  variants?: Variant[];
};

const packages: Package[] = [
  {
    id: "show-pollo",
    title: "EL SHOW DEL PAYASO POLLO BOLLO",
    shortTitle: "Show Pollo Bollo",
    category: "familiar",
    color: "#1E40FF",
    light: "#E0F6FF",
    duration: "60 min",
    audience: "Niños y familia",
    bullets: ["60 min de show dinámico", "Magia profesional interactiva", "Audio pro + premios"],
    ideal: ["Fiestas infantiles", "Cumpleaños", "Escuelas"],
    image: showInfantilImg,
    fullDesc: "Un espectáculo moderno, vibrante y 100% familiar. Magia de alto impacto, humor blanco, circo, música y participación de niños y adultos de principio a fin. Nada de payaso tradicional aburrido: es un show tipo Pixar, dinámico, visual y premium.",
    includes: ["🎩 Magia profesional con aparición y desaparición", "🤹 Rutinas de circo y malabares", "🎤 Animación con micrófono y bocina profesional", "🎁 10+ premios y regalos incluidos", "🎨 Maquillaje flash para festejado", "📸 Sesión de fotos al final"],
    note: "El costo puede variar de acuerdo con la ubicación y logística del evento.",
  },
  {
    id: "adulto-tx8",
    title: "SHOW PARA ADULTOS – BOLLO EL TX8",
    shortTitle: "Bollo El Tx8",
    category: "adultos",
    badge: "Solo adultos",
    color: "#7C3AED",
    light: "#F5E8FF",
    duration: "70 min",
    audience: "Adultos +18",
    bullets: ["Humor picante inteligente", "Magia + concursos", "Interacción total"],
    ideal: ["Despedidas", "Cumpleaños adultos", "Empresas"],
    image: showAdultosImg,
    fullDesc: "El lado más picosito de Pollo Bollo. Bollo El Tx8 trae un show sin filtros, con doble sentido inteligente, magia para adultos, concursos subidos de tono (siempre con respeto) y un ambiente de antro-comedia. Ideal para que los papás también tengan su fiesta.",
    includes: ["🔥 Rutina de stand-up picardía", "🍸 Juegos y concursos para adultos", "🎩 Magia con toques de bar", "🎧 Audio pro + luces", "🏆 Premios divertidos", "📹 Momentos virales garantizados"],
    note: "Show 100% para adultos. Humor con picardía, sin vulgaridad extrema.",
  },
  {
    id: "baby",
    title: "BABY SHOWER – EDICIÓN TERNURA",
    shortTitle: "Baby Shower",
    category: "especial",
    color: "#FF5AA2",
    light: "#FFF0F6",
    duration: "60 min",
    audience: "Familia y amigos",
    bullets: ["Cálido y emotivo", "Juegos tiernos", "Recuerdo especial"],
    ideal: ["Baby Shower", "Revelación", "Bienvenida bebé"],
    image: babyImg,
    fullDesc: "Un espectáculo cálido, divertido y lleno de momentos especiales, ideal para celebrar la llegada de ese nuevo integrante de la familia. 💕 Haz de tu Baby Shower una celebración verdaderamente memorable. Juegos tiernos, magia suave, humor familiar y una intervención emotiva para mamá.",
    includes: ["💕 Bienvenida emotiva para futuros papás", "🍼 Juegos de Baby Shower con premios", "✨ Magia tierna y participativa", "🎤 Animación cálida y respetuosa", "🎁 Kit de premios pastel", "📸 Foto grupal con marco baby"],
    note: "El costo puede variar de acuerdo con la ubicación y logística del evento.",
  },
  {
    id: "plus",
    title: "PAQUETE PLUS – EXPERIENCIA TOTAL",
    shortTitle: "Experiencia Plus",
    category: "especial",
    badge: "MÁS POPULAR",
    color: "#7C3AED",
    light: "#EDE9FF",
    duration: "90-120 min",
    audience: "Todos",
    bullets: ["2 etapas dinámicas", "Botarga + maquillaje", "Intervención visual"],
    ideal: ["Fiestas premium", "Eventos grandes", "Experiencia total"],
    image: plusImg,
    fullDesc: "Una experiencia completa de entretenimiento para disfrutar, sorprender y hacer de tu celebración un momento inolvidable. El Paquete Plus combina diferentes experiencias durante la celebración, creando un ambiente dinámico en el que niños y adultos participan, conviven y disfrutan de principio a fin. 🎭 Una intervención dinámica y visual que convierte el espacio en una auténtica fiesta de alegría y movimiento. Y esto es apenas el comienzo de la Experiencia Total Pollo Bollo.",
    includes: ["🎨 ETAPA 1: Maquillaje artístico + Magia Close-Up + Botarga saludo", "🤖 ETAPA 2: Show de botarga interactiva con baile y juegos", "🎭 Escenografía móvil y fondo instagrameable", "🔊 Audio profesional + micro inalámbrico", "🎁 Bolsa de 15+ premios premium", "✨ Lluvia de burbujas y confeti final"],
    note: "El costo puede variar de acuerdo con la ubicación y logística del evento. Agenda tu fecha con Pollo Bollo y déjate sorprender por la magia.",
  },
  {
    id: "navidad",
    title: "SHOW NAVIDEÑO 2026-2027",
    shortTitle: "Show Navideño",
    category: "especial",
    badge: "Temporada",
    color: "#DC2626",
    light: "#FFF1F1",
    duration: "60-75 min",
    audience: "Familiar y adultos",
    bullets: ["2 versiones: Familiar y Tx8", "Magia con nieve", "Posada premium"],
    ideal: ["Posadas", "Escuelas", "Empresas"],
    image: navidenoImg,
    fullDesc: "La Navidad llega con Pollo Bollo en dos versiones para que elijas la que mejor se adapte a tu evento.",
    includes: ["🎅 Vestuario navideño completo", "❄️ Magia de nieve y luces", "🎄 Juegos de posada", "🎁 Regalos navideños", "🎶 Villancicos con participación", "📸 Foto con marco navideño"],
    note: "Disponible noviembre 2026 - enero 2027. Cupo limitado.",
    variants: [
      {
        id: "nav-familiar",
        label: "Familiar",
        emoji: "👨‍👩‍👧",
        color: "#DC2626",
        badge: "Temporada",
        duration: "60 min",
        audience: "Familiar navideño",
        fullDesc: "¡La Navidad llega con Pollo Bollo! Duendes, magia de nieve, aparición de regalos, villancicos interactivos y la visita especial de un personaje navideño. Show con vestuario de temporada, luces y mucha alegría decembrina.",
        includes: ["🎅 Vestuario navideño completo", "❄️ Magia de nieve y luces", "🎄 Juegos de posada y piñata", "🎁 Regalos navideños", "🎶 Villancicos con participación", "📸 Foto con marco navideño"],
        ideal: ["Posadas", "Escuelas", "Empresas"],
        note: "Disponible noviembre 2026 - enero 2027. Cupo limitado.",
      },
      {
        id: "nav-adultos",
        label: "Adultos +18",
        emoji: "🍻",
        color: "#7F1D1D",
        badge: "Edición picante",
        duration: "75 min",
        audience: "Posada de adultos",
        fullDesc: "La posada Godín como nunca la viste. Bollo El Tx8 en versión Santa Picosito: concursos de tragos, intercambios con castigos divertidos, magia de bar navideña y el humor que hace que hasta el jefe se ría. Ideal para cerrar el año con todo.",
        includes: ["🎅 Show de Santa Tx8 con humor adulto", "🎲 Dinámicas de posada +18", "🍻 Magia con botellas y shots", "🏆 Premios de broma y en serio", "🎧 Audio y luces de fiesta", "🎉 Cierre con baile navideño"],
        ideal: ["Posadas de empresa", "Adultos", "Fiestas fin de año"],
        note: "Ideal para posadas de empresas y grupos de amigos. Reservar con anticipación.",
      },
    ],
  },
];

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "video", label: "Video" },
  { id: "juego", label: "Juego" },
  { id: "paquetes", label: "Paquetes" },
  { id: "plus", label: "Experiencia Plus" },
  { id: "shows", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.5 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.54-.1z" />
    </svg>
  );
}

/* ============================================================
   MODAL DE PAQUETE — componente aislado con soporte de variantes
   ============================================================ */
function PackageModal({
  pkg,
  onClose,
  onWhatsApp,
}: {
  pkg: Package;
  onClose: () => void;
  onWhatsApp: (shortTitle: string) => void;
}) {
  const [variantIndex, setVariantIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const variant = pkg.variants?.[variantIndex];
  const displayBadge = variant?.badge ?? pkg.badge;
  const displayDuration = variant?.duration ?? pkg.duration;
  const displayAudience = variant?.audience ?? pkg.audience;
  const displayFullDesc = variant?.fullDesc ?? pkg.fullDesc;
  const displayIncludes = variant?.includes ?? pkg.includes;
  const displayIdeal = variant?.ideal ?? pkg.ideal;
  const displayNote = variant?.note ?? pkg.note;
  const displayColor = variant?.color ?? pkg.color;
  const quoteLabel = variant ? `${pkg.shortTitle} – ${variant.label}` : pkg.shortTitle;

  /* ESC cierra lightbox → modal */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomedImage) setZoomedImage(null);
      else onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomedImage, onClose]);

  /* Bloquear scroll del body */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center p-0 lg:p-6 max-w-[100vw]"
      >
        <div
          className="absolute inset-0 bg-[#0D0A18]/70 backdrop-blur-[8px]"
          onClick={onClose}
        />
        <div className="relative w-full lg:max-w-[880px] max-h-[92vh] lg:max-h-[88vh] bg-white rounded-t-[2rem] lg:rounded-[2rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] flex flex-col">
          {/* Header con flyer clickable */}
          <div className="relative h-[300px] lg:h-[400px] shrink-0 overflow-hidden bg-[#0D0A18]">
            <button
              type="button"
              onClick={() => setZoomedImage(pkg.image)}
              aria-label="Ampliar flyer a pantalla completa"
              className="absolute inset-0 w-full h-full group/img cursor-zoom-in flex items-center justify-center"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className="px-5 h-11 rounded-full font-black text-[14px] inline-flex items-center gap-2 transition-all duration-300 group-hover/img:scale-105 shadow-[0_0_24px_rgba(255,214,10,0.8),0_0_48px_rgba(255,214,10,0.4)] border-2 border-[#FFD60A]"
                      style={{ background: "#FFD60A", color: "#0F0A1E" }}
                    >
                  <span className="text-[18px]">👆</span> Click en la imagen
                </span>
              </div>
            </button>

            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-black font-black flex items-center justify-center hover:bg-white transition z-10"
            >
              ✕
            </button>

            <div className="absolute bottom-4 left-6 right-6 pointer-events-none">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="px-3 h-7 rounded-full bg-white text-black text-[11px] font-black flex items-center">
                  ⏱ {displayDuration}
                </span>
                <span
                  className="px-3 h-7 rounded-full text-white text-[11px] font-black flex items-center"
                  style={{ background: displayColor }}
                >
                  {displayAudience}
                </span>
                {displayBadge && (
                  <span className="px-3 h-7 rounded-full bg-[var(--yellow)] text-black text-[11px] font-black flex items-center">
                    {displayBadge}
                  </span>
                )}
              </div>
              <h3
                id="modal-title"
                className="display font-black text-white text-[20px] lg:text-[28px] leading-[1.1] drop-shadow break-words"
              >
                {pkg.title}
              </h3>
            </div>
          </div>

          {/* Switch de variantes */}
          {pkg.variants && pkg.variants.length > 1 && (
            <div className="shrink-0 border-b border-[#F0E6F5] bg-white px-6 lg:px-8 pt-4">
              <div className="inline-flex gap-1.5 p-1.5 rounded-full bg-[#F6F2FF] border border-[#EDE6FF] w-full sm:w-auto overflow-x-auto scrollbar-hide">
                {pkg.variants.map((v, i) => {
                  const active = i === variantIndex;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setVariantIndex(i)}
                      className={`flex items-center gap-2 px-5 h-10 rounded-full font-extrabold text-[13px] transition whitespace-nowrap shrink-0 ${
                        active ? "text-white shadow" : "text-[#6B6780] hover:text-[#1A1033]"
                      }`}
                      style={active ? { background: v.color } : undefined}
                    >
                      <span className="text-[15px]">{v.emoji}</span>
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contenido */}
          <div className="overflow-y-auto p-6 lg:p-8 flex-1">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
              <div className="min-w-0">
                <h4 className="font-black text-[12px] tracking-widest uppercase text-[var(--muted)]">
                  Descripción completa
                </h4>
                <p className="mt-3 text-[14px] lg:text-[15px] leading-[1.6] font-medium text-[#2D2540] break-words">
                  {displayFullDesc}
                </p>

                <h4 className="mt-8 font-black text-[12px] tracking-widest uppercase text-[var(--muted)]">
                  Qué incluye
                </h4>
                <div className="mt-3 grid gap-2.5">
                  {displayIncludes.map((inc) => (
                    <div
                      key={inc}
                      className="flex gap-3 p-3 rounded-2xl bg-[#F8F5FF] border border-[#EDE6FF] text-[13px] font-semibold leading-[1.4] min-w-0"
                    >
                      <span className="shrink-0">{inc.split(" ")[0]}</span>
                      <span className="min-w-0 break-words">{inc.substring(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 min-w-0">
                <div className="p-5 rounded-[1.5rem] bg-[#1A1033] text-white">
                  <div className="font-black text-[14px]">Ideal para</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {displayIdeal.map((i) => (
                      <span
                        key={i}
                        className="px-3 h-7 rounded-full bg-white/15 border border-white/10 text-[12px] font-bold flex items-center"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 p-3 rounded-xl bg-white/10 border border-white/10 text-[12px] leading-[1.4] text-white/70 font-medium break-words">
                    📋 {displayNote}
                  </div>
                </div>

                <div className="p-5 rounded-[1.5rem] bg-[#FFF8D6] border border-[#FFEFB0]">
                  <div className="font-black text-[14px]">¿Listo para reservar?</div>
                  <p className="mt-2 text-[13px] font-medium leading-[1.4] text-[#5A4A00]">
                    Respuesta en 15 min. Apartas con anticipo y el resto el día del evento.
                  </p>
                  <button
                    onClick={() => {
                      onWhatsApp(quoteLabel);
                      onClose();
                    }}
                    className="mt-4 w-full h-12 rounded-full bg-[#1A1033] text-white font-black text-[14px] inline-flex items-center justify-center gap-2 hover:bg-black transition"
                  >
                    Cotizar {quoteLabel} <WhatsAppIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="mt-2 w-full h-11 rounded-full bg-white border-2 border-[#1A1033]/10 font-bold text-[13px]"
                  >
                    Seguir viendo paquetes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Flyer ampliado"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur text-white font-black flex items-center justify-center hover:bg-white/20 transition z-10"
          >
            ✕
          </button>
          <img
            src={zoomedImage}
            alt="Flyer ampliado"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 h-10 rounded-full bg-white/10 backdrop-blur text-white text-[12px] font-bold flex items-center gap-2 pointer-events-none whitespace-nowrap">
            Toca fuera o presiona{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-black">ESC</kbd> para cerrar
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("pb-theme");
    if (saved === "dark" || saved === "light") return saved;
    return "dark"; // Default en primera visita: modo oscuro
  });
  const [filter, setFilter] = useState<"todos" | "familiar" | "adultos" | "especial">("todos");
  const [selected, setSelected] = useState<Package | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [form, setForm] = useState({ nombre: "", evento: "Fiesta Infantil", fecha: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [filterFeedback, setFilterFeedback] = useState<string | null>(null);
  const [heroCtaClicked, setHeroCtaClicked] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.05,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pb-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const filtered = filter === "todos" ? packages : packages.filter((p) => p.category === filter);

  const handleWhatsApp = (pkg?: string, fromHero?: boolean) => {
    const text = pkg
      ? `Hola ${BRAND_NAME}! 🐥 Quiero cotizar el ${pkg}. ¿Me pasas informes?`
      : `Hola ${BRAND_NAME}! 🐥 Quiero cotizar un show. ¿Me pasas informes?`;
    setToast(pkg ? `Abriendo WhatsApp para ${pkg} 💬` : "Abriendo WhatsApp • Respuesta en 15 min 💬");
    if (fromHero) {
      setHeroCtaClicked(true);
      setTimeout(() => setHeroCtaClicked(false), 2000);
    }
    try {
      window.open(waLink(text), "_blank");
    } catch {
      /* no-op */
    }
  };

  const onFilter = (id: "todos" | "familiar" | "adultos" | "especial") => {
    setFilter(id);
    setFilterFeedback(`Mostrando: ${id}`);
    setTimeout(() => setFilterFeedback(null), 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[var(--ink)] relative overflow-x-hidden selection:bg-[var(--yellow)] selection:text-black max-w-[100vw]">
      {/* Confetti */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden max-w-[100vw]" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="confetti absolute w-3 h-5 rounded-sm"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              background: ["#C8005A", "#FFD60A", "#00D5FF", "#7C3AED", "#1E40FF"][i % 5],
              top: `-5vh`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-[var(--border)]" : "bg-white border-transparent"}`}
        style={{ top: "var(--safe-area-inset-top)" }}
      >
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8 h-[72px] flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group shrink-0" aria-label="Ir al inicio">
            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(255,214,10,0.3)] group-hover:rotate-6 transition overflow-hidden border border-[#F0E6F5] p-1 shrink-0">
              <img
                src={logoImg}
                alt="Pollo Bollo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-none">
              <div className="display font-black text-[20px] lg:text-[22px] tracking-tight flex items-center gap-1">
                {BRAND_NAME} <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow)] inline-block ml-1" />
              </div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[var(--muted)] uppercase -mt-0.5">
                Magia • Circo • Humor
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-[14.5px] font-semibold text-[#2D2540]/80 hover:text-[var(--magenta)] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Cambiar a modo día" : "Cambiar a modo noche"}
              title={theme === "dark" ? "Modo día" : "Modo noche"}
              className="theme-toggle w-11 h-11 rounded-full bg-[#F6F2FF] hover:bg-[#EDE6FF] flex items-center justify-center text-[17px] transition shrink-0 active:scale-95"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              data-testid="agenda-cta"
              onClick={() => handleWhatsApp()}
              className="theme-cta hidden sm:inline-flex h-11 px-6 rounded-full bg-[var(--ink)] text-white font-bold text-[14px] items-center gap-2 hover:bg-black transition shadow-[0_8px_20px_rgba(0,0,0,0.18)] active:scale-[0.98]"
            >
              ¡Agenda tu fecha! <span className="text-[16px]">🎉</span>
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenu}
              className="md:hidden w-11 h-11 rounded-full flex items-center justify-center border transition"
              style={{
                background: "var(--hamburger-bg)",
                borderColor: "var(--hamburger-border)",
              }}
            >
              <div className="space-y-1.5">
                <div
                  className={`w-5 h-0.5 rounded-full transition ${mobileMenu ? "rotate-45 translate-y-2" : ""}`}
                  style={{ background: "var(--hamburger-line)" }}
                />
                <div
                  className={`w-5 h-0.5 rounded-full transition ${mobileMenu ? "opacity-0" : ""}`}
                  style={{ background: "var(--hamburger-line)" }}
                />
                <div
                  className={`w-5 h-0.5 rounded-full transition ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`}
                  style={{ background: "var(--hamburger-line)" }}
                />
              </div>
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t border-[var(--border)] bg-white px-5 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileMenu(false)}
                className="text-[17px] font-bold"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => handleWhatsApp()}
              className="mt-2 h-12 rounded-full bg-[var(--magenta)] text-white font-extrabold"
            >
              ¡Agenda tu fecha! 🎉
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-[#FFFEF8] max-w-[100vw]">
        <div className="absolute inset-0 -z-10 overflow-hidden max-w-full" aria-hidden="true">
          <div className="absolute -top-10 left-0 w-[320px] h-[320px] bg-[#FFD60A]/30 rounded-full blur-[50px]" />
          <div className="absolute top-10 right-0 w-[360px] h-[360px] bg-[#00D5FF]/20 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[240px] bg-[#C8005A]/10 rounded-full blur-[60px] -translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-[1240px] px-5 lg:px-8 pt-10 lg:pt-16 pb-12 lg:pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="relative z-10 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-white border border-[#F0E6F5] shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-[12px] font-bold tracking-wide max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#00D5FF] animate-pulse" /> Magia • Circo • Humor • Show Premium
            </div>

            <h1 className="display mt-6 text-[40px] sm:text-[52px] lg:text-[66px] font-black leading-[0.92] tracking-tight break-words">
              <span className="block">¡La Fiesta Que</span>
              <span className="block">Todos</span>
              <span className="block">Recordarán!</span>
              <span
                className="block mt-2 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #C8005A 0%, #FFD60A 50%, #1E40FF 100%)" }}
              >
                {BRAND_NAME}
              </span>
            </h1>

            <p className="mt-5 text-[17px] lg:text-[18px] leading-[1.6] text-[#3D3750]/80 max-w-[560px] font-medium">
              Un espectáculo lleno de magia, humor y diversión para toda la familia.{" "}
              <span className="font-extrabold text-[var(--ink)]">
                60 minutos de show dinámico, moderno y espectacular.
              </span>{" "}
              Nada de payaso de miedo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { k: "10+", v: "Regalos" },
                { k: "60 Min", v: "Puro show" },
                { k: "Audio Pro", v: "Bocina + mic" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex items-center gap-3 px-4 h-[52px] rounded-2xl bg-white border border-[#F1E8FF] shadow-[0_6px_20px_rgba(124,58,237,0.08)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F6F0FF] flex items-center justify-center font-black text-[var(--purple)] text-[14px]">
                    {s.k[0]}
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-[15px]">{s.k}</div>
                    <div className="text-[12px] text-[var(--muted)] font-bold">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <button
                data-testid="hero-whatsapp"
                onClick={() => handleWhatsApp(undefined, true)}
                className={`h-[52px] px-7 rounded-full font-extrabold text-[15px] inline-flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(200,0,90,0.28)] hover:translate-y-[-1px] transition-all active:scale-[0.98] ${
                  heroCtaClicked ? "bg-[#1A1033] text-white" : "bg-[var(--magenta)] text-white"
                }`}
              >
                {heroCtaClicked ? "✓" : <WhatsAppIcon className="w-5 h-5" />}{" "}
                {heroCtaClicked ? "¡Abriendo WhatsApp!" : "Cotizar Ahora - WhatsApp"}
              </button>
              <a
                href="/pollo-impacto.html"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-7 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C8005A] text-white font-extrabold text-[15px] inline-flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(124,58,237,0.35)] hover:translate-y-[-1px] hover:shadow-[0_16px_32px_rgba(124,58,237,0.45)] transition-all active:scale-[0.98]"
              >
                <span className="text-[18px]">🎮</span> Jugar Pollo Impacto
              </a>
              <a
                href="#paquetes"
                className="h-[52px] px-7 rounded-full bg-white border-2 border-[#1A1033] text-[#1A1033] font-extrabold text-[15px] flex items-center justify-center hover:bg-[#1A1033] hover:text-white transition active:scale-[0.98]"
              >
                Ver Paquetes ↓
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[13px] text-[var(--muted)] font-semibold flex-wrap">
              <span className="w-6 h-6 rounded-full bg-[#E6FFE6] flex items-center justify-center">✔</span> Respuesta en
              menos de 15 minutos • {LOCATION} y región
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center min-w-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
              <div
                className="w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] bg-[#FFD60A] rounded-[40%_60%_60%_40%/50%_40%_60%_50%] shadow-[0_20px_60px_rgba(255,214,10,0.4)] floaty-slow"
                style={{ animation: "blobMorph 8s ease-in-out infinite" }}
              />
              <div className="absolute w-[280px] h-[280px] bg-[#00D5FF] rounded-full -translate-x-12 translate-y-12 opacity-80 floaty" />
              <div
                className="absolute w-[220px] h-[220px] bg-[#C8005A] rounded-full translate-x-16 -translate-y-8 opacity-80 floaty"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div className="relative z-10 w-[88%] max-w-[440px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] border-[8px] border-white rotate-1 hover:rotate-0 transition duration-700">
              <img
                src={heroImg}
                alt="Payaso Pollo Bollo con saco de caritas felices"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[1.5rem] bg-white/90 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[var(--yellow)] flex items-center justify-center text-xl">🎩</div>
                <div className="min-w-0">
                  <div className="font-black text-[13px] leading-none truncate">Show 100% interactivo</div>
                  <div className="text-[11px] text-[var(--muted)] font-semibold truncate">Niños + adultos participan</div>
                </div>
                <div className="ml-auto w-7 h-7 rounded-full bg-[var(--ink)] text-white flex items-center justify-center text-[12px]">→</div>
              </div>
            </div>

            <div className="absolute top-[8%] right-[4%] px-3 h-9 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] border flex items-center gap-2 font-extrabold text-[12px] floaty max-w-[140px] truncate">
              <span className="w-2 h-2 rounded-full bg-[#00D5FF] shrink-0" /> Magia Pro
            </div>
            <div
              className="absolute bottom-[16%] left-[2%] px-3 h-9 rounded-full bg-[#1A1033] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] flex items-center gap-2 font-extrabold text-[12px] floaty max-w-[180px] truncate"
              style={{ animationDelay: "0.6s" }}
            >
              🎁 10+ Regalos incluidos
            </div>
          </div>
        </div>
      </section>

      {/* Video Facebook */}
      <section id="video" className="py-14 lg:py-20 bg-white max-w-[100vw] overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="text-center max-w-[680px] mx-auto">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#E7F0FF] text-[#1877F2] font-black text-[11px] tracking-widest uppercase">
              📹 Míralo en acción
            </div>
            <h2 className="display mt-4 text-[30px] lg:text-[48px] font-black leading-[0.9] break-words">
              Un vistazo al <span className="text-[var(--magenta)]">show</span>
            </h2>
            <p className="mt-3 text-[14px] lg:text-[15px] text-[var(--muted)] font-semibold">
              Esto es lo que viven los invitados en cada presentación.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-[500px] rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 border-white bg-black">
              <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1347754546936965&show_text=false&width=500"
                  width="100%"
                  height="100%"
                  style={{ border: "none", overflow: "hidden", position: "absolute", inset: 0 }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Pollo Bollo en acción"
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[12px] text-[var(--muted)] font-semibold">
            ¿No carga el video?{" "}
            <a
              href="https://www.facebook.com/reel/1347754546936965"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] font-black hover:underline"
            >
              Ábrelo en Facebook →
            </a>
          </p>
        </div>
      </section>

      {/* Sección Videojuego */}
      <section id="juego" className="relative py-14 lg:py-20 overflow-hidden bg-gradient-to-br from-[#7C3AED] via-[#C8005A] to-[#FFD60A] max-w-[100vw]">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.5)_35%,rgba(255,255,255,0.5)_36%,transparent_36%)] bg-[length:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white font-black text-[12px] tracking-widest uppercase">
              🎮 Nuevo
            </div>
            <h2 className="display mt-5 text-[34px] lg:text-[54px] font-black leading-[0.9] text-white break-words drop-shadow-lg">
              ¡Juega Pollo <br />
              Impacto! <br />
              <span className="text-[var(--yellow)]">Gratis</span>
            </h2>
            <p className="mt-4 text-[15px] lg:text-[17px] leading-[1.6] text-white/90 font-medium max-w-[520px]">
              Nuestro videojuego oficial. Acompaña a Pollo Bollo en una aventura llena de diversión, magia y muchos retos. ¡Disponible ahora mismo, sin descargas!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/pollo-impacto.html"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-full bg-[#FFFFFF] text-[#7C3AED] font-black text-[16px] inline-flex items-center justify-center gap-2 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all active:scale-[0.98]"
              >
                <span className="text-[20px]">🎮</span> Jugar Ahora
              </a>
              <span className="h-14 px-6 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white font-bold text-[13px] inline-flex items-center gap-2">
                ✨ Sin registro
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4 text-[13px] font-bold text-white/80 flex-wrap">
              <span className="flex items-center gap-1.5">✔ Funciona en celular</span>
              <span className="flex items-center gap-1.5">✔ No requiere instalar nada</span>
            </div>
          </div>

          <div className="relative lg:h-[400px] flex items-center justify-center min-w-0">
            <a
              href="/pollo-impacto.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jugar Pollo Impacto (abre en nueva pestaña)"
              className="group/game relative w-full max-w-[320px] aspect-square rounded-[2rem] bg-white/10 backdrop-blur-xl border-4 border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:bg-white/15 hover:border-white/50 hover:shadow-[0_28px_80px_rgba(0,0,0,0.45)] active:scale-[0.99] cursor-pointer"
            >
              <div className="text-[120px] lg:text-[140px] floaty transition-transform duration-300 group-hover/game:scale-110">
                🎮
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[1.5rem] bg-[#FFFFFF]/90 backdrop-blur-xl border border-white shadow-lg transition-all duration-300 group-hover/game:bg-white group-hover/game:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--yellow)] flex items-center justify-center text-[18px] shrink-0 transition-transform duration-300 group-hover/game:rotate-6">
                    🐥
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-black text-[13px] leading-none text-[#1A1033]">
                      Pollo Impacto
                    </div>
                    <div className="text-[11px] text-[#6B6780] font-semibold flex items-center gap-1">
                      Click para jugar
                      <span className="inline-block transition-transform duration-300 group-hover/game:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 px-3 h-8 rounded-full bg-[var(--yellow)] text-[#1A1033] font-black text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-lg opacity-0 group-hover/game:opacity-100 translate-y-[-8px] group-hover/game:translate-y-0 transition-all duration-300">
                ▶ Jugar
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Ideal para bar */}
      <div className="bg-[#1A1033] text-white py-4 overflow-hidden relative max-w-[100vw]">
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div
            className="w-full h-full"
            style={{ backgroundImage: `url(${blurBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Fiestas Infantiles", "Cumpleaños", "Baby Shower", "Posadas", "Eventos de Empresa", "Fiestas Escolares", "Despedidas", "Escuelas", "Aniversarios"].map((item) => (
              <span
                key={item}
                className="px-4 h-8 rounded-full bg-white/10 border border-white/15 flex items-center text-[13px] font-bold tracking-wide shrink-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Paquetes */}
      <section id="paquetes" className="relative py-16 lg:py-24 bg-[#FFFEF8] max-w-[100vw] overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="min-w-0">
              <div className="inline-flex px-3 py-1 rounded-full bg-[#F5E8FF] text-[var(--purple)] font-black text-[11px] tracking-widest uppercase">
                Catálogo oficial 2026
              </div>
              <h2 className="display mt-4 text-[34px] lg:text-[52px] font-black leading-[0.9] tracking-tight">
                Elige Tu <span className="text-[var(--magenta)]">Experiencia</span>
              </h2>
              <p className="mt-3 text-[15px] lg:text-[16px] text-[var(--muted)] font-semibold max-w-[520px]">
                5 shows diferentes, 1 mismo nivel de profesionalismo. Del baby shower tierno al Tx8 más picosito.
              </p>
              {filterFeedback && (
                <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-[#1A1033] text-white text-[12px] font-bold animate-pulse">
                  {filterFeedback}
                </div>
              )}
            </div>

            <div className="flex gap-2 p-1.5 rounded-full bg-[#F6F2FF] border border-[#EDE6FF] w-fit overflow-x-auto scrollbar-hide max-w-full">
              {[
                { id: "todos", label: "Todos" },
                { id: "familiar", label: "Familiar" },
                { id: "adultos", label: "Adultos" },
                { id: "especial", label: "Especiales" },
              ].map((t) => (
                <button
                  key={t.id}
                  data-testid={`filter-${t.id}`}
                  onClick={() => onFilter(t.id as "todos" | "familiar" | "adultos" | "especial")}
                  className={`px-5 h-9 rounded-full font-extrabold text-[13px] transition whitespace-nowrap shrink-0 ${
                    filter === t.id ? "bg-[#1A1033] text-white shadow" : "text-[#6B6780] hover:text-[#1A1033]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative rounded-[2rem] bg-white border border-[#F0E6F5] overflow-hidden shadow-[0_12px_40px_rgba(26,16,51,0.06)] hover:shadow-[0_20px_60px_rgba(26,16,51,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col min-w-0"
              >
                {pkg.badge && (
                  <div
                    className="absolute top-4 left-4 z-10 px-3 h-7 rounded-full text-[11px] font-black tracking-widest uppercase text-white shadow"
                    style={{ background: pkg.color }}
                  >
                    {pkg.badge}
                  </div>
                )}
                {pkg.id === "plus" && (
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[var(--yellow)] flex items-center justify-center text-[14px] shadow">
                    🔥
                  </div>
                )}
                {pkg.variants && pkg.variants.length > 1 && (
                  <div className="absolute top-4 right-4 z-10 px-3 h-7 rounded-full bg-white/90 backdrop-blur border border-white shadow text-[11px] font-black flex items-center gap-1">
                    ✨ {pkg.variants.length} versiones
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelected(pkg)}
                  aria-label={`Ver detalles de ${pkg.title}`}
                  className="relative h-[220px] overflow-hidden shrink-0 w-full block group/img text-left cursor-pointer"
                >
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${pkg.light} 0%, white 60%)` }} />
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    decoding="async"
                    className="relative w-full h-full object-cover opacity-95 group-hover:scale-[1.04] transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition duration-300 flex items-center justify-center pointer-events-none">
                    <span
                      className="px-4 h-10 rounded-full font-black text-[13px] inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,214,10,0.7),0_0_40px_rgba(255,214,10,0.35)] border-2 border-[#FFD60A]"
                      style={{ background: "#FFD60A", color: "#0F0A1E" }}
                    >
                      👆 Click en la imagen
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                    <span className="px-3 h-7 rounded-full bg-white/90 backdrop-blur border text-[11px] font-black flex items-center">
                      ⏱ {pkg.duration}
                    </span>
                    <span className="px-3 h-7 rounded-full bg-[#1A1033] text-white text-[11px] font-bold flex items-center max-w-[140px] truncate">
                      {pkg.audience}
                    </span>
                  </div>
                </button>

                <div className="p-6 flex flex-col flex-1 min-w-0">
                  <h3 className="font-black text-[17px] leading-[1.15] tracking-tight min-h-[44px] break-words">
                    {pkg.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pkg.bullets.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-full bg-[#F8F5FF] border border-[#EDE6FF] text-[11px] font-bold text-[#4B4670] max-w-full truncate"
                      >
                        • {b}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 flex-wrap">
                    {pkg.ideal.map((i, idx) => (
                      <span key={i} className="text-[11px] font-semibold text-[var(--muted)]">
                        {i} {idx !== pkg.ideal.length - 1 ? "•" : ""}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 flex gap-2">
                    <button
                      onClick={() => setSelected(pkg)}
                      className="flex-1 h-11 rounded-full border-2 border-[#1A1033] font-extrabold text-[13px] hover:bg-[#1A1033] hover:text-white transition"
                    >
                      Ver detalles
                    </button>
                    <button
                      onClick={() => handleWhatsApp(pkg.shortTitle)}
                      aria-label={`Cotizar ${pkg.shortTitle} por WhatsApp`}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold transition active:scale-95 shrink-0"
                      style={{ background: pkg.color }}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-[1.5rem] bg-[#FFF8D6] border border-[#FFEFB0] flex flex-col sm:flex-row items-center gap-3 text-[13px] font-semibold text-[#5A4A00]">
            <span className="w-8 h-8 rounded-full bg-[var(--yellow)] flex items-center justify-center shrink-0">📋</span> El
            costo puede variar de acuerdo con la ubicación y logística del evento. Todos los paquetes incluyen audio
            profesional.
          </div>
        </div>
      </section>

      {/* Experiencia Plus */}
      <section id="plus" className="relative py-16 lg:py-28 overflow-hidden bg-[#1A1033] text-white max-w-[100vw]">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="w-full h-full opacity-20"
            style={{ backgroundImage: `url(${blurBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1033] via-[#1A1033]/80 to-[#1A1033]" />
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--magenta)]/30 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--yellow)]/20 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="relative order-2 lg:order-1 min-w-0">
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] aspect-[4/3]">
              <div
                className="w-full h-full"
                style={{ backgroundImage: `url(${plusImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--yellow)] text-black flex items-center justify-center font-black text-xl shrink-0">
                    2
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-[15px]">Etapas • Experiencia Total</div>
                    <div className="text-[12px] text-white/70 font-semibold truncate">
                      Maquillaje + Magia + Botarga + Show
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 right-2 lg:-right-4 px-4 h-10 rounded-full bg-white text-black font-black text-[12px] flex items-center gap-2 shadow-xl rotate-3 max-w-[200px] truncate">
              🎭 Más de 90 min de fiesta
            </div>
          </div>

          <div className="order-1 lg:order-2 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-white/10 border border-white/15 text-[12px] font-black tracking-widest uppercase">
              Experiencia Plus Detallada
            </div>
            <h2 className="display mt-5 text-[34px] lg:text-[52px] font-black leading-[0.9] break-words">
              No es un show. <br />
              <span className="text-[var(--yellow)]">Es una intervención</span> <br />
              total.
            </h2>
            <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.6] text-white/70 font-medium max-w-[520px]">
              Una experiencia completa de entretenimiento para disfrutar, sorprender y hacer de tu celebración un
              momento inolvidable. Ambiente dinámico donde niños y adultos participan, conviven y disfrutan de principio
              a fin.
            </p>

            <div className="mt-8 relative">
              <div className="absolute left-[20px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[var(--yellow)] via-[var(--cyan)] to-[var(--magenta)] rounded-full opacity-60" />
              <div className="space-y-7">
                {[
                  {
                    stage: "ETAPA 1",
                    title: "Maquillaje + Magia Close Up + Botarga Bienvenida",
                    desc: "Llegamos antes. Maquillaje artístico para el festejado, magia de cerca para romper hielo y botarga de Pollo Bollo saludando, fotos y activación.",
                    icon: "🎨",
                    color: "#FFD60A",
                  },
                  {
                    stage: "ETAPA 2",
                    title: "Show Botarga Interactiva + Cierre Espectacular",
                    desc: "Show central con botarga bailando, juegos masivos, magia visual, lluvia de burbujas, confeti y entrega de premios. Convierte el espacio en una auténtica fiesta de alegría y movimiento.",
                    icon: "🤖",
                    color: "#00D5FF",
                  },
                ].map((et) => (
                  <div key={et.stage} className="relative flex gap-5">
                    <div
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black text-[16px] shadow-xl z-10 border-2 shrink-0"
                      style={{ borderColor: et.color }}
                    >
                      {et.icon}
                    </div>
                    <div className="flex-1 -mt-1 min-w-0">
                      <div
                        className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest"
                        style={{ background: et.color, color: "#000" }}
                      >
                        {et.stage}
                      </div>
                      <h4 className="mt-2 font-black text-[17px] lg:text-[18px] leading-tight break-words">{et.title}</h4>
                      <p className="mt-2 text-[13px] lg:text-[14px] leading-[1.5] text-white/65 font-medium">{et.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Interacción visual total", "Niños y adultos juntos", "Fondo instagrameable", "Confeti + burbujas final"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[13px] font-bold">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">✔</span>{" "}
                  <span className="min-w-0">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <button
                onClick={() => handleWhatsApp("Paquete Plus")}
                className="h-12 px-7 rounded-full bg-[var(--yellow)] text-black font-black text-[14px] shadow-[0_8px_20px_rgba(255,214,10,0.3)] hover:translate-y-[-1px] transition inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Cotizar Plus <WhatsAppIcon className="w-5 h-5" />
              </button>
              <a
                href="#paquetes"
                className="h-12 px-7 rounded-full bg-white/10 border border-white/20 font-bold text-[14px] flex items-center justify-center hover:bg-white/15 transition"
              >
                Ver todo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galería / Flyers */}
      <section id="shows" className="py-16 lg:py-24 bg-white max-w-[100vw] overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
              <h2 className="display text-[30px] lg:text-[48px] font-black leading-[0.9] break-words">
                Flyers oficiales <span className="text-[var(--magenta)]">•</span> Material real
              </h2>
              <p className="mt-3 text-[14px] lg:text-[15px] font-semibold text-[var(--muted)]">
                Diseño profesional listo para compartir. Hover para ver magia.
              </p>
            </div>
            <div className="px-4 h-9 rounded-full bg-[#1A1033] text-white text-[12px] font-black flex items-center shrink-0">
              ✨ 7 diseños oficiales
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { img: showInfantilImg, title: "Show Infantil", tag: "Familiar", color: "#1E40FF" },
              { img: showAdultosImg, title: "Bollo El Tx8", tag: "Adultos", color: "#7C3AED" },
              { img: babyImg, title: "Baby Shower", tag: "Ternura", color: "#FF5AA2" },
              { img: navidenoImg, title: "Navideño 2026-2027", tag: "Temporada", color: "#DC2626" },
              { img: plusImg, title: "Experiencia Plus", tag: "Premium", color: "#FFD60A" },
              { img: heroImg, title: "Pollo Bollo Hero", tag: "Oficial", color: "#00D5FF" },
              { img: cartoonImg, title: "Cartoon 3D", tag: "Personaje", color: "#C8005A" },
            ].map((g, i) => (
              <div
                key={i}
                className="group relative rounded-[1.75rem] overflow-hidden bg-[#F8F5FF] border border-[#EDE6FF] aspect-[3/4] shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all min-w-0"
              >
                <div
                  role="img"
                  aria-label={g.title}
                  className="w-full h-full group-hover:scale-[1.08] transition duration-700"
                  style={{ backgroundImage: `url(${g.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 h-6 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                      style={{ background: g.color }}
                    >
                      {g.tag}
                    </span>
                  </div>
                  <div className="mt-2 font-black text-white text-[15px] leading-tight break-words">{g.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Pollo Bollo */}
      <section className="py-16 lg:py-20 bg-[#FFFEF8] border-y border-[#F0E6F5] max-w-[100vw] overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="text-center max-w-[680px] mx-auto">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FFF1C1] text-[#7A5A00] font-black text-[11px] tracking-widest uppercase">
              ¿Por qué {BRAND_NAME}?
            </div>
            <h2 className="display mt-4 text-[30px] lg:text-[48px] font-black leading-[0.9] break-words">
              No es payaso. Es{" "}
              <span className="underline decoration-[var(--yellow)] decoration-8 underline-offset-2">experiencia premium</span>
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🎩",
                title: "Magia Profesional",
                desc: "Trucos de alto impacto, no magia de fiesta barata. Apariciones, desapariciones y mentalismo.",
                color: "#1E40FF",
              },
              {
                icon: "🤝",
                title: "Interacción Total",
                desc: "Nadie es espectador. Niños, papás y abuelos participan. Rompemos el hielo en 2 minutos.",
                color: "#00D5FF",
              },
              {
                icon: "🔊",
                title: "Escenografía + Audio Pro",
                desc: "Bocina profesional, micrófono inalámbrico, fondo para fotos y vestuario impecable.",
                color: "#C8005A",
              },
              {
                icon: "🎁",
                title: "Premios y Regalos",
                desc: "10 a 15 regalos incluidos según paquete. Nada de dar 2 premios. Aquí todos se llevan algo.",
                color: "#FFD60A",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-[1.75rem] bg-white border border-[#F0E6F5] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition min-w-0"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-[22px] font-black shrink-0"
                  style={{ background: `${f.color}15`, border: `2px solid ${f.color}30` }}
                >
                  {f.icon}
                </div>
                <h4 className="mt-4 font-black text-[17px] break-words">{f.title}</h4>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-[var(--muted)] font-medium break-words">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final / Contacto */}
      <section id="contacto" className="relative py-16 lg:py-24 overflow-hidden bg-[#1A1033] text-white max-w-[100vw]">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="w-full h-full opacity-30"
            style={{ backgroundImage: `url(${blurBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1033] via-[#1A1033]/90 to-[#2A145A]/90" />
        </div>
        <div className="absolute right-0 bottom-0 w-[460px] h-[460px] opacity-20 hidden lg:flex items-end justify-end pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src={cartoonImg}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain object-bottom floaty-slow max-w-full"
          />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8 grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-[var(--yellow)] text-black font-black text-[12px] tracking-wide">
              📅 Agenda tu fecha con {BRAND_NAME}
            </div>
            <h2 className="display mt-6 text-[34px] lg:text-[56px] font-black leading-[0.9] break-words">
              Haz de tu fiesta <br />
              <span className="text-[var(--yellow)]">un momento</span> <br />
              inolvidable 💖
            </h2>
            <p className="mt-4 text-[15px] lg:text-[16px] text-white/70 max-w-[480px] font-medium">
              Respuesta en 15 minutos. Cotización clara, sin letras chiquitas. Dime fecha, lugar y tipo de evento y te
              armo la propuesta ideal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => handleWhatsApp()}
                className="h-12 px-6 rounded-full bg-[#25D366] text-white font-black text-[14px] inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:translate-y-[-1px] transition"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp directo
              </button>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="h-12 px-6 rounded-full bg-[#00E5FF] text-black font-black text-[14px] inline-flex items-center justify-center gap-2 hover:bg-[#33EBFF] transition shadow-[0_0_20px_rgba(0,229,255,0.6),0_0_40px_rgba(0,229,255,0.3)] hover:shadow-[0_0_28px_rgba(0,229,255,0.8),0_0_56px_rgba(0,229,255,0.4)] active:scale-95 border-2 border-[#00E5FF]"
              >
                <span className="text-[18px]">📞</span> Llamar ahora
              </a>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur max-w-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">📋</div>
                <div className="text-[13px] leading-[1.5] text-white/70 font-medium min-w-0">
                  <span className="font-black text-white">Nota:</span> El costo puede variar de acuerdo con la ubicación
                  y logística del evento. Cuéntame dónde es y te cotizo en el momento.
                  <br />
                  <span className="mt-2 inline-flex font-bold text-[var(--yellow)]">
                    {LOCATION} – Shows en toda la región
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-white text-[#1A1033] p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] border border-white/20 min-w-0 overflow-hidden">
            <h3 className="display font-black text-[22px] break-words">Cotiza en 30 segundos</h3>
            <p className="mt-1 text-[13px] font-semibold text-[var(--muted)]">Sin compromiso • Respuesta rápida</p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="cotiza-nombre" className="text-[12px] font-black uppercase tracking-widest text-[#6B6780]">
                  Tu nombre
                </label>
                <input
                  id="cotiza-nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Ej. Mariana López"
                  className="mt-1.5 w-full h-12 px-4 rounded-2xl bg-[#F8F5FF] border border-[#EDE6FF] font-semibold text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--purple)]/30 focus:border-[var(--purple)] max-w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="min-w-0">
                  <label htmlFor="cotiza-evento" className="text-[12px] font-black uppercase tracking-widest text-[#6B6780]">
                    Tipo de evento
                  </label>
                  <select
                    id="cotiza-evento"
                    value={form.evento}
                    onChange={(e) => setForm({ ...form, evento: e.target.value })}
                    className="mt-1.5 w-full h-12 px-3 rounded-2xl bg-[#F8F5FF] border border-[#EDE6FF] font-bold text-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--purple)]/30 max-w-full"
                  >
                    <option>Fiesta Infantil</option>
                    <option>Show Adultos Tx8</option>
                    <option>Baby Shower</option>
                    <option>Paquete Plus</option>
                    <option>Posada / Navideño</option>
                    <option>Empresa</option>
                  </select>
                </div>
                <div className="min-w-0">
                  <label htmlFor="cotiza-fecha" className="text-[12px] font-black uppercase tracking-widest text-[#6B6780]">
                    Fecha
                  </label>
                  <input
                    id="cotiza-fecha"
                    type="date"
                    value={form.fecha}
                    onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                    className="mt-1.5 w-full h-12 px-3 rounded-2xl bg-[#F8F5FF] border border-[#EDE6FF] font-semibold text-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--purple)]/30 max-w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cotiza-mensaje" className="text-[12px] font-black uppercase tracking-widest text-[#6B6780]">
                  Mensaje
                </label>
                <textarea
                  id="cotiza-mensaje"
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntame dónde es, cuántos niños, etc."
                  rows={3}
                  className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-[#F8F5FF] border border-[#EDE6FF] font-medium text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--purple)]/30 max-w-full"
                />
              </div>

              {!sent ? (
                <button
                  onClick={() => {
                    if (!form.nombre) {
                      setToast("Pon tu nombre 🐥");
                      return;
                    }
                    setSent(true);
                    setToast("¡Listo! Abriendo WhatsApp 🚀");
                    const msg = `Hola ${BRAND_NAME}! Soy ${form.nombre}. Evento: ${form.evento} el ${form.fecha}. ${form.mensaje}`;
                    setTimeout(() => {
                      try {
                        window.open(waLink(msg), "_blank");
                      } catch {
                        /* no-op */
                      }
                    }, 600);
                  }}
                  className="w-full h-[52px] rounded-full bg-[var(--magenta)] text-white font-black text-[15px] shadow-[0_12px_24px_rgba(200,0,90,0.28)] hover:translate-y-[-1px] transition active:scale-[0.98] flex items-center justify-center gap-2 max-w-full"
                >
                  Enviar por WhatsApp <WhatsAppIcon className="w-5 h-5" />
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="w-full p-4 rounded-2xl bg-[#E6FFE6] border border-[#B6F2B6] text-[#0A5A0A] font-bold text-[14px] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span>¡Listo! Te abrimos WhatsApp con tu cotización. Respuesta en 15 min.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ nombre: "", evento: "Fiesta Infantil", fecha: "", mensaje: "" });
                    }}
                    className="w-full h-11 rounded-full bg-white border-2 border-[#1A1033]/15 font-bold text-[13px] hover:bg-[#F8F5FF] transition"
                  >
                    Enviar otra cotización
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-[var(--muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> En línea ahora • Tiempo de
                respuesta: ~8 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[#0D0A18] text-white border-t border-white/10 max-w-[100vw] overflow-hidden pb-10 sm:pb-12">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-10 flex flex-col lg:flex-row justify-between gap-8">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1">
                <img
                  src={logoImg}
                  alt="Pollo Bollo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="display font-black text-[20px]">{BRAND_NAME}</div>
            </div>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/60 max-w-[340px] font-medium">
              Magia, humor y diversión para celebrar los momentos que realmente importan. Shows profesionales en{" "}
              {LOCATION} y toda la región.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Pollo Bollo"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#0d5bc4] transition shrink-0"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Pollo Bollo"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 transition shrink-0"
                style={{ background: "linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" }}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Pollo Bollo"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#1a1a1a] transition shrink-0 border border-white/20"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Pollo Bollo"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1fb857] transition shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-[13px] min-w-0">
            <div>
              <div className="font-black text-white mb-3">Shows</div>
              <div className="space-y-2 text-white/60 font-semibold">
                <a href="#paquetes" className="block hover:text-white transition">Show Infantil</a>
                <a href="#paquetes" className="block hover:text-white transition">Bollo El Tx8</a>
                <a href="#paquetes" className="block hover:text-white transition">Baby Shower</a>
                <a href="#plus" className="block hover:text-white transition">Paquete Plus</a>
                <a href="#paquetes" className="block hover:text-white transition">Navideño</a>
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-black text-white mb-3">Contacto</div>
              <div className="space-y-2 text-white/60 font-semibold break-words">
                <div>WhatsApp: {WHATSAPP_DISPLAY}</div>
                <div>{LOCATION}</div>
                <div>Shows en toda la región</div>
                <button onClick={() => handleWhatsApp()} className="text-[var(--yellow)] hover:underline">
                  ¡Agenda tu fecha!
                </button>
                <div className="pt-2 space-y-1.5">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--yellow)] hover:underline font-semibold"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" /> Facebook
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--yellow)] hover:underline font-semibold"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" /> Instagram
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--yellow)] hover:underline font-semibold"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" /> TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 px-4">
          <div className="mx-auto max-w-[1240px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-[11px] font-bold tracking-widest text-white/40 uppercase">
              © {new Date().getFullYear()} {BRAND_NAME} — Magia, humor y diversión para toda la familia. Hecho con 💖 en Jalisco.
            </div>
            <a
              href="https://logoscript.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Desarrollado por Logoscript"
              className="group flex items-center gap-3 transition shrink-0"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-tight text-right">
                Desarrollado<br />por
              </span>
              <img
                src={logoEmpresaImg}
                alt="Logoscript"
                className="h-12 w-auto object-contain transition group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,214,10,0.5)]"
              />
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <button
        onClick={() => handleWhatsApp()}
        aria-label="Abrir WhatsApp"
        className={`fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] inline-flex items-center justify-center gap-2 text-[24px] transition-all duration-300 ease-out ${
          footerVisible
            ? "opacity-0 pointer-events-none translate-y-4 scale-75"
            : "opacity-100 pointer-events-auto translate-y-0 scale-100 hover:scale-105 active:scale-95"
        }`}
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--yellow)] border-2 border-white animate-pulse" />
      </button>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[120] px-5 h-12 rounded-full bg-[#1A1033] text-white font-bold text-[13px] shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex items-center gap-2 max-w-[90vw] truncate border border-white/10"
        >
          {toast}
        </div>
      )}

      {/* Modal de paquete */}
      {selected && (
        <PackageModal
          key={selected.id}
          pkg={selected}
          onClose={() => setSelected(null)}
          onWhatsApp={(label) => handleWhatsApp(label)}
        />
      )}
    </div>
  );
}
