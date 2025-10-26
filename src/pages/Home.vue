<template>
  <main>
    <!-- HERO -->
    <section class="hero" id="home" aria-label="Hero">
      <div class="hero-content">
        <div class="accent" aria-hidden="true"></div>
        <h1 class="reveal">MIYABI ROMÁN</h1>
        <p class="sub reveal" style="transition-delay:.08s">Arquitectura emocional entre Kanazawa y Barcelona</p>
        <div class="cta reveal" style="transition-delay:.16s">
          <a class="btn primary" href="#portfolio">Explorar portafolio</a>
          <RouterLink class="btn outline" to="/about">Conoce mi historia</RouterLink>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true">Scroll
        <div class="dot"></div>
      </div>
    </section>

    <!-- PORTFOLIO OVERVIEW -->
    <section id="portfolio" class="section wrap">
      <div class="stitle">Portafolio</div>
      <div class="grid cols-2">
        <RouterLink class="card reveal" :to="`/projects/${p.slug}`" v-for="p in projects" :key="p.slug" :aria-label="`Open project: ${p.title}`">
          <img :src="p.cover" :alt="p.alt">
          <div class="overlay">
            <div>
              <h3>{{ p.title }}</h3>
              <div class="meta">{{ p.location }} · {{ p.type }}</div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section wrap">
      <div class="stitle">Contacto</div>
      <div class="grid" style="grid-template-columns:1.1fr .9fr; gap:var(--gutter)">
        <div class="reveal">
          <h3 style="font-family:var(--serif); margin-top:0">Colaboraciones y encargos</h3>
          <p>Trabajo con clientes que buscan espacios residenciales o comerciales donde la estética dialoga con el bienestar emocional. Integro neuroarquitectura, filosofía japonesa y técnicas de Feng Shui en cada propuesta.</p>
          <p>¿Quieres conversar sobre tu proyecto? Escríbeme por WhatsApp y agendamos una sesión de descubrimiento.</p>
          <a class="btn primary" href="https://wa.me/59175954374" target="_blank" rel="noopener">Escríbeme por WhatsApp</a>
        </div>
        <div class="reveal" aria-label="Studio information">
          <div style="padding:18px; border:1px solid rgba(0,0,0,.08); border-radius:16px; background:linear-gradient(180deg, var(--fog), transparent)">
            <p><strong>Estudios</strong><br> Kanazawa, Japón<br> Barcelona, España</p>
            <p><strong>Email</strong><br> <a href="mailto:miyabi.ro@gmail.com">miyabi.ro@gmail.com</a></p>
            <p><strong>WhatsApp</strong><br> <a href="https://wa.me/59175954374" target="_blank" rel="noopener">+591 75954374</a></p>
            <p><strong>Redes</strong></p>
            <div class="social">
              <a href="https://www.instagram.com/miyabi.architects/?hl=es" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import projects from '../projects/data.js'

const observeReveal = () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
  }, { threshold: .18 })
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
}
onMounted(observeReveal)
</script>
