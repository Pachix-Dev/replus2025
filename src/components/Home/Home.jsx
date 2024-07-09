import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Aos from 'aos' // Inicialisa AOS
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS

import './Home.css'
import { Gallery } from './Gallery'
import { useNearScreen } from '../hooks/useNearScreen'
import {
  broadcasting,
  broadcasting2,
  exhibitors,
  exhibitors2,
  exhibitors3,
  exhibitors4,
  partners,
  partners2,
  exhibitors5,
  exhibitors6,
} from '../../constans_logos'
import { Bullets } from './Bullets'
import { Hero } from './Hero'
import '@justinribeiro/lite-youtube'
import VisitorExperiences from '../VisitorExperiences/VisitorExperiences'

export function Home() {
  const { t, i18n } = useTranslation()
  const [show, ref] = useNearScreen()

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <section
        className='position-relative d-flex align-items-center justify-content-center'
        style={{ textShadow: '4px 4px 4px black' }}
      >
        <Hero />
      </section>

      <Container>
        <article className='mt-2'>
          <Row className='pt-5 '>
            <Col md={6} className='mx-auto'>
              <div className='px-2'>
                <p className='fw-bold fs-3 home-text-color'>RE+ MEXICO</p>
                <p className='fs-5 text-format'>
                  <strong> Solar+ Storage MEXICO 2024 </strong>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('home.solar_description'),
                    }}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </article>
        <section className='py-5'>
          <div className='container-items'>
            <a href={
              i18n.language === 'en'
                ? '/files/RE+MEX_2025_FS_ENG_AC_24-04-2024.pdf'
                : '/files/RE+MEX_2025_FS_ESP_AC_24-04-2024.pdf'
            } target='_blank' className='text-decoration-none'><div className='btn-item'> {t("menu.submenu_2.option_6")}  </div></a>
            <a href='/files/Floor-Plan_RE_MEX_2025_090724.pdf'
              target='_blank' className='text-decoration-none'><div className='btn-item'> {t("menu.submenu_2.option_8")} 2025 </div></a>
            <a href='/files/REMEX_2025_SpaceAgreement_ED_160524.pdf'
              target='_blank' className='text-decoration-none'><div className='btn-item'>  {t("menu.submenu_2.option_7")} </div></a>
            <a href={
              i18n.language === 'en'
                ? '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ENG_AF_2024_v3.pdf'
                : '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ESP_AF_2024_v3.pdf'
            }
              target='_blank' className='text-decoration-none'><div className='btn-item'> {t("menu.submenu_4.results")} 2024 </div></a>
          </div>
        </section>
        {/* Patrocinadores */}
        <section>
          <div className='mt-5 pb-5 text-center'>
            <p className='fw-bold fs-2'>{t('home.sponsor_platinum')}</p>
            <a
              href='https://consumer.huawei.com/mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                width={200}
                height={45}
                src='/Huawei.webp'
                alt='Huawei'
                loading='lazy'
              />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_gold')}</p>
            <Row className='gap-2 justify-content-md-center'>
              <Col
                sm={12}
                md={4}
                lg={2}
                className='d-flex align-items-center justify-content-center'
              >
                <a href='https://quartux.com/' target='_blank' rel='noreferrer'>
                  <img
                    width={200}
                    src='/quartux.webp'
                    alt='quartux'
                    loading='lazy'
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={2}
                className='d-flex align-items-center justify-content-center'
              >
                <a
                  href='https://www.longi.com/mx/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    width={200}
                    src='/longi_logo.webp'
                    alt='LONGI'
                    loading='lazy'
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={2}
                className='d-flex align-items-center justify-content-center'
              >
                <a
                  href='https://www.enlight.mx/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    width={200}
                    src='/enlight_v2.webp'
                    alt='enlight'
                    loading='lazy'
                    className='img-fluid'
                  />
                </a>
              </Col>
            </Row>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor')}</p>
            <Row className='d-flex align-items-center justify-content-center gap-5'>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-center justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://hitachi.com.mx/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={150}
                      src='/hitachi.webp'
                      alt='hitachi'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://sunpower.maxeon.com/mx/por-que-sunpower'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={170}
                      src='/SUNPOWER.webp'
                      alt='SUNPOWER'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://es.s-5.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={100}
                      src='/S-5logo.webp'
                      alt='S-5logo'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://korepower.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={240}
                      src='/korepower.webp'
                      alt='korepower'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center gap-5 pt-2'>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://latam.apsystems.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={200}
                      src='/apSystems.webp'
                      alt='apSystems'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://www.trinasolar.com/es'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={200}
                      src='/trina-solar.webp'
                      alt='trina solar'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://solar-distribution.baywa-re.mx/es/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={250}
                      src='/BayWar.webp'
                      alt='trina solar'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center gap-5 pt-2'>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a href='' target='_blank' rel='noreferrer' className='p-3'>
                    <img
                      width={200}
                      src='/solargamo.webp'
                      alt='solargamo'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a
                    href='https://es.antaisolar.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='p-3'
                  >
                    <img
                      width={150}
                      src='/antai.webp'
                      alt='antai'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} className=''>
                <div
                  className='d-flex align-items-start justify-content-center'
                  style={{ padding: '0px', marginBottom: '0px' }}
                >
                  <a href='' target='_blank' rel='noreferrer' className='p-3'>
                    <img
                      width={200}
                      src='/seraphim.webp'
                      alt='seraphim'
                      loading='lazy'
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>

      {/* ¿QUIERES SER PATROCINADOR? */}
      <section className='background-section py-5'>
        <Container className='text-center py-5'>
          <div data-aos='zoom-in' data-aos-duration='1000'>
            <p className='text-light fs-1 fw-bold text-uppercase'>
              {t('home.sponsors.title')}
            </p>
            <div className='d-block d-flex align-items-center justify-content-center pt-3 mt-4'>
              <a
                className='text-decoration-none text-black'
                href={
                  i18n.language === 'en'
                    ? '/files/RE+ MEXICO SPONSORSHIPS 2025 ENG_v3.pdf'
                    : '/files/RE+ MEXICO SPONSORSHIPS 2025 ESP_v3.pdf'
                }
                target='_blank'
              >
                <p className='fs-5 fw-bold button-sponsors d-flex align-items-center justify-content-center p-2'>
                  {t('home.sponsors.description')}
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ¿POR QUÉ ASISTIR? */}
      <Container>
        <section className='py-5'>
          <p
            className='text-center fs-2 fw-bolder'
            style={{ color: '#bc0101' }}
          >
            {' '}
            {t('home.attend.reasons_visiting_title')}{' '}
          </p>
          <Row className='text-center fs-6 fw-semibold fst-italic pt-4'>
            <Col xs={12} md={4} lg={4}>
              <div data-aos='flip-left' data-aos-duration='1000'>
                <img src='/attend_icon_1.webp' alt='' width='100' />
                <p className='mt-3 mx-5'> {t('home.attend.item_1')} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos='flip-left' data-aos-duration='1000'>
                <img src='/attend_icon_2.webp' alt='' width='100' />
                <p className='mt-3 mx-5'> {t('home.attend.item_2')} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos='flip-left' data-aos-duration='1000'>
                <img src='/attend_icon_3.webp' alt='' width='100' />
                <p className='mt-3 mx-5'> {t('home.attend.item_3')} </p>
              </div>
            </Col>
          </Row>
          <Row className='text-center fs-6 fw-semibold fst-italic mt-5'>
            <Col xs={4} lg={2}></Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos='flip-left' data-aos-duration='1000'>
                <img src='/attend_icon_4.webp' alt='' width='100' />
                <p className='mt-3 mx-5'> {t('home.attend.item_4')} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos='flip-left' data-aos-duration='1000'>
                <img src='/attend_icon_5.webp' alt='' width='100' />
                <p className='mt-3 mx-5'> {t('home.attend.item_5')} </p>
              </div>
            </Col>
            <Col ls={2}></Col>
          </Row>
        </section>
      </Container>

       {/* Precios 2025 */}
       <Container fluid className='background-section py-5'>
        <h2 className='fw-bold fs-2 pb-2 text-white text-uppercase text-center'>RE+ MEXICO {t('home.rates.title')} 2025 </h2>
        <p className='fst-italic fs-4 mb-5 text-center text-white '> {t('home.rates.sub-title')}</p>
        <div>
          <Row className='mx-2 gap justify-content-md-center'>
            <Col md={12} lg={5} xl={4} className='pb-5'>
              <div className="card card-price">
                <div className="card-body text-center">
                  <h2 className="card-title fw-bold" dangerouslySetInnerHTML={{
                    __html: t("home.rates.item1.title1")
                  }} />
                  <Row className='py-3 align-items-end'>
                    <Col>
                      <p className='fw-bold text-danger' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item1.price1-title")
                      }} />
                      <p className='fw-bold' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item1.price1")
                      }} />
                    </Col>
                    <Col>
                      <p className='fw-bold text-danger' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item1.price2-title")
                      }} />
                      <p className='fw-bold' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item1.priece2")
                      }} />
                    </Col>
                  </Row>
                  <p className="card-text fw-bold fs-4 text-uppercase">{t("home.rates.item1.title2")}</p>
                  <ul className="list-group list-group-flush  fs-5">
                    <li className="list-group-item">{t("home.rates.item1.topic1")}</li>
                    <li className="list-group-item">{t("home.rates.item1.topic2")}</li>
                    <li className="list-group-item"></li>
                  </ul>
                  <p className="card-text fw-bold fs-6 text-uppercase pt-3">{t("home.rates.item1.topic3")}</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={5} xl={4} className='pb-5'>
              <div className="card card-price">
                <div className="card-body text-center">
                  <h2 className="card-title fw-bold" dangerouslySetInnerHTML={{
                    __html: t("home.rates.item2.title1")
                  }} />
                  <Row className='py-3 align-items-end'>
                    <Col>
                      <p className='fw-bold text-danger' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item2.price1-title")
                      }} />
                      <p className='fw-bold' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item2.price1")
                      }} />
                    </Col>
                    <Col>
                      <p className='fw-bold text-danger' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item2.price2-title")
                      }} />
                      <p className='fw-bold' dangerouslySetInnerHTML={{
                        __html: t("home.rates.item2.price2")
                      }} />
                    </Col>
                  </Row>
                  <p className="card-text fw-bold fs-4 text-uppercase">{t("home.rates.item1.title2")}</p>
                  <ul className="list-group list-group-flush fs-5">
                    <li className="list-group-item">{t("home.rates.item2.topic1")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic2")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic3")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic4")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic5")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic6")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic7")}</li>
                    <li className="list-group-item">{t("home.rates.item2.topic8")}</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={12} lg={5} xl={4} className='pb-5'>
              <div className="card card-price">
                <div className="card-body text-center">
                  <h2 className="card-title fw-bold">{t("home.rates.item3.title1")}</h2>
                  <p className="card-text fs-5 pt-3">{t("home.rates.item3.desc1")}</p>
                  <p className="card-text fs-5 pt-3">{t("home.rates.item3.desc2")}</p>
                  <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                      <Col className="text-center">
                        <a
                          href={
                            i18n.language === 'en'
                              ? '/files/RE+ MEXICO SPONSORSHIPS 2025 ENG_v3.pdf'
                              : '/files/RE+ MEXICO SPONSORSHIPS 2025 ESP_v3.pdf'
                          }
                          target="_blank"
                          className="text-decoration-none"
                        >
                          <Button variant="primary" className="fs-5 btn-item">
                            Saber más
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className='background-section'>
        <Container className='py-5'>
          <p className='text-center fs-2 fw-bolder text-light'>
            {' '}
            {t('home.title-visitor-profile')}{' '}
          </p>
          <Row>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos='fade-down' data-aos-duration='1000'>
                <ul className='list-group gap-3 justify-content-center fw-semibold fst-italic'>
                  <li className='list-group-item visitor-profile d-flex align-items-center '>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3 text-center'>
                      {t('home.visitor-profile.item_1')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_2')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_3')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_4')}{' '}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos='fade-down' data-aos-duration='1500'>
                <ul className='list-group gap-3 justify-content-center fw-semibold fst-italic'>
                  <li className='list-group-item visitor-profile d-flex align-items-center '>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3 text-center'>
                      {t('home.visitor-profile.item_5')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_6')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_7')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_8')}{' '}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos='fade-down' data-aos-duration='2000'>
                <ul className='list-group gap-3 justify-content-center fw-semibold fst-italic'>
                  <li className='list-group-item visitor-profile d-flex align-items-center '>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3 text-center'>
                      {t('home.visitor-profile.item_9')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_10')}{' '}
                    </p>
                  </li>
                  <li className='list-group-item visitor-profile d-flex align-items-center'>
                    <img
                      src='/icon_check.webp'
                      alt='solar-storage-check'
                      width='50'
                    />
                    <p className='px-2 mt-3'>
                      {t('home.visitor-profile.item_11')}{' '}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Numeralia de resultados */}
      {/* <Container fluid>
        <section className='mt-5'>
          <Row className='text-light'>
            <Col md className='background_num1 position-num'>
              <div>
                <Bullets number='7500' duration='6' simbol_1='+' />
                <div className='text-center fw-bold text-light'>
                  <i className='fs-5'>{t('home.bullet_1')}</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num2 position-num'>
              <div>
                <Bullets
                  number='13000'
                  duration='6'
                  simbol_2={t('home.bullet_6')}
                />
                <div className='text-center fw-bold text-light'>
                  <i className='fs-5'>{t('home.bullet_2')}</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num3 position-num'>
              <div>
                <Bullets number='120' duration='6' simbol_1='+' />
                <div className='text-center fw-bold text-light'>
                  <i className='fs-5'>{t('home.bullet_3')}</i>
                  <br />
                  <br />
                </div>
              </div>
            </Col>
            <Col md className='background_num4 position-num'>
              <div>
                <Bullets
                  number='462'
                  duration='6'
                  simbol_1='+'
                  simbol_2={t('home.bullet_7')}
                />
                <div className='text-center fw-bold text-light'>
                  <i className='fs-5'>{t('home.bullet_4')}</i>
                  <br />
                  <i>(2023)</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num5 position-num'>
              <div>
                <Bullets
                  number='6'
                  duration='6'
                  simbol_1='+'
                  simbol_2={t('home.bullet_7')}
                />
                <div className='text-center fw-bold text-light'>
                  <i className='fs-5'>{t('home.bullet_5')}</i>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container> */}

      <Container>
        <p className='my-5 fw-bold fs-2 text-secondary text-center text-uppercase'>
          {t('home.exhibitors')} 2024
        </p>
        <Marquee gradient>
          {exhibitors.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors2.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <a href={sponsor.link} target='_blank' rel='noreferrer'>
                <img
                  width={sponsor.width}
                  height={sponsor.height}
                  src={sponsor.image}
                  alt={`Sponsor ${index}`}
                  loading='lazy'
                />
              </a>
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitors3.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors4.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitors5.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors6.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
      </Container>
      
      <Container className='my-5'>
        <p className='my-5 fw-bold fs-2 text-secondary text-center text-uppercase'>
          {t('home.title-testimonials')}
        </p>
        <VisitorExperiences className='p-5' />
        <p className='text-center pt-5'>
          <Link
            to='/videos'
            aria-label='Videos'
            className='text-decoration-none'
          >
            <span className='learnmore'>{t('home.more_videos')}</span>
          </Link>
        </p>
      </Container>
      {/* CONTACTO */}
      <section className='background-section'>
        <p className='text-center fs-2 fw-bolder text-light pt-5 text-uppercase'>
          {t('footer.contact')}
        </p>
        <Container className='py-4'>
          <Row className='text-light mb-4'>
            <Col md className='text-center py-3 fs-5'>
              <div data-aos='zoom-in-up' data-aos-duration='2000'>
                <img
                  src='/samuel-ramirez.webp'
                  alt='Samuel Ramirez'
                  width={120}
                  height={120}
                  className='rounded-circle'
                />
                <p className='mt-3 fw-bold'>México, Centro & Sudamérica</p>
                <p className='m-0'>Samuel Ramírez</p>
                <a
                  href='mailto:samuel.ramirez@igeco.mx'
                  className='text-light text-decoration-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#1d7e7a'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    width={20}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>{' '}
                  samuel.ramirez@igeco.mx
                </a>
                <p className='mt-3'>
                  <a href='mailto:samuel.ramirez@igeco.mx' className='mt-5'>
                    <button
                      type='button'
                      className='btn btn-light text-uppercase'
                    >
                      {' '}
                      {t('home.button_contact')}{' '}
                    </button>
                  </a>
                </p>
              </div>
            </Col>
            <Col md className='text-center py-3 fs-5'>
              <div data-aos='zoom-in-up' data-aos-duration='2000'>
                <img
                  src='/raymanWu.webp'
                  alt='Rayman Wu'
                  width={120}
                  height={120}
                  className='rounded-circle'
                />
                <p className='mt-3 fw-bold'>China</p>
                <p className='m-0'>Rayman Wu</p>
                <a
                  href='mailto:info@snec.org.cn'
                  className='text-light text-decoration-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#1d7e7a'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    width={20}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>{' '}
                  info@snec.org.cn
                </a>
                <p className='mt-3'>
                  <a href='mailto:info@snec.org.cn' className='mt-5'>
                    <button
                      type='button'
                      className='btn btn-light text-uppercase'
                    >
                      {' '}
                      {t('home.button_contact')}{' '}
                    </button>
                  </a>
                </p>
              </div>
            </Col>
            <Col md className='text-center py-3 fs-5'>
              <div data-aos='zoom-in-up' data-aos-duration='2000'>
                <img
                  src='/Pamela-velazquez.webp'
                  alt='Pamela Velázquez'
                  width={120}
                  height={120}
                  className='rounded-circle'
                />
                <p className='mt-3 fw-bold'>USA</p>
                <p className='m-0'>Pamela Velazco</p>
                <a
                  href='mailto:pvelazco@re-plus.com'
                  className='text-light text-decoration-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#1d7e7a'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    width={20}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>{' '}
                  pvelazco@re-plus.com
                </a>
                <p className='mt-3'>
                  <a href='mailto:pvelazco@re-plus.com' className='mt-5'>
                    <button
                      type='button'
                      className='btn btn-light text-uppercase'
                    >
                      {' '}
                      {t('home.button_contact')}{' '}
                    </button>
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Link to='/contact' className='text-decoration-none text-black '>
            <p className='text-center'>
              <div className='contact-button d-flex justify-content-center align-items-center'>
                <p className='fs-3 fw-bold m-2'>DEJAR UN COMENTARIO</p>
              </div>
            </p>
          </Link>
        </Container>
      </section>
      <Container className='mt-5'>
        <div data-aos='fade-zoom-in' data-aos-delay='500'>
          <section className='pt-5'>
            <p className='fw-bold fs-2 text-center home-text-color'>
              {t('home.gallery')} SSM 2024
            </p>
            <Gallery />
            <p className='mt-5 text-center'>
              <Link
                to='/gallery'
                aria-label={t('home.more_gallery')}
                className='text-decoration-none'
              >
                <span className='learnmore'>{t('home.more_gallery')}</span>
              </Link>
            </p>
          </section>
        </div>
        <section className='mt-5 pt-5'>
          <p className='fw-bold fs-2 text-secondary text-center'>
            {t('home.organized_by')}:
          </p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='https://www.iegexpo.it/en/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/italianExhibitionGroup.webp'
                  width={150}
                  height={82}
                  loading='lazy'
                  alt='italianExhibitionGroup'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='https://www.messe.de/en/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/deutscheMesse.webp'
                  width={250}
                  height={54}
                  loading='lazy'
                  alt='deutscheMesse'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://re-plus.events' target='_blank' rel='noreferrer'>
                <img
                  src='/RE_Events_orange.webp'
                  width={100}
                  height={80}
                  loading='lazy'
                  alt='replus'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='http://www.snec.org.cn/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/snec-logo-new.webp'
                  // width={150}
                  height={114}
                  loading='lazy'
                  alt='snecPower'
                />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            Powered by:
          </p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://www.amif.mx/' target='_blank' rel='noreferrer'>
                <img
                  src='/amif.webp'
                  width={200}
                  height={59}
                  loading='lazy'
                  alt='amif'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://asolmex.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/asolmex.webp'
                  width={150}
                  height={150}
                  loading='lazy'
                  alt='asolmex'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://www.seia.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/seiaSolarEnergy.webp'
                  width={200}
                  height={62}
                  loading='lazy'
                  alt='seiaSolarEnergy'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://sepapower.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/SmartElectric.webp'
                  width={200}
                  height={62}
                  loading='lazy'
                  alt='SmartElectric'
                />
              </a>
            </Col>
          </Row>
        </section>
      </Container>
      <section className='mt-5'>
        <Container>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            {t('home.strategic_partners')}:
          </p>
          <Marquee gradient>
            {partners.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient direction='letf'>
            {partners2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            Broadcasting Media Partner
          </p>
          <Marquee gradient direction='letf'>
            {broadcasting.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient className='mt-3'>
            {broadcasting2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
        </Container>
      </section>
      {/* se elimina numeralia de redes */}
      {/* <section>
        <div data-aos='zoom-in' data-aos-duration='2500' ref={ref}>
          {show && (
            <Container className='my-5'>
              <Row className='text-secondary text-center mb-5'>
                <Col
                  lg={12}
                  className='fs-1 fw-bolder'
                  style={{ color: '#8C3295' }}
                >
                  {' '}
                  {t('home.social_networks.title')}{' '}
                </Col>
                <Col lg={12} className=''>
                  <img
                    src='/instagram.webp'
                    alt=''
                    width={35}
                    className='m-2'
                  />
                  <img src='/facebook.webp' alt='' width={35} className='m-2' />
                  <img src='/twitter.webp' alt='' width={35} className='m-2' />
                  <img src='/linkedin.webp' alt='' width={35} className='m-2' />
                </Col>
              </Row>
              <Row className='d-flex align-items-center justify-content-center'>
                <Col lg={4}>
                  <img src='/social_networks.webp' alt='' height={350} />
                </Col>
                <Col lg={8}>
                  <Row className='text-secondary d-flex align-items-center justify-content-center'>
                    <Col lg={3} className='text-center'>
                      <Bullets number='21000' duration='6' simbol_1='+' />
                      <p className='fs-6 text-uppercase'>
                        <span
                          className='fs-3 fw-bolder'
                          style={{ color: '#8C3295' }}
                        >
                          {t('home.social_networks.topic_1')}
                        </span>
                        <br />
                        {t('home.social_networks.dec_1')}
                      </p>
                    </Col>
                    <Col lg={6} className='text-center'>
                      <Bullets number='2500000' duration='6' simbol_1='+' />
                      <p className='fs-6 text-uppercase'>
                        <span
                          className='fs-3 fw-bolder'
                          style={{ color: '#8C3295' }}
                        >
                          {t('home.social_networks.topic_2')}
                        </span>
                        <br />
                        {t('home.social_networks.dec_2')}
                      </p>
                    </Col>
                    <Col lg={3} className='text-center'>
                      <p className='fs-6 text-uppercase'>
                        <span
                          className='fs-3 fw-bolder'
                          style={{ color: '#8C3295' }}
                        >
                          {t('home.social_networks.topic_3')}
                        </span>
                        <br />
                        {t('home.social_networks.dec_3')}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </section> */}
    </>
  )
}
