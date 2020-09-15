import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Document from '../../components/PDF'
import Layout from '../../layouts'

export default () => (
  <Layout.Main title="PDF">
    <PDFViewer className="w-100 h-100">
      <Document />
    </PDFViewer>
  </Layout.Main>
)
