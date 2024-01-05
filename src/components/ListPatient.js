/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CRow,
    CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CDropdown, CDropdownMenu, CDropdownToggle, CDropdownItem
  } from '@coreui/react'

const ListPatient = ({ showButton, headerLabel="", buttonLabel="Submit", readOnly="true", autoFocus=true }) => {
    const [data, setData] = useState([]);
    const bearerToken = localStorage.getItem('token');
    const navigate = useNavigate();


    const fetchData = async () => {
        try {
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`, 
          };
    
          const options = {
            method: 'GET',
            headers: headers,
          };
    
          const response = await fetch('http://127.0.0.1:4000/api/patient', options);
          console.log(response)
          if (response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login page
            console.error('Unauthorized access. Redirecting to login page...');
            // Redirect logic here, for example:
            localStorage.setItem('authorized', 1);
            navigate('/login');
            return;
          }
          const result = await response.json();
          setData(result.Data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

    const handleProsesClick = (id) => {
        console.log(`Processing item with ID: ${id}`);
      };
    
    const handleEditClick = (id) => {
    console.log(`Editing item with ID: ${id}`);
    };

    const handleDeleteClick = async (id) => {
        try {
          // Logic to delete a patient by id
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`, 
          };
  
          const response = await fetch(`http://127.0.0.1:4000/api/patient/${id}`, {
            method: 'DELETE',
            headers: headers,
          });
    
          if (response.ok) {
            fetchData()
          } else {
            console.error('Failed to delete patient');
          }
        } catch (error) {
          console.error('Error deleting patient:', error);
        }
      };

    return (
    <CCol xs={12}>
        <CCard className="mb-4">
            <CCardHeader>
                <strong>Daftar Pasien</strong> <small>(Hari ini)</small>
            </CCardHeader>
            <CCardBody>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">No</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                            <CTableHeaderCell scope="col"></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    {/* <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>
                                <CButton
                                    color="success"
                                    variant="outline">
                                    Proses
                                </CButton>
                                <CDropdown>
                                    <CDropdownToggle color="secondary" variant='outline'>Action</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Edit</CDropdownItem>
                                        <CDropdownItem href="#">Delete</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Jacob</CTableDataCell>
                            <CTableDataCell>@fat</CTableDataCell>
                            <CTableDataCell>
                                <CButton
                                    color="success"
                                    variant="outline">
                                    Proses
                                </CButton>
                                <CDropdown>
                                    <CDropdownToggle color="secondary" variant='outline'>Action</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Edit</CDropdownItem>
                                        <CDropdownItem href="#">Delete</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CTableDataCell>
                        </CTableRow>
                    </CTableBody> */}
                    <CTableBody>
                    {data && data.length > 0 ? (
                      data.map((item, index) => (
                            <CTableRow key={item.ID}>
                                <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                                <CTableDataCell>{item.Fullname}</CTableDataCell>
                                <CTableDataCell>{item.PlaceBirth}</CTableDataCell>
                                <CTableDataCell>
                                    <CButton 
                                        color="success" 
                                        variant="outline"
                                        onClick={() => handleProsesClick(item.id)}>
                                        Proses
                                    </CButton>
                                    <CDropdown>
                                    <CDropdownToggle color="secondary" variant="outline">
                                        Action
                                    </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Edit</CDropdownItem>
                                        <CDropdownItem onClick={() => handleDeleteClick(item.ID)}>Delete</CDropdownItem>
                                    </CDropdownMenu>
                                    </CDropdown>
                                </CTableDataCell>
                            </CTableRow>
                        ))
                        ) : (
                          <p>No data available</p>
                        )}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
      </CCol>
  )
}

export default React.memo(ListPatient)
