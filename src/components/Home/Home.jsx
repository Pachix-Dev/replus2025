import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

import './Home.css'
import { Header } from './Header'
import { Slider } from './Slider'
import { Gallery } from './Gallery'
import { useNearScreen } from '../hooks/useNearScreen'

export function Home () {
  const { t, i18n } = useTranslation()
  const [show, ref] = useNearScreen()

  const partners = [
    { link: 'https://www.energypartnership.mx/es/home/', image: '/AlianzaEnergetica.webp', width: 200, height: 67 },
    { link: 'https://amsoc.mx/es/inicio/', image: '/80-amsoc.webp', width: 150, height: 98 },
    { link: 'https://mexiko.ahk.de/es/', image: '/ahk.webp', width: 250, height: 65 },
    { link: 'https://www.emergealliance.org/', image: '/emmerge.webp', width: 200, height: 85 },
    { link: 'https://www.jalisco.gob.mx/', image: '/gobiernoJalisco.webp', width: 150, height: 150 },
    { link: 'https://mermx.org/', image: '/merm.webp', width: 200, height: 103 }
  ]
  const partners2 = [
    { link: 'https://www.eupd-research.com/', image: '/EUPD-Research.webp', width: 200, height: 38 },
    { link: 'http://www.galoenergy.com/', image: '/GaloEnergy.webp', width: 150, height: 76 },
    { link: 'https://www.giz.de/en/worldwide/33041.html', image: '/giz.webp', width: 250, height: 108 },
    { link: 'https://h2mex.org/', image: '/h2mexico-asoc.webp', width: 200, height: 68 },
    { link: 'https://www.kas.de/es/web/mexiko', image: '/KAS.webp', width: 150, height: 46 },
    { link: 'https://www.mujeresenergia.org/', image: '/redMujeres.webp', width: 200, height: 65 },
    { link: 'https://www.solarenergy.org/', image: '/SEI.webp', width: 150, height: 107 }
  ]
  const broadcasting = [
    { link: 'https://www.eleconomista.com.mx/', image: '/economista.webp', width: 200, height: 19 },
    { link: 'https://www.pv-magazine-mexico.com/', image: '/pv-magazine-group.webp', width: 200, height: 68 },
    { link: 'https://mexicoindustry.com/es', image: '/mexicoIndustry.webp', width: 150, height: 53 },
    { link: 'https://www.cosmos.com.mx/', image: '/onlineCosmos.webp', width: 200, height: 68 },
    { link: 'https://energyandcommerce.com.mx/', image: '/Energy-Commerce.webp', width: 150, height: 60 },
    { link: 'https://energiaadebate.com/', image: '/energiadebate.webp', width: 130, height: 75 },
    { link: 'https://energiahoy.com/', image: '/EnergiaHoy.webp', width: 200, height: 45 },
    { link: 'https://energy21.com.mx/', image: '/eneroy21.webp', width: 200, height: 40 }
  ]
  const broadcasting2 = [
    { link: 'https://globalenergy.mx/', image: '/Global-Energy.webp', width: 140, height: 62 },
    { link: 'https://globalindustries.mx/', image: '/global-industries.webp', width: 200, height: 62 },
    { link: 'https://greentology.life/', image: '/greentology.webp', width: 200, height: 55 },
    { link: 'https://revistaconsultoria.com.mx/', image: '/revistaConsultoria.webp', width: 200, height: 50 },
    { link: 'https://www.vanguardia-industrial.net/', image: '/VanguardiaIndustrial.webp', width: 150, height: 79 },
    { link: 'https://worldconstruccion.mx/', image: '/worldConstruccion.webp', width: 200, height: 34 },
    { link: 'https://discovercleantech.com/', image: '/discoverCleanTech.webp', width: 200, height: 48 },
    { link: 'http://www.revistadp.com/', image: '/revista-de-preferencia.webp', width: 200, height: 57 },
    { link: 'https://petroleoenergia.com/', image: '/petroleo_y_energia.webp', width: 150, height: 83 }
  ]
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Slider />
      <Container>
        <section>
          <div className='mt-5 pt-5 pb-5 text-center'>
            <p className='fw-bold fs-2'>{t('home.sponsor_platinum')}</p>
            <a href='https://consumer.huawei.com/mx/' target='_blank' rel='noreferrer'>
              <img width={200} height={45} src='/Huawei.webp' alt='Huawei' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_gold')}</p>
            <a href='https://www.longi.com/mx/' target='_blank' rel='noreferrer'>
              <img width={150} height={68} src='/LONGI.webp' alt='LONGI' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_silver')}</p>
            <a href='https://en.pylontech.com.cn/' target='_blank' rel='noreferrer'>
              <img width={200} height={50} src='/Pylontech.webp' alt='Pylontech' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor')}</p>
            <a href='https://sunpower.maxeon.com/mx/por-que-sunpower' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} height={47} src='/SUNPOWER.webp' alt='SUNPOWER' loading='lazy' />
            </a>

            <a href='https://www.iberdrolamexico.com/conocenos/iberdrola-en-mexico/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={150} height={101} src='/Ibedrola.webp' alt='Ibedrola' loading='lazy' />
            </a>

            <a href='https://solar-distribution.baywa-re.mx/es/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} height={76} src='/BayWar.webp' alt='BayWar' loading='lazy' />
            </a>

            <a href='https://es.s-5.com/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={100} height={100} src='/S-5logo.webp' alt='S-5logo' loading='lazy' />
            </a>
          </div>
        </section>
        <article className='pt-5'>
          <Row className='pt-5'>
            <Col md={6}>
              <p className='fw-bold fs-2 home-text-color'>SOLAR + STORAGE MEXICO 2024</p>
              <p className='fs-5'><strong>SOLAR + STORAGE MEXICO </strong><span dangerouslySetInnerHTML={{ __html: t('home.solar_description') }} />
              </p>
            </Col>
            <Col md={6} className='my-auto'>
              {
          i18n.language === 'en'
            ? <video className='w-100' controls src='/SSM-2024-ENG.mp4' poster='/posterSolarVideo2024ENG.webp' loading='lazy' />
            : <video className='w-100' controls src='/SSM-2024-ES.mp4' poster='/posterSolarVideo2024.webp' loading='lazy' />

        }
            </Col>
          </Row>
        </article>
        <Row className='mt-5 mb-5'>
          <Col md={4} className='mt-3 text-center'>
            <a
              href='https://www.youtube.com/watch?v=8sojVTHwz94'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/youtube1.webp'
                alt='YouTube video preview'
                width={320}
                height={180}
                loading='lazy'
              />
            </a>
          </Col>
          <Col md={4} className='mt-3 text-center'>
            <a
              href='https://www.youtube.com/watch?v=YaE8Iv6DeQM'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/youtube2.webp'
                alt='YouTube video preview'
                width={320}
                height={180}
                loading='lazy'
              />
            </a>
          </Col>
          <Col md={4} className='mt-3 text-center'>
            <a
              href='https://www.youtube.com/watch?v=Vgd9L5iemws'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/youtube3.webp'
                alt='YouTube video preview'
                width={320}
                height={180}
                loading='lazy'
              />
            </a>
          </Col>
        </Row>
        <p className='text-center'>
          <Link to='/videos' aria-label='videos SSM' className='text-decoration-none'>
            <span className='learnmore'>{t('home.more_videos')}</span>
          </Link>
        </p>
      </Container>
      <section className='mt-5 home-whyexhibit'>
        <p className='fw-bold fs-2'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={80}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z' />
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg> {t('home.why_exhibit')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description1')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description2')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description3')}
        </p>
      </section>
      <Container className='mt-5'>
        <Row>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z' />
              <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_select')}</p>
            <p>{t('home.why_exhibit_select_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_visit')}</p>
            <p>{t('home.why_exhibit_visit_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_general')}</p>
            <p>{t('home.why_exhibit_general_desc')}</p>
          </Col>
        </Row>
        <section className='pt-5' ref={ref}>
          <p className='fw-bold fs-2 text-center home-text-color'>{t('home.gallery')} SSM 2023</p>
          {show && <Gallery />}
          <p className='mt-5 text-center'>
            <Link to='/gallery' aria-label='gallery SSM' className='text-decoration-none'>
              <span className='learnmore'>{t('home.more_gallery')}</span>
            </Link>
          </p>
        </section>
      </Container>
      <section className='mt-5'>
        <Container>
          <p className='fw-bold fs-2 text-secondary text-center'>{t('home.organized_by')}:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.iegexpo.it/en/' target='_blank' rel='noreferrer'>
                <img src='/italianExhibitionGroup.webp' width={150} height={82} loading='lazy' alt='italianExhibitionGroup' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                <img src='/deutscheMesse.webp' width={250} height={54} loading='lazy' alt='deutscheMesse' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='http://www.snec.org.cn/' target='_blank' rel='noreferrer'>
                <img src='/snecPower.webp' width={150} height={114} loading='lazy' alt='snecPower' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.re-plus.com/' target='_blank' rel='noreferrer'>
                <img src='/replus.webp' width={100} height={53} loading='lazy' alt='replus' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Powered by:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.amif.mx/' target='_blank' rel='noreferrer'>
                <img src='/amif.webp' width={200} height={59} loading='lazy' alt='amif' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://asolmex.org/' target='_blank' rel='noreferrer'>
                <img src='/asolmex.webp' width={150} height={150} loading='lazy' alt='asolmex' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.seia.org/' target='_blank' rel='noreferrer'>
                <img src='/seiaSolarEnergy.webp' width={200} height={62} loading='lazy' alt='seiaSolarEnergy' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://sepapower.org/' target='_blank' rel='noreferrer'>
                <img src='/SmartElectric.webp' width={200} height={62} loading='lazy' alt='SmartElectric' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>{t('home.strategic_partners')}:</p>
          <Marquee gradient>
            {partners.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img width={sponsor.width} height={sponsor.height} src={sponsor.image} alt={`Sponsor ${index}`} loading='lazy' />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient direction='letf'>
            {partners2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img width={sponsor.width} height={sponsor.height} src={sponsor.image} alt={`Sponsor ${index}`} loading='lazy' />
                </a>
              </div>
            ))}
          </Marquee>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Broadcasting Media Partner</p>
          <Row className='text-center mb-5'>
            <Col md={3} className='mt-3 mx-auto my-auto'>
              <a href='https://heraldodemexico.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/El_Heraldo_de_Mexico.webp' width={250} height={37} loading='lazy' alt='El_Heraldo_de_Mexico' />
              </a>
            </Col>
          </Row>
          <Marquee gradient direction='letf'>
            {broadcasting.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img width={sponsor.width} height={sponsor.height} src={sponsor.image} alt={`Sponsor ${index}`} loading='lazy' />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient className='mt-3'>
            {broadcasting2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img width={sponsor.width} height={sponsor.height} src={sponsor.image} alt={`Sponsor ${index}`} loading='lazy' />
                </a>
              </div>
            ))}
          </Marquee>
        </Container>
      </section>
    </>
  )
}
