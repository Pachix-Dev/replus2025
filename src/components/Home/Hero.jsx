import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const [init, setInit] = useState(false)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 180,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ff0000',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'repulse',
          },
          onclick: {
            enable: false,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      style: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3,
      },
      retina_detect: true,
    }),
    []
  )

  if (init) {
    return (
      <section className='hero'>
        <Particles id='tsparticles' options={options} />
        <div className='position-relative'>
          <div className='brillo'></div>
          <img
            src='/logoREPLUS_2.webp'
            alt='Logo REPLUS'
            className='logoREPLUS'
          />
        </div>
        <p className='mt-5 fs-1 text-white'>
          {' '}
          {t('home.event-date')} | <span className=''>2025</span>
        </p>
        <p className='text-white fs-2'>EXPO GUADALAJARA, JALISCO</p>
        <p className='mt-2 text-white text-bold fs-4'>
          {t('home.organized_by')}:
        </p>
        <img src='/logosOrganizado.webp' className='mt-2' />
      </section>
    )
  }

  return <></>
}
