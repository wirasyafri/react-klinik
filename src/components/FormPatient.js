/* eslint-disable */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDatePicker,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CRow,
  } from '@coreui/react'

  import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormPatient = ({ showButton, headerLabel="", buttonLabel="Submit", readOnly="true", autoFocus=true }) => {
    const [successAlertVisible, setSuccessAlertVisible] = useState(false)
    const [errorAlertVisible, setErrorAlertVisible] = useState(false)

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [formData, setFormData] = useState({
        nik: '',
        fullname: '',
        place_birth: '',
        date_birth: "1990-12-25", // or provide a default date if needed
        sex: '1', 
        // age: '',
        address: '',
        phone: '',
        // initial_complaint: '',
      });

    
      const handleChange = (name, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));

        console.log(`Updated ${name} value:`, value);
      };

      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDQyMDI3NTAsInVzZXJuYW1lIjoiYWRtaW4ifQ.NMwpsVm2LyjlbWcYXR35VRxpplzIoMVcun0OPQyR93U'; // Replace 'your_bearer_token' with your actual Bearer 
      const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessAlertVisible(false)
        setErrorAlertVisible(false)
        console.log(formData)
        try {
            const response = await fetch('http://127.0.0.1:4000/api/patient', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`, 
              },
              body: JSON.stringify(formData),
            });
          
            console.log(response)
            if (!response.ok) {
              throw new Error(`Status: ${response.status}, ${response.statusText} `);
            }
          
            // Process the response here
            const data = await response.json();
            console.log(data);
            setFormData({
                nik: '',
                fullname: '',
                place_birth: '',
                date_birth: "1990-12-25", // or provide a default date if needed
                sex: '1', 
                // age: '',
                address: '',
                phone: '',
                // initial_complaint: '',
            });
            setSuccessAlertVisible(true)
        } catch (error) {
            console.error('Fetch error:', error);
            setErrorAlertVisible(true)
        }
    };

    
    
    return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
    <CCard className="mb-4">
        <CCardHeader>
            <strong>{headerLabel}</strong>
        </CCardHeader>
        <CCardBody>
                <CRow className="mb-2">
                    <CFormLabel htmlFor="nik" className="col-sm-2 col-form-label">
                        NIK
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormInput
                            type="text"
                            name="nik"
                            placeholder="NIK"
                            value={formData.nik}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            size="sm"
                            readOnly={readOnly}
                            autoFocus = {autoFocus}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-2">
                    <CFormLabel htmlFor="fullname" className="col-sm-2 col-form-label">
                        Nama Pasien
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormInput
                            type="text"
                            name="fullname"
                            placeholder="Nama Pasien"
                            value={formData.fullname}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            size="sm"
                            readOnly={readOnly}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-2">
                    <CFormLabel htmlFor="place_birth" className="col-sm-2 col-form-label">
                        Tempat Lahir
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormInput
                            type="text"
                            name="place_birth"
                            placeholder="Tempat Lahir"
                            value={formData.place_birth}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            size="sm"
                            readOnly={readOnly}
                        />
                    </CCol>
                </CRow>
                {/* <CRow className="mb-2">
                    <CFormLabel htmlFor="date_birth" className="col-sm-2 col-form-label">
                        Tanggal Lahir
                    </CFormLabel>
                        <CCol sm={10}>
                        <DatePicker
                            selected={formData.date_birth}
                            onChange={(date) => handleChange('date_birth', date)}
                            dateFormat="dd/MM/yyyy" // You can customize the date format
                            isClearable // Adds a clear button
                        />
                    </CCol>
                </CRow> */}
                <CRow className="mb-2">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Jenis Kelamin
                    </CFormLabel>
                    <CCol sm={10}>
                        <CFormSelect 
                            size="sm" 
                            aria-label="select sex" 
                            name="sex"
                            value={formData.sex}
                            onChange={(e) => handleChange(e.target.name, e.target.value)} 
                            readOnly={readOnly}>
                                <option value="1">Laki - laki</option>
                                <option value="2">Perempuan</option>
                        </CFormSelect>
                    </CCol>
                </CRow>
                {/* <CRow className="mb-2">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Umur
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormInput type="number" id="inputPassword"
                            placeholder='Umur Pasien'
                            size="sm"
                            readOnly={readOnly}/>
                    </CCol>
                </CRow> */}
                <CRow className="mb-2">
                    <CFormLabel htmlFor="address" className="col-sm-2 col-form-label">
                        Alamat
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormTextarea
                            placeholder='Alamat Pasien'
                            value={formData.address}
                            name="address"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            rows={3}
                            size="sm"
                            readOnly={readOnly}/>
                        
                    </CCol>
                </CRow>
                <CRow className="mb-2">
                    <CFormLabel htmlFor="phone" className="col-sm-2 col-form-label">
                        Nomor Telepon
                    </CFormLabel>
                        <CCol sm={10}>
                        <CFormInput
                            type="text"
                            name="phone"
                            placeholder="Nomor Telepon"
                            value={formData.phone}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            size="sm"
                            readOnly={readOnly}
                        />
                    </CCol>
                </CRow>
                {/* <CRow className="mb-2">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Keluhan awal
                    </CFormLabel>
                    <CCol sm={10}>
                        <CFormSelect size="sm" aria-label="select sex" readOnly={readOnly}>
                            <option>Pilih Keluhan Awal</option>
                            <option value="1">Demam</option>
                            <option value="2">Batuk</option>
                            <option value="3">Sakit Fisik di area tertentu</option>
                            <option value="4">Lainnya</option>
                        </CFormSelect>
                    </CCol>
                </CRow> */}
                {showButton && (
                    // <Link to="/doctor/treatment">
                        <CCol className='auto'>
                            <CButton type="submit" className="mb-3">
                                {buttonLabel}
                            </CButton>
                            <CAlert color="success" visible={successAlertVisible}>
                                Berhasil menambahkan data pasien
                            </CAlert>
                            <CAlert color="danger" visible={errorAlertVisible}>
                                Gagal menambahkan data pasien
                            </CAlert>
                        </CCol>
                        
                    // </Link>
                )}
        </CCardBody>
    </CCard>
</CForm>
  )
}

export default React.memo(FormPatient)
