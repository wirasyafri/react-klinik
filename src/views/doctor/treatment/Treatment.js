/* eslint-disable */

import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { FormPatient, FormDoctorTreatment, FormDoctorMedicine } from 'src/components'
import { DocsExample } from 'src/components'



const Treatment = () => {


  return (
    <>
			<FormPatient showButton={false} autoFocus={false}/>
			<FormDoctorTreatment />
			<FormDoctorMedicine />
      
      <div className="d-grid gap-2">
        <CButton color="primary">Selesai</CButton>
      </div>

      
    </>
  )
}

export default Treatment
