module.exports = {
  content: ['./index.html'],
  safelist: ["absolute", "active", "fixed", "flex", "flex-col", "flex-wrap", "font-semibold", "gap-3", "gap-5", "gap-8", "grid", "grid-cols-1", "hidden", "inset-0", "justify-center", "leading-relaxed", "lg:grid-cols-4", "max-w-4xl", "max-w-5xl", "max-w-6xl", "mb-1", "mb-2", "mb-5", "mb-6", "mb-8", "mt-10", "mt-4", "mx-auto", "opacity-70", "opacity-80", "pb-10", "px-6", "px-8", "py-10", "py-12", "relative", "sm:grid-cols-2", "stat", "text-2xl", "text-center", "text-sm", "text-xl", "text-xs", "tracking-widest", "uppercase", "w-full", "z-10"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
