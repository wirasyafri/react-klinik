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
    CRow,
  } from '@coreui/react'

const FormDoctorMedicine = ({ showButton }) => {
  return (
    <CCard className="mb-4">
    <CCardHeader>
        <strong>Obat</strong>
    </CCardHeader>
    <CCardBody>
            <CRow className="mb-2">
                    <CCol xs={12}>
                <CCardBody>
                    <CFormCheck id="flexCheckDefault" label="Paracetamol" defaultChecked/>
                    <CFormCheck id="flexCheckChecked" label="Demacoline" />
                    <CFormCheck id="flexCheckChecked" label="Dextro" />
                </CCardBody>
            </CCol>
            </CRow>
    </CCardBody>
</CCard>
  )
}

export default React.memo(FormDoctorMedicine)
