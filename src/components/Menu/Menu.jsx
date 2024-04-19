import { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Menu.css'
import { LanguageButton } from './LanguageButton'
export function Menu() {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <div
      className='position-sticky top-0'
      style={{ zIndex: 999, backgroundColor: '#212529' }}
    >
      <Navbar className='menu-solar text-uppercase text-center' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='d-grid text-white fs-6'>
            <img src='/logoREPLUS.webp' width={100} alt='RE+ México' />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='align-items-center'>
                <NavDropdown
                  title={t('menu.submenu_1.title')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/about-ssm'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_1.option_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/about-re-events'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_1.option_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/about-snec'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_1.option_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='https://hfmexico.mx/about-igeco'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_1.option_4')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.submenu_2.title')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/contact'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/DIRECTORIO_SOLAR_15-04-2024 _AC.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.directory')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/why-exhibit'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/exhibitor-profile'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/exhibitor-services'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_4')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/SOLAR-STORAGE-MEXICO-SPONSORSHIPS-V6-ENG.pdf'
                        : '/files/SOLAR-STORAGE-MEXICO-SPONSORSHIPS-V6.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_5')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/MANUAL-DEL-EXPOSITOR-ENG-020124.pdf'
                        : '/files/MANUAL-DEL-EXPOSITOR-020124.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_12')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/FACTSHEET-SOLAR-STORAGE-MEXICO-EN-v221123-ACv2.pdf'
                        : '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-ESPAÑOLv6.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_6')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/REMEX-2025-SpaceAgreement-ED.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_7')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='https://spmx24.mapyourshow.com/8_0/exhview/index.cfm'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_8')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='conference-program'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_9')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/expo-hall-education'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_13')}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/rates' onClick={handleClose}>
                    {t('menu.submenu_2.option_10')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/toolkit'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_2.option_11')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.submenu_3.title')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/why-visit'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_3.option_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/visitor-profile'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_3.option_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/LETTER-TEMPLATE-2024-SSM.pdf'
                    onClick={handleClose}
                    target='_blank'
                  >
                    {t('menu.submenu_3.option_3')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.submenu_4.title')}
                  renderMenuOnMount
                  disabled
                >
                  <p className='mb-0 fw-bold'>SSM 2023</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/RESULTS-REPORT-SSM-2023-ENG.pdf'
                        : '/files/REPORTE-DE-RESULTADOS-SSM-2023-ESP.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.results')} SSM 2023
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Directorio-SSM-2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.directory')} SSM 2023
                  </NavDropdown.Item>

                  <p className='mb-0 fw-bold'>SPM 2022</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/RESULTS-REPORT-SSM-2022-ENG.pdf'
                        : '/files/REPORTE-DE-RESULTADOS-SSM-2022-ESP.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.results')} SPM 2022
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item
                    href='/files/Directorio-SSM-2022.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.directory')} SPM 2022
                  </NavDropdown.Item> */}

                  <p className='mb-0 fw-bold'>SPM 2021</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/RESULTS-REPORT-SSM-2021-ENG.pdf'
                        : '/files/REPORTE-DE-RESULTADOS-SSM-2021-ESP.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.results')} SPM 2021
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item
                    href='/files/Directorio-SSM-2021.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.directory')} SPM 2021
                  </NavDropdown.Item> */}

                  <p className='mb-0 fw-bold'>SPM 2019</p>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'en'
                        ? '/files/RESULTS-REPORT-SSM-2019-ENG.pdf'
                        : '/files/REPORTE-DE-RESULTADOS-SSM-2019-ESP.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.results')} SPM 2019
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item
                    href='/files/Directorio-SSM-2019.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_4.directory')} SPM 2019
                  </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown
                  title={t('menu.submenu_5.title')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/gallery'
                    onClick={handleClose}
                  >
                    {t('menu.submenu_5.option_1')}
                  </NavDropdown.Item>
                </NavDropdown>
                <LanguageButton />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
