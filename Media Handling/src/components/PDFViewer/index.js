import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';

export default ({ documents }) => (
  <PDFViewer>{ documents }</PDFViewer>
); 
