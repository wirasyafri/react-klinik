/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CInputGroup,
    CInputGroupText,
    CRow,
  } from '@coreui/react'

  const FormDoctorTreatment = ({ showButton }) => {
    return (
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Tindakan Dokter</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-2">
            <CCol xs={4}>
              <CFormCheck id="flexCheckDefault1" label="Cek Darah" defaultChecked />
            </CCol>
            <CCol xs={4}>
              <CFormCheck id="flexCheckChecked2" label="Cek Kolesterol" />
            </CCol>
            <CCol xs={4}>
              <CFormCheck id="flexCheckChecked3" label="Suntik A" />
            </CCol>
            <CCol xs={12}>
                <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CFormCheck
                                type="checkbox"
                                value=""
                                aria-label="others treatment"
                            />
                        </CInputGroupText>
                        <CFormInput placeholder='Tindakan Lainnya...' aria-label="others treatment" />
                        <CInputGroupText>Rp.</CInputGroupText>
                        <CFormInput placeholder="00.00" aria-label="nominal"type='number' />
                    </CInputGroup>
                </CInputGroup>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    );
  };

export default React.memo(FormDoctorTreatment)
