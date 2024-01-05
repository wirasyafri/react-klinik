/* eslint-disable */

import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { FormPatient, FormDoctorTreatment, FormDoctorMedicine, ListPatient } from 'src/components'
import { DocsExample } from 'src/components'



const NewPatient = () => {


  return (
    <>
			<FormPatient showButton={true} headerLabel='Registrasi Pasien' buttonLabel='Daftar' readOnly={false}/>
      <ListPatient/>
    </>
  )
}

export default NewPatient
